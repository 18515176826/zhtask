<template>
  <ul class="newsList">
    <li @click="routerUrl(ind)" v-for="(items, ind) in newList" :key="ind.B">
      <div v-if="items.time != ''">
        <p class="timeStyle">{{items.time}}</p>
        <div class="conText">
          {{items.content}}
        </div>
      </div>
      <div v-else class="conDiv">
          {{items.content}}
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    newList: {
      type: Array,
    }
  },
  data() {
    return {
      pageList: [
        {imgs: require('@static/img/icon1.jpg')},
        {imgs: require('@static/img/icon2.jpg')},
        {imgs: require('@static/img/icon3.jpg')},
        {imgs: require('@static/img/icon4.jpg')},
        {imgs: require('@static/img/icon5.jpg')},
      ]
    }
  },
  methods: {
    routerUrl(ind) {
      this.$router.push({  //核心语句
        path:'/particulars-news',   //跳转的路径
        query:{           //路由传参时push和query搭配使用 ，作用时传递参数
          id: ind,
          pageList: this.pageList
        }
      })
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
  .newsList {
    width: 95%;
    margin: 0 auto;
  }
  .newsList li .conDiv {

  }
  .timeStyle {
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
    background: #028fd6;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
  .conText, .conDiv {
    width: 100%;
    height: 0.5rem;
    padding: 0.7rem 0;
    border-bottom: 1px solid rgba(195, 200, 202, 0.3);
  }
</style>
