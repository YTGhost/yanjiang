<template>
  <div class="root">
    <van-popup v-model="show" @closed="toRemove" class="popup">
      <img class="notice" />
      <p class="message" :class="{ align: align }">{{ msg }}</p>
      <div class="box">
        <div class="group">
          <el-button v-if="type === 2" class="cancel" @click="toHide">
            取消
          </el-button>
          <el-button class="confirm" @click="toConfirm">确定</el-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "SimpleTip",
  props: {
    /**
     * 为1时仅有确定按钮
     * 为2时确定和取消按钮都有
     */
    type: {
      type: Number,
      default: 1,
    },
    msg: {
      type: String,
      default: "",
    },
    confirm: {
      type: Function,
      default: () => {},
    },
    /**
     * message的align
     * true为left
     * false为center
     */
    align: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toShow() {
      this.show = true;
    },
    toHide() {
      this.show = false;
    },
    toRemove() {
      this.remove();
    },
    toConfirm() {
      this.confirm();
    },
  },
};
</script>

<style scoped lang="less">
.root {
  .popup {
    width: 642px;
    height: 430px;
    border-radius: 8px;
    text-align: center;
    .notice {
      width: 70px;
      height: 70px;
      margin: 71px auto 0;
      content: url("../assets/notice icon.png");
      @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
        content: url("../assets/notice icon@2x.png");
      }
    }
    .message {
      text-align: center;
      margin: 43px auto 0;
      max-width: 510px;
      font-size: 30px;
      color: #232323;
      font-weight: 400;
    }
    .align {
      text-align: left;
    }
    .box {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: 53px;
      .group {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 74px;
        .cancel {
          width: 210px;
          height: 74px;
          border: 1px solid #9d1c1c;
          color: #9d1c1c;
          margin-right: 40px;
          font-size: 28px;
          font-weight: 400;
        }
        .confirm {
          width: 210px;
          height: 74px;
          margin-left: 0;
          font-weight: 400;
          font-size: 28px;
          color: #ffffff;
          background: #ab1919;
        }
      }
    }
  }
}
</style>
