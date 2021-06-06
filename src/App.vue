<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
  width: 100%;
  -webkit-text-size-adjust: none !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
