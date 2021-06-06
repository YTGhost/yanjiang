<template>
  <div class="root">
    <div class="info">
      <div class="branch">
        <img class="icon" />
        <p class="text">所属支部：{{ branch_name }}</p>
      </div>
      <div class="name">
        <img class="icon" />
        <p class="text">您的姓名：{{ name }}</p>
        <div class="logout" v-on:click="logout">退出</div>
      </div>
    </div>
    <div class="list">
      <div class="itemGroup" v-for="item in dataList" :key="item.id">
        <div class="item" :class="{ first: item.id === 1 }">
          <img class="avatar" />
          <p class="name">{{ item.name }}</p>
          <p v-if="item.total === 0" class="noScore">未评分</p>
          <p v-if="item.total === 0" class="goScore" @click="toScore(item.id)">
            去评分
          </p>
          <p v-if="item.total !== 0" class="scoreDes">总得分：</p>
          <p v-if="item.total !== 0" class="score">{{ item.total }}</p>
          <div class="arrow" v-on:click="toScore(item.id)"></div>
        </div>
      </div>
    </div>
    <el-button class="submit" @click="onSubmit">提交评分</el-button>
    <p class="submitDes">提交后无法修改</p>
  </div>
</template>

<script>
import { API } from "../constants/api";
export default {
  name: "Home",
  computed: {
    branch_name() {
      return this.$store.state.profile.branch_name;
    },
    name() {
      return this.$store.state.profile.name;
    },
    dataList() {
      return this.$store.state.candidates;
    },
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push("/index");
    },
    check() {
      return this.dataList.filter((item) => item.total === 0).length === 0;
    },
    async onSubmit() {
      if (this.check()) {
        const t = this.$tip({
          type: 2,
          msg: "提交后将无法修改，确定提交？",
          confirm: async () => {
            const param = {
              name: this.$store.state.profile.name,
              branch_id: this.$store.state.profile.branch_id,
              score: this.dataList.map((item) => item.total),
            };
            const { data: res } = await this.$http.post(API.vote, param);
            if (!res.code) {
              t.toHide();
              this.$router.replace("/success");
            } else {
              t.toHide();
            }
          },
        });
        t.toShow();
      } else {
        const t = this.$tip({
          type: 1,
          msg: "您还未完成所有选手的评分？",
          confirm: () => {
            t.toHide();
          },
        });
        t.toShow();
      }
    },
    toScore(id) {
      this.$router.push({
        path: "/score",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>
<style scoped lang="less">
.root {
  height: 100%;
  padding-top: 31px;
  padding-bottom: 32px;
  background: #9d1c1c;
  .info {
    .branch {
      display: flex;
      align-items: center;
      height: 40px;
      margin-left: 43px;
      .icon {
        width: 30px;
        height: 30px;
        content: url("../assets/icon1.png");
        @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
          content: url("../assets/icon1@2x.png");
        }
      }
      .text {
        height: 40px;
        font-size: 28px;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .name {
      display: flex;
      align-items: center;
      height: 40px;
      margin-top: 16px;
      margin-left: 43px;
      .icon {
        width: 30px;
        height: 30px;
        content: url("../assets/icon2.png");
        @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
          content: url("../assets/icon2@2x.png");
        }
      }
      .text {
        height: 40px;
        font-size: 28px;
        font-weight: 400;
        color: #ffffff;
      }
      .logout {
        margin-left: 42px;
        width: 69px;
        height: 35px;
        border: 1px solid #30dcff;
        border-radius: 5px;
        background: transparent;
        color: #30dcff;
        font-size: 16px;
        font-weight: 400;
        line-height: 35px;
        white-space: nowrap;
      }
    }
  }
  .list {
    .itemGroup {
      .item {
        width: 666px;
        height: 108px;
        background: #ffffff;
        border-radius: 6px;
        margin: 54px auto 0;
        padding-right: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .avatar {
          width: 148px;
          height: 148px;
          margin-left: 13px;
          margin-bottom: 44px;
          content: url("../assets/img1.png");
          @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
            content: url("../assets/img1@2x.png");
          }
        }
        .name {
          font-size: 30px;
          width: 120px;
          font-weight: 400;
          margin-left: 38px;
          color: #232323;
          white-space: nowrap;
        }
        .scoreDes {
          font-size: 24px;
          font-weight: 400;
          margin-left: 50px;
          color: #9d1c1c;
          white-space: nowrap;
        }
        .noScore {
          font-size: 24px;
          font-weight: 400;
          margin-left: 58px;
          color: #959595;
          white-space: nowrap;
        }
        .goScore {
          font-size: 24px;
          font-weight: 400;
          color: #9d1c1c;
          margin-left: 91px;
          margin-right: 4px;
          white-space: nowrap;
        }
        .score {
          width: 42px;
          font-size: 42px;
          font-weight: 500;
          margin-left: -10px;
          margin-right: 119px;
          color: #9d1c1c;
        }
        .arrow {
          width: 12px;
          height: 12px;
          border-top: 5px solid #9d1c1c;
          border-right: 5px solid #9d1c1c;
          transform: rotate(45deg);
        }
      }
      .first {
        margin-top: 82px;
      }
    }
  }
  .submit {
    width: 400px;
    height: 88px;
    margin-top: 70px;
    background: linear-gradient(180deg, #ffe270, #ffc234);
    border-radius: 6px;
    color: #9d1c1c;
    font-size: 34px;
    font-weight: 600;
  }
  .submitDes {
    font-size: 28px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 31px;
    margin-bottom: 0;
  }
}
</style>
