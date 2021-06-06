<template>
  <div class="root" id="root" :class="{ adapt: isAdapt }">
    <div class="avatarContainer">
      <img class="avatar" />
      <div class="name">{{ name }}</div>
    </div>
    <div class="container">
      <div class="leftItem"></div>
      <div class="rightItem"></div>
      <div class="total">
        <div v-show="showTotal">{{ total }}</div>
      </div>
      <p class="totalDes">综合得分</p>
      <div class="group">
        <div
          class="item"
          v-for="item in list"
          :key="item.id"
          :class="{
            special: item.id === 4 || item.id === 5,
            first: item.id === 1,
          }"
        >
          <p class="title">{{ item.title }}</p>
          <div class="desGroup">
            <p class="des" v-for="des in item.des" :key="des">{{ des }}</p>
          </div>
          <div class="buttonGroup">
            <div
              class="button"
              :class="{
                last: option.id === 3,
                active: item.score === option.score,
              }"
              v-for="option in scoreOptions"
              :key="option.id"
              v-on:click="toScore(item.id, option.score)"
            >
              {{ option.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="buttonGroup" :class="{ adapt: isAdapt }">
      <el-button class="cancel" @click="toCancel">取消</el-button>
      <el-button class="confirm" @click="toConfirm">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Score",
  data() {
    return {
      id: 0,
      total: 0,
      name: "",
      showTotal: false,
      isModify: false,
      isAdapt: false,
      list: [
        {
          id: 1,
          title: "形象风度",
          des: ["·仪态端庄得体，落落大方", "·台风稳健，精神饱满"],
          score: 0,
        },
        {
          id: 2,
          title: "现场表达",
          des: ["·语言表达自然流畅，声音洪亮", "·演讲节奏张弛有度，具有感染力"],
          score: 0,
        },
        {
          id: 3,
          title: "演讲内容",
          des: ["·主题明确，见解独到", "·材料充实，层次分明"],
          score: 0,
        },
        {
          id: 4,
          title: "结合实际",
          des: ["·密切围绕中心发展"],
          score: 0,
        },
        {
          id: 5,
          title: "时长控制",
          des: ["·时长控制在8分钟内"],
          score: 0,
        },
      ],
      scoreOptions: [
        {
          id: 1,
          score: 1,
          text: "1分",
        },
        {
          id: 2,
          score: 1.5,
          text: "1.5分",
        },
        {
          id: 3,
          score: 2,
          text: "2分",
        },
      ],
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.name = this.$store.state.candidates[this.id - 1].name;
    for (let i = 0; i < 5; i++) {
      this.list[i].score = this.$store.state.candidates[this.id - 1].score[i];
      this.total += this.$store.state.candidates[this.id - 1].score[i];
    }
    if (this.check()) {
      this.showTotal = true;
    }
  },
  mounted() {
    let offsetHeight = document.getElementById("root").offsetHeight;
    let clientHeight = document.documentElement.clientHeight;
    this.isAdapt = offsetHeight < clientHeight;
  },
  methods: {
    toScore(id, score) {
      this.isModify = true;
      this.$set(this.list[id - 1], "score", score);
      let sum = 0;
      this.list.forEach((item) => (sum += item.score));
      this.total = sum;
      this.showTotal = this.check();
      this.$forceUpdate();
    },
    check() {
      return this.list.filter((item) => item.score === 0).length === 0;
    },
    toConfirm() {
      const res = this.check();
      if (res) {
        this.$store.dispatch("setScore", {
          id: this.id,
          list: this.list,
          total: this.total,
        });
        this.$router.push("/home");
      } else {
        const t = this.$tip({
          type: 1,
          msg: "您还未完成当前评分",
          confirm: () => {
            t.toHide();
          },
        });
        t.toShow();
      }
    },
    toCancel() {
      if (!this.isModify) {
        this.$router.push("/home");
        return;
      }
      const t = this.$tip({
        type: 2,
        msg: "返回将不保存当前选手评分？",
        confirm: () => {
          t.toHide();
          this.$router.push("/home");
        },
      });
      t.toShow();
    },
  },
};
</script>

<style scoped lang="less">
.root {
  height: 100%;
  width: 100%;
  background: #9d1c1c;
  padding-top: 26px;
  .avatarContainer {
    width: 224px;
    height: 224px;
    background: #fff8dc;
    margin: 26px auto 0;
    z-index: 999;
    border-radius: 50%;
    position: relative;

    .avatar {
      width: 148px;
      height: 148px;
      margin: 29px auto 0;
      content: url("../assets/img1.png");
      @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
        content: url("../assets/img1@2x.png");
      }
    }

    .name {
      width: 207px;
      height: 59px;
      background: #b92323;
      border-radius: 4px;
      margin: -7px auto 0;
      color: #ffffff;
      font-weight: 600;
      font-size: 36px;
      text-align: center;
      line-height: 59px;
    }
  }
  .container {
    position: relative;
    overflow: hidden;
    width: 694px;
    height: 1274px;
    margin: -121px auto 0;
    border-radius: 8px;
    background: #ffffff;
    z-index: 0;

    .leftItem {
      width: 57px;
      height: 48px;
      background: #9d1c1c;
      position: absolute;
      left: 201px;
      top: 95px;

      &::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        left: -1px;
        border-top: 24px solid transparent;
        border-left: 14px solid #ffffff;
        border-bottom: 24px solid transparent;
      }
    }

    .rightItem {
      width: 57px;
      height: 48px;
      background: #9d1c1c;
      position: absolute;
      right: 197px;
      top: 95px;

      &::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        right: -1px;
        border-top: 24px solid transparent;
        border-right: 14px solid #ffffff;
        border-bottom: 24px solid transparent;
      }
    }

    .total {
      height: 87px;
      margin: 163px auto 0;
      font-size: 62px;
      font-weight: 600;
      color: #c12020;
      font-family: PingFang SC, PingFang SC-Semibold;
    }

    .totalDes {
      margin: 3px auto 0;
      font-weight: 400;
      color: #9d1c1c;
      font-size: 24px;
    }

    .group {
      width: 656px;
      margin: 40px auto 0;

      .item {
        width: 656px;
        height: 190px;
        margin-top: 12px;
        background: #fffbeb;
        border-radius: 8px;
        position: relative;

        .title {
          position: absolute;
          margin: 0;
          left: 29px;
          top: 36px;
          font-size: 30px;
          font-weight: 400;
          color: #232323;
        }

        .desGroup {
          position: absolute;
          left: 30px;
          top: 92px;

          .des {
            margin: 0;
            color: #686868;
            text-align: left;
            font-weight: 400;
            font-size: 24px;
          }
        }

        .buttonGroup {
          position: absolute;
          display: flex;
          align-items: center;
          top: 30px;
          background: transparent;
          right: 31px;
          height: 46px;
          width: 298px;

          .button {
            width: 86px;
            height: 46px;
            background: #f1ebeb;
            border: 1px solid #ebe5e5;
            border-radius: 5px;
            margin-right: 20px;
            font-size: 26px;
            line-height: 46px;
            font-weight: 400;
            white-space: nowrap;
          }

          .last {
            margin-right: 0;
          }

          .active {
            background: #c12020;
            color: #ffffff;
          }
        }
      }

      .special {
        height: 155px;
      }

      .first {
        margin-top: 0;
      }
    }
  }
  .buttonGroup {
    display: flex;
    align-content: center;
    margin-top: 11px;
    width: 750px;
    height: 99px;
    background: #ffffff;

    .cancel {
      width: 240px;
      height: 74px;
      margin-top: 12px;
      margin-left: 116px;
      background: #ffffff;
      border: 1px solid #9d1c1c;
      border-radius: 7px;
      color: #9d1c1c;
      font-size: 28px;
    }

    .confirm {
      width: 240px;
      height: 74px;
      margin-left: 38px;
      margin-top: 12px;
      background: #ab1919;
      border-radius: 6px;
      color: #ffffff;
      font-size: 28px;
    }
  }
  .adapt {
    bottom: 0;
    position: absolute;
  }
}
.adapt {
  position: absolute;
}
</style>
