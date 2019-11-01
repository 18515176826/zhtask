<template>
  <div class="home" :class="`${domLeft == true ? 'homeShow' : 'homeHide'}`">
    <LeftMenu></LeftMenu>
    <Home-page @goLift="conceal"></Home-page>
  </div>
</template>

<script>
import LeftMenu from '@/mod/leftMenu'
import HomePage from '@/mod/homePage'
export default {
  name: 'HelloWorld',
  data () {
    return {
      domLeft: false
    }
  },
  methods: {
    conceal(isShow) {
      this.domLeft = isShow;
    }
  },
  components: {
    LeftMenu,
    HomePage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    font-size: 16px;
  }
  .home {
    width: 100%;
    position: fixed;
    top: 0;
    left: -50%;
    bottom: 0;
    right: 0;
  }
  .homeHide  {
      left:-50%;
      transition: left 1s;
  }
  .homeShow {
    left: 0;
    transition: left 1s;
  }
</style>
