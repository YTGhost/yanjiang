<template>
  <div class="root">
    <img class="background" alt="bg" />
    <div class="login">
      <p class="title">评分系统</p>
      <div class="name">
        <p class="des">您的姓名：</p>
        <el-input
          class="input"
          placeholder="请输入您的姓名"
          v-model="name"
        ></el-input>
      </div>
      <div class="branch">
        <p class="des">所属支部：</p>
        <el-input
          @focus="toShowPicker"
          readonly
          class="input"
          placeholder="请选择您的支部"
          v-model="branch_name"
        >
        </el-input>
      </div>
      <div class="explain">
        <div class="block"></div>
        <p class="text">*非实名视为废票</p>
      </div>
      <el-button class="score" @click="toScore">开始评分</el-button>
    </div>
    <van-popup v-model="showPicker" position="bottom" class="popup">
      <p class="des">所属支部</p>
      <van-cell-group>
        <van-cell
          v-for="item in branchList"
          :key="item.branch_id"
          :title="item.branch_name"
          @click="clickBranch(item.branch_id, item.branch_name)"
        />
      </van-cell-group>
      <div class="cancel" v-on:click="toCancel">取消</div>
    </van-popup>
  </div>
</template>

<script>
import { branchOptions, branchId2Name } from "../constants/list.js";
import { API } from "../constants/api";
export default {
  name: "Index",
  data() {
    return {
      name: "",
      branch_name: "",
      branch_id: 0,
      showPicker: false,
      branchList: branchOptions,
    };
  },
  methods: {
    toShowPicker() {
      this.showPicker = true;
    },
    toCancel() {
      this.showPicker = false;
    },
    async toScore() {
      if (this.name === "" || this.branch_id === 0) {
        const t = this.$tip({
          type: 1,
          msg: "您的信息未填写完整",
          confirm: () => {
            t.toHide();
          },
        });
        t.toShow();
        return;
      }
      const { data: res } = await this.$http.post(API.login, {
        name: this.name,
        branch_id: this.branch_id,
      });
      if (!res.code) {
        await this.$store.dispatch("setProfile", {
          branch_id: this.branch_id,
          branch_name: branchId2Name[this.branch_id],
          name: this.name,
        });
        this.$router.replace("/home");
      }
    },
    clickBranch(branch_id, branch_name) {
      this.branch_name = branch_name;
      this.branch_id = branch_id;
      this.showPicker = false;
    },
  },
};
</script>

<style scoped lang="less">
.root {
  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: url("../assets/bg.png");
    @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
      content: url("../assets/bg@2x.png");
    }
  }
  .login {
    width: 80%;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    text-align: center;
    .title {
      margin: 0 auto;
      height: 50px;
      font-size: 36px;
      color: #ffffff;
      font-weight: 600;
      line-height: 62px;
      opacity: 1;
    }
    .name {
      display: flex;
      align-items: center;
      height: 88px;
      margin-top: 48px;
      .des {
        height: 30px;
        opacity: 1;
        font-size: 30px;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 30px;
        white-space: nowrap;
      }
      .input {
        width: 440px;
        height: 88px;
        /deep/ .el-input__inner {
          width: 440px;
          height: 88px;
          opacity: 1;
          border-radius: 6px;
          font-size: 30px;
        }
      }
    }
    .branch {
      display: flex;
      align-items: center;
      height: 88px;
      margin-top: 48px;
      .des {
        height: 30px;
        opacity: 1;
        font-size: 30px;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 30px;
        white-space: nowrap;
      }
      .input {
        width: 440px;
        height: 88px;
        /deep/ .el-input__inner {
          width: 440px;
          height: 88px;
          opacity: 1;
          border-radius: 6px;
          font-size: 30px;
        }
      }
    }
    .explain {
      display: flex;
      align-items: center;
      height: 33px;
      margin-top: 10px;
      .block {
        width: 150px;
      }
      .text {
        height: 33px;
        opacity: 1;
        font-size: 24px;
        font-weight: 400;
        text-align: left;
        color: #ffe270;
      }
    }
    .score {
      margin: 59px auto 0;
      width: 400px;
      height: 88px;
      opacity: 1;
      background: linear-gradient(180deg, #ffe270, #ffc234);
      border-radius: 6px;
      color: #9d1c1c;
      font-size: 34px;
      font-weight: 600;
    }
  }
  .popup {
    height: 911px;
    .des {
      margin: 30px auto 26px;
      width: 120px;
      height: 42px;
      font-size: 30px;
      font-weight: 400;
      color: #959595;
      line-height: 34px;
    }
    /deep/ .van-cell {
      height: 88px;
      padding: 0;
    }
    /deep/ .van-cell__title {
      font-size: 26px;
      font-weight: 400;
      line-height: 88px;
      margin-left: 39px;
      text-align: left;
      color: #232323;
    }
    .cancel {
      margin-top: 14px;
      margin-bottom: 1px;
      width: 750px;
      height: 88px;
      line-height: 88px;
      font-weight: 400;
      font-size: 28px;
      color: #959595;
    }
  }
}
</style>
