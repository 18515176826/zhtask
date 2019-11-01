<template>
  <div class="details">
    <span @click="goBack" class="goBack">返回</span>
    <img class="imgUrl" :src="imgUrl" alt="">
  </div>

</template>
<script>
export default {
  data() {
    return {
      imgUrl: ''
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    }
  },
  mounted() {
    let ind = this.$route.query.id;
    this.imgUrl =  this.$route.query.pageList[ind].imgs;
  }
}
</script>
<style scoped>
.details {
  position: relative;
}
.goBack {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  padding: 0.2rem 0.4rem;
  background: rgba(0,0,0,0.5);
  border-radius: 7px;
  color: #fff;
  font-size: 14px;
}
.imgUrl {
  width: 100%;
}
</style>
