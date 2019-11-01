<template>
  <div class="homePage" @touchend="SlideLeft">
    <div class="leftBtns">
      <van-icon @click="leftBtnsShow" class="Btn" name="wap-nav" />
      <carousel-img></carousel-img>
    </div>
    <div class="newsList">
      <main-news :newList="newList"></main-news>
    </div>
  </div>
</template>
<script>
import carouselImg from '@/mod/carousel-img'
import mainNews from '@/mod/main-news'
export default {
  data () {
    return {
      newList: [
        {
          time: '',
          content: '商务部：中美经贸高级别磋商双方牵头人通话',
        },
        {
          time: '',
          content: '从“中国好人”到阶下囚 安徽刘氏四兄弟涉黑资产超11亿'
        },
        {
          time: '',
          content: '深圳教育局紧急通知：禁止中小学生参加“量子波动速读”培训'
        },
        {
          time: '09年25日 星期三',
          content: '深圳教育局紧急通知：禁止中小学生参加“量子波动速读”培训'
        },
        {
          time: '09年25日 星期三',
          content: '深圳教育局紧急通知：禁止中小学生参加“量子波动速读”培训'
        }
      ]
    }
  },
  methods: {
    leftBtnsShow() {
      this.$emit('goLift', true)
    },
    SlideLeft() {
      this.$emit('goLift', false)
    }
  },
  components: {
    carouselImg,
    mainNews
  },
  mounted() {

  }
}
</script>
<style scoped>
  .homePage {
    width: 100%;
    height: 100%;
    margin-left: 50%;
    overflow-y: auto;
  }
  .leftBtns {
    position: relative;
  }
  .leftBtns .Btn {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    color: #333;
    font-size: 30px;
    z-index: 5;
  }
</style>
