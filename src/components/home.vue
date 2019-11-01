<template>
  <div class="home">
    <LeftMenu></LeftMenu>
    <HomePage></HomePage>
  </div>
</template>

<script>
import LeftMenu from '@/mod/leftMenu'
import HomePage from '@/mod/homePage'
export default {
  name: 'HelloWorld',
  data () {
    return {

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
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
