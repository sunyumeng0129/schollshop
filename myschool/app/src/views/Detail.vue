<template>
  <div class="detail">
    <van-nav-bar title="商品详情" left-text=" " right-text=" " left-arrow @click-left="onClickLeft" />
    <div class="imgbox">
      <img src="../assets/timg.jpg" alt />
    </div>
    <dl v-for="(item,index) in item" :key="index">
      <dd>
        <p>{{item.s_text}}</p>
      </dd>
    </dl>
    <div class="tuijian">
      <b>小编推荐</b>
      <div class="tui">
        <span>院子海南自建果园,源头空运直供,实现从采摘到您剥开想用间隔时间12小时</span>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.get();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async get() {
      let { id } = this.$route.params;
      let result = await this.$http.get("/detail", {
        params: { s_type: id },
      });
      this.item = result.result;
    },
  },
};
</script>

<style lang='scss' d>
.detail {
  width: 100%;
 
  .imgbox {
    width: 100%;
    height: 43%;
    background: pink;
    img {
      width: 100%;
      height: 100%;
      background: pink;
    }
  }
}
p {
  margin-left: 10px;
  font-size: 22px;
  margin-top: 20px;
}
.tuijian {
  margin-top: 20px;
  margin-left: 10px;
  b {
    color: rgba(212, 69, 69, 0.616);
  }
  .tui {
    background: #cccccc57;
    margin-top: 10px;
    height: 60px;
    line-height: 30px;
    span {
      font-size: 14px;
    }
  }
}
</style>