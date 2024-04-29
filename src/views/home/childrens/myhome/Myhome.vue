<template>
  <div class="home">
    <HomeSearch />
    <div class="uni-margin-wrap">
      <van-swipe class="swiper" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banners" :key="item.targetId">
          <img :src="item.imageUrl" alt='' />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="Icons">
      <div class="Icon" v-for="item in icons" :key="item.id" @click="clickIcon(item.name)">
        <img :src="item.iconUrl" alt='' />
        <div class="title">{{item.name}}</div>
      </div>
    </div>
    <SongSheet title="推荐歌单"  :firstCommand="firstCommand" :recommends="recommends" :show="true" />
  </div>
</template>

<script>
import HomeSearch from './components/HomeSearch.vue'
import SongSheet from './components/Songsheet.vue'
import { getBannerApi, getHomeIconApi, getRrecommendApi } from '@/api'

export default {
  data () {
    return {
      banners: [],
      recommends: [],
      firstCommand: [],
      icons: []
    }
  },
  methods: {
    async getBanners() {
      try {
        const res = await getBannerApi()
        console.log('轮播图结果', res)
        this.banners = res.data.banners
      } catch (e) {}
    },
    async getIcons() {
      try {
        const res = await getHomeIconApi()
        console.log('首页图标', res)
        if (res.data.code === 200) {
          this.icons = res.data.data
        }
      } catch(e) {}
    },
    async getSongSheet() {
      try {
        const res = await getRrecommendApi()
        console.log('每日推荐歌单', res)
        if (res.data.code === 200) {
          const shuffled = res.data.recommend.slice().sort(() => Math.random() - 0.5)
          this.recommends = shuffled.slice(0, 5) // 截取前count个元素
          this.firstCommand = shuffled.slice(5)
        }
      } catch(e) {}
    },
    clickIcon(name) {
      console.log('跳转到', name)
      let url = ''
      // if (name === '每日推荐') {
      //   url: ''
      // }
    }
  },
  created() {
    this.getBanners()
    this.getIcons()
    this.getSongSheet()
  },
  components: {
    HomeSearch,
    SongSheet
  }
}
</script>

<style lang="scss" scoped>
  @function rem($px) {
    @return $px / 100 * 1rem;
  }
  .home {
		width: 100%;
		overflow: hidden;
		overflow-y: auto;
		height: 100%;
	}
  .uni-margin-wrap {
		width: rem(342);
		height: rem(150);
		border-radius: rem(10);
		overflow: hidden;
		margin: 0 auto;
		.swiper, img {
			width: 100%;
			height: 100%;
		}
	}
  .Icons {
		width: rem(342);
		height: rem(90);
		margin: 0 auto;
		display: flex;
		align-items: center;
		overflow-x: auto;
		border-bottom: 1px solid #999;
		&::-webkit-scrollbar{height:0px;}
		.Icon {
			width: calc(rem(342) / 5);
			height: rem(60);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			flex-shrink: 0;
			color: #73737e;
			font-size: rem(14);
			text-align: center;
			img {
				width: 80%;
				background: #FB3454;
				border-radius: 50%;
			}
		}
	}
</style>