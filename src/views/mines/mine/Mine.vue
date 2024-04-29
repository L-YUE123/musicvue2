<script>
import Main from './mineChild/main/Main.vue';
import Footer from './mineChild/footer/Footer.vue';
 
export default {
  data() {
    return {

    }
  },
  computed:{

  }
}
</script>

<template>
    <div class="box">
        <div class="header">
            <img src="../icon/icon_003.png" alt="">
            <div class="con">
                <p>+添加状态</p>
                <div class="icon">
                    <div class="icon1">
                        <img src="../icon/icon_001.png" alt="">
                    </div>
                    <div class="icon2">
                        <img src="../icon/icon_002.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="all">
            <Main />
            <Footer />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box{
    width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
    .header{
        width: 100%;
        height: 45px;
        background-color: rgba(0, 0, 0, .2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            width: 28px;
            height: 28px;
        }
        .con{
            width: 62%;
            display: flex;
            justify-content: space-between;
            p{
                font-size: 14px;
                color: #999999;
            }
            .icon{
                width: 30%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .icon1{
                    width: 35px;
                    img{
                        width: 22px;
                        height: 22px;
                    }
                }
                .icon2{
                    width: 35px;
                    img{
                        width: 36px;
                        height: 36px;
                    }
                }
            }
        }
    }
    .all{
        flex: 1;
        overflow: auto;
    }
}
</style>
