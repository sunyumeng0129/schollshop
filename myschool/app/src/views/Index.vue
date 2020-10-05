<template>
  <div class="index">
    <header>
      <b><van-icon name="arrow-left" @click="onClickLeft"/></b>
      <b>校园超市</b>
      <b><van-icon name="scan" /></b>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <van-tabbar route v-model="active" active-color='red' >
        <van-tabbar-item icon="home-o" to="/index/home" replace>首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/index/classify" replace>分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/index/cart" replace>购物车</van-tabbar-item>
        <van-tabbar-item icon="debit-pay" to="/index/my" replace>我的</van-tabbar-item>
      </van-tabbar>
    </footer>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="scss" scoped>
.index{
    height: 100%;
    display: flex;
    flex-direction: column;
}
header{
    height: 50px;
    text-align: center;
    background: #fff;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
}
main{
    flex: 1;
    overflow: auto;

}
footer{
  height: 50px;
}
</style>