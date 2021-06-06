<template>
  <div class="root">
    <img class="background" alt="bg" />
    <p class="title">管理系统</p>
    <el-button v-if="!isStop" class="button" @click="toStop">
      评分结束
    </el-button>
    <el-button v-if="isStop" class="button" @click="toScore">
      查看选手评分
    </el-button>
  </div>
</template>

<script>
import { API } from "../constants/api";
export default {
  name: "admin",
  data() {
    return {
      isStop: false,
    };
  },
  async created() {
    const { data: res } = await this.$http.get(API.vote_status);
    if (!res.code) this.isStop = !res.data;
  },
  methods: {
    toStop() {
      const t = this.$tip({
        type: 2,
        msg: "截至后将不再接收评分提交，确认终止评分吗？",
        align: true,
        confirm: async () => {
          const { data: res } = await this.$http.get(API.vote_stop);
          if (!res.code) {
            const { data: res } = await this.$http.get(API.vote_status);
            if (!res.code) this.isStop = !res.data;
          }
          t.toHide();
        },
      });
      t.toShow();
    },
    toScore() {
      this.$router.push("/result");
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
  .title {
    position: absolute;
    font-size: 36px;
    font-weight: 600;
    color: #ffffff;
    left: 50%;
    top: 950px;
    transform: translate(-50%);
  }
  .button {
    width: 400px;
    height: 88px;
    background: linear-gradient(180deg, #ffe270, #ffc234);
    border-radius: 6px;
    position: absolute;
    top: 1074px;
    left: 50%;
    transform: translate(-50%);
    color: #9d1c1c;
    font-weight: 600;
    font-size: 34px;
  }
}
</style>
