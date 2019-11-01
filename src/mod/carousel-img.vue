<template>
  <div>
    <van-swipe class="swiHeight"  :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
      }
  }
}
</script>
<style scoped>
.swiHeight {
  width: 100%;
  height: 4rem;
}
.swiHeight img {
  width: 100%;
  height: 100%;
}
</style>
