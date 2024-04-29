<template>
  <div class="allhome">
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">
          <router-link to='/myhome' >首页</router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o">
          <router-link to="/mine" >我的</router-link>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @function rem($px) {
    @return $px / 100 * 1rem;
  }
  .allhome {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .main {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
  }
  .footer {
    height: rem(50);
    flex-shrink: 0;
    a {
      color: black;
    }
  }
  .router-link-active {
    color: red;
  }
</style>
