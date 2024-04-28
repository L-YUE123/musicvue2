<template>
  <div class="search">
    <van-icon name="location-o" />
    <div class="SearchCon" @click="toSearch">
      <van-icon name="search" />
      <div class="searRight">{{ defaultSerach }}</div>
    </div>
    <van-icon name="fire-o" />
  </div>
</template>

<script>
import { searchDefaultApi } from '@/api'
export default {
  data () {
    return {
      Sear: null,
      defaultSearch: ''
    }
  },
  methods: {
    async getdefaultSearch() {
      const res = searchDefaultApi()
      console.log('默认搜索', res)
      this.defaultSerach = res.data.showKeyword
    },
    toSearch() {
      this.$router.push({
        path: '/search',
        query: {
          content: encodeURIComponent(this.defaultSearch)
        }
      })
    }
  },
  created() {
    getdefaultSerach()
  }
}
</script>

<style lang="scss" scoped>
  .search {
		height: rem(70);
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: rem(342);
		margin: 0 auto;
	}
  .SearchCon {
		width: rem(280);
		height: rem(40);
		line-height: rem(40);
		display: flex;
		border: 1px solid #999999;
		border-radius: rem(20);
		justify-content: center;
	}

</style>