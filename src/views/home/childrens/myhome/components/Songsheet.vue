<template>
  <div class="Play">
    <div class="Playtitle">
      <div><span>{{ title }}</span><span><van-icon name="arrow" /></span></div>
      <div class="Ic">
        <van-icon name="ellipsis" />
      </div>
    </div>
    <div class="songs">
      <div class="firstAllSongSheet" v-if="firstCommand">
        <van-swipe class="swiper" :autoplay="3000" vertical @change="index => curI = index" :show-indicators="false">
          <van-swipe-item v-for="item in firstCommand" :key="item.id" @click="toSongSheetdeatil(item.id)">
            <img :src="item.picUrl" alt="" />
          </van-swipe-item>
        </van-swipe>
        <div class="songsheetdesc">{{ firstCommand[curI]?.name }}</div>
      </div>
      <div class="songsheet" v-for="item in recommends" :key="item.id" @click="toSongSheetdeatil(item.id)">
        <img :src="item.picUrl" alt="" />
        <div class="songsheetdesc">{{ item.name }}</div>
        <div class="img"><img src="@/assets/bofang.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'firstCommand', 'recommends', 'show'],
  data() {
    return {
      curI: 0
    }
  },
  methods: {
    toSongSheetdeatil(id) {
      console.log('到达详情页', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  @function rem($px) {
    @return $px / 100 * 1rem;
  }
	.Play {
		margin-left: rem(16);
		height: rem(220);
		width: 100%;
		overflow: hidden;
		padding-bottom: rem(20);
		border-bottom: rem(1) solid #F2F3F8;
	}
	
	.Playtitle {
		height: rem(46);
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: rem(18);
		font-weight: 900;
		color: #2C3342;
		div:nth-of-type(2) {
			transform: rotate(90deg);
			width: rem(40);
			margin-right: rem(20);
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	
	.songs {
		overflow-y: auto;
		display: flex;
		&::-webkit-scrollbar{height:0px};
	}
	.firstAllSongSheet {
		display: flex;
		flex-direction: column;
		height: rem(164);
		width: rem(112);
		font-size: rem(12);
	}
	
	.swiper {
		width: rem(112);
		height: rem(112);
		border-radius: rem(10);
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, .5);
		}
	}
	
	.songsheet {
		height: rem(164);
		width: rem(112);
		font-size: rem(12);
		margin-left: rem(10);
		display: flex;
		flex-direction: column;
		position: relative;
    flex-shrink: 0;
		&:last-of-type {
			margin-right: rem(30);
		}
		img {
			width: rem(112);
			height: rem(112);
			border-radius: rem(10);
			background: rgba(0, 0, 0, .5);
		}
		.img {
			width: rem(20);
			height: rem(20);
			position: absolute;
			bottom: rem(60);
			right: rem(10);
			img {
				width: 100%;
				height: 100%;
				background-color: transparent;
			}
		}
	}
	.songsheetdesc {
		flex: 1;
		line-height: rem(24);
		/* 隐藏溢出的内容 */
		overflow: hidden;
		/* 为文本添加省略号 */
		text-overflow: ellipsis;
	}
</style>