<template>
  <div class="leftMenu">
    <div class="heat_photo">
      <img src="@static/img/pho.jpg" alt="">
      <p>请登录</p>
    </div>
    <ul class="operate">
      <li v-for="(items, ind) in operateBtn" :key="ind.A">
        <i class="iconfont">{{items.icon}}</i>
        <p>{{items.num}}</p>
      </li>
    </ul>
    <div class="leftBtns">
      <i class="iconfont lastI">&#xe61a;</i>
      <span>首页</span>
      <van-icon class="firstI" name="arrow" />
    </div>
    <div class="btm_btn">
      <div>
        <i class="iconfont">&#xe616;</i>
        <span>离线</span>
      </div>
      <div>
        <van-icon name="circle" />
        <span>夜间</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      operateBtn: [
        {
          num: '收藏',
          icon: "\ue612"
        },
        {
          num: '消息',
          icon: "\ue615"
        },
        {
          num: '设置',
          icon: "\ue614"
        }
      ]
    }
  }
}
</script>
<style scoped>
  .leftMenu {
    width: 50%;
    background: #232A30;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .heat_photo {
    display: flex;
    align-items: center;
    color: #C3C8CA;
  }
  .heat_photo > img {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    margin: 0.2rem 0.2rem;
  }
  .operate {
    color: #C3C8CA;
    text-align: center;
    display: flex;
    margin: 0.2rem 0;
  }
  .operate > li {
    margin: 0 0.3rem;
  }
  .operate li p {
    font-size: 14px;
    margin-top: 0.05rem;
  }
  .operate li i {
    font-size: 20px;
  }
  .leftBtns {
    width: 100%;
    height: 0.9rem;
    background: #1b2329;
    display: flex;
    align-items: center;
  }
  .leftBtns .lastI {
    font-size: 22px;
    color: #fff;
    margin: 0 0.2rem;
  }
  .leftBtns span {
    color: #fff;
    font-size: 14px;
  }
  .leftBtns .firstI {
    margin-left: 1.8rem;
    color: #fff;
  }
  .btm_btn {
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: 0.5rem;
    width: 100%;
  }
  .btm_btn > div {
    width: 50%;
    display: flex;
    color: #C3C8CA;
    text-align: center;
  }
  .btm_btn > div  i {
    margin: 0 0.1rem 0 0.2rem;
  }
  .btm_btn > div span {
    font-size: 14px;
  }
</style>
