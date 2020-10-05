<template>
  <div class="my">
    <div class="redbox">
      <h2>{{ username1 }}</h2>
      <li>开启美好一天</li>
      <div class="tou">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2291332875,175289127&fm=26&gp=0.jpg"
              alt=''
              class="avantar"
          />
      </div>
    </div>
    <div class="dd">
      <b>我的订单</b>
      <div class="icobox">
        <dl>
          <dt>
            <van-icon name="shopping-cart-o" color="red" />
          </dt>
          <dd>待付款</dd>
        </dl>
        <dl>
          <dt @click="$router.push('/index/dps')">
            <!-- <van-icon name="comment-o" color="red" /> -->
            <van-icon name="chat-o" :badge="tjarr.length" color="red" />
          </dt>
          <dd>待配送</dd>
        </dl>
        <dl>
          <dt>
            <van-icon name="wap-home-o" color="red" />
          </dt>
          <dd>已发货</dd>
        </dl>
        <dl>
          <dt>
            <van-icon name="envelop-o" color="red" />
          </dt>
          <dd>退款/售后</dd>
        </dl>
      </div>
    </div>
    <!-- 优惠券单元格 -->
    <div class="yh">
      <van-coupon-cell />
      <van-coupon-cell title="资质规则" />
      <van-coupon-cell title="联系客服" />
    </div>

    <button class="nologin" @click="nologin">退出登录</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name:'My',
  data() {
    return {
      username1: "haonan",
    };
  },
  computed: {
    ...mapState(["tjarr"]),
  },
  creadted() {
    this.username();
  },
  methods: {
    username() {
      this.username1 = localStorage.getItem("username");
    },
    nologin() {
      this.$router.push("/login");
      localStorage.removeItem("username");
    },
  },
};
</script>

<style lang="scss" scoped>
.my {
  width: 100%;
  height: 100%;
  background: rgba(204, 204, 204, 0.185);
}
.redbox {
  width: 100%;
  height: 30%;
  background: red;
  color: white;
  position: relative;
  h2 {
    padding-top: 20px;
    padding-left: 20px;
  }
  li {
    padding-top: 5px;
    padding-left: 20px;
  }
   .avantar {
    width: 70px;
    position: absolute;
    right: 25px;
    top: 15px;
    border-radius: 50%;
  }
 
}

.dd {
  width: 90%;
  height: 140px;
  position: fixed;
  top: 165px;
  left: 20px;
  background: white;
  border-radius: 10px;
  b {
    margin: 20px;
  }
  box-shadow: 1px 2px 6px rgba(78, 78, 78, 0.979);
}
.yh {
  margin-top: 100px;
  width: 90%;
  margin-left: 20px;
  box-shadow: 1px 1px 6px rgba(78, 78, 78, 0.979);
}
.icobox {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  dl {
    text-align: center;
    dt {
      font-size: 30px;
    }
    dd {
      font-size: 14px;
    }
  }
}
.nologin {
  width: 300px;
  height: 50px;
  outline: none;
  border: solid red 1px;
  border-radius: 15px;
  background: rgba(255, 0, 0, 0.836);
  color: white;
  margin: 40px;
}
</style>