<template>
  <div class="search">
    <van-icon name="location-o" />
    <div class="SearchCon" @click="toSearch">
      <van-icon name="search" />
      <div class="searRight">{{ defaultSearch }}</div>
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
      try {
        const res = await searchDefaultApi()
        console.log('默认搜索', res)
        this.defaultSearch = res.data.data.showKeyword
      } catch(e) {
        console.log(e)
      }
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
    this.getdefaultSearch()
  }
}
</script>

<style lang="scss" scoped>
  @function rem($px) {
    @return $px / 100 * 1rem;
  }
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
    padding-left: rem(14);
		border-radius: rem(20);
    align-items: center;
    .searRight {
      flex: 1;
      text-align: center;
    }
	}

</style>