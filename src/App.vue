<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @function rem($px) {
    @return $px / 100 * 1rem;
  }

  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  html , body , #app {
    width: 100vw;
    height: 100vh;
  }

  html {
    font-size: 100vw / 375px * 100px;
  }
  body {
    font-size: 16px;
  }

</style>
