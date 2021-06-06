<template>
  <div class="root">
    <img class="success" />
    <p class="successDes">评价提交成功</p>
    <p class="thank">感谢您的参与</p>
  </div>
</template>

<script>
export default {
  name: "Success",
  data() {
    return {

    }
  },
  methods: {

  },

};
</script>

<style scoped lang="less">
.root {
  height: 100%;
  position: absolute;
  width: 100%;
  background: #9d1c1c;
  .success {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 116px;
    left: 50%;
    transform: translate(-50%);
    content: url("../assets/s icon.png");
    @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
      content: url("../assets/s icon@2x.png");
    }
  }
  .successDes {
    position: absolute;
    margin: 0;
    top: 232px;
    left: 50%;
    transform: translate(-50%);
    font-size: 32px;
    font-weight: 400;
    color: #ffffff;
  }
  .thank {
    position: absolute;
    font-size: 28px;
    font-weight: 400;
    color: #ffffff;
    left: 50%;
    top: 408px;
    margin: 0;
    transform: translate(-50%);
  }
}
</style>
