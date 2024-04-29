<template>
  <div class="xxSearch">
    <div class="box-bg">
      <div class="icon" @click="back"><van-icon name="down" /></div>
      <div class="kuang">
        <van-search
          v-model="inputValue"
          shape="round"
          :placeholder="searCon"
          @search="onSearch"
          background="#F8F9FD"
          :autofocus="true"
          :clearable="showIcon"
          @input="clearInput"
        >
        </van-search>
      </div>
      <span @click="onSerach">搜索</span>
    </div>
    <div class="searchBottom" v-if="showUI===0">
      <div class="" @click="goSongPerson()">
        <img src="@/assets/MusicSearch/songPerson.png"  />
        <span>歌手</span>
      </div>
      <div class="" @click="goMusicType()">
        <img src="@/assets/MusicSearch/musicqufeng.png"  />
        <span>曲风</span>
      </div>
      <div class="" @click="goMusic()">
        <img src="@/assets/MusicSearch/music.png"  />
        <span>专区</span>
      </div>
      <div class="">
        <img src="@/assets/MusicSearch/hustong.png"  />
        <span>识曲</span>
      </div>
    </div>
  </div>
</template>

<script>
import { searchHotApi, searchSuggestApi, searchDefaultApi } from '@/api'
export default {
  data() {
    return {
      searCon: '',  //搜索初始默认内容
	    inputValue: '',  //搜索框里的内容
	    showIcon: false,  //是否展示搜索框上的叉号 
	    showUI: 0,  //控制展示哪一个页面
	    hisData: [], //记录搜索记录
	    filterHisData: [], //过滤过的搜索记录
	    trueData: [],  //真实搜索数据
	    resTime: [], //实时搜索结果
	    resTimeNull: false,  //实时搜索是否有结果
	    timeOut: null,   //实现防抖效果的延时器
	    showRes: 0   //初始展示哪一个搜索结果
    }
  },
  async created() {
    const res = await searchDefaultApi()
    console.log(this.$route.query)
    this.searCon = decodeURIComponent(this.$route.query.content) || res.data.data.showKeyword
  },
  methods: {
    onSearch () {
      this.showUI = 2
      this.showIcon = true
      this.trueData =  this.inputValue.length === 0 ? this.searCon : this.inputValue
      this.inputValue = this.trueData
      if (!this.hisData.find(v => v === this.inputValue)) {
        this.hisData.push(this.inputValue)
      }
      // localStorage.setItem('hisData', JSON.string(this.hisData))
    },
    back() {
      this.$router.back()
    },
    clearInput(e) {
      console.log('实施搜搜')
      if (this.inputValue.length > 0) {
        this.showIcon = true
        this.showUI = 1
        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(async () => {
          this.filterHisData = this.hisData.filter(v => v.includes(this.inputValue))
          
        })
      }
    },
    onCancel() {
      console.log('清楚搜搜内容')
    },
    goSongPerson() {
      console.log('第哦啊转到歌手页面')
    },
    goMusicType() {
      console.log('跳到曲风页面')
    },
    goMusic() {
      console.log('跳到歌曲页面')
    }
  }
}
</script>

<style lang="scss" scoped>

  @function rem($px) {
    @return $px / 100 * 1rem;
  }
	$search-content-background-color: white;
	.xxSearch {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #F8F9FD;
	}
	
	.search {
		flex: 1;
		width: 100%;
		overflow: hidden;
		overflow-y: auto;
	}

	.searchBottom {
		display: flex;
		height: rem(36);
		div {
			width: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			border-right: 1px solid #E5E7EC;
			&:last-of-type {
				border-right: none;
			}
			img {
				width: rem(18);
				height: rem(18);
			}
		}
	}

	.Empty {
		color: skyblue;
		height: rem(42);
		line-height: rem(42);
		padding-left: rem(20);
	}
	.box-bg {
		background-color: #F8F9FD;
		padding: rem(5) rem(10);
    display: flex;
    align-items: center;
    .icon {
      transform: rotate(90deg);
    }
	}
	
	.TimeResCon {
		> div {
			height: rem(45);
			display: flex;
			padding-left: rem(20);
			align-items: center;
			line-height: rem(45);
			.TimeRR {
				flex: 1;
				margin-left: rem(20);
				border-bottom: rem(1) solid #F1F2F6;
				padding-right: rem(30);
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}

</style>
