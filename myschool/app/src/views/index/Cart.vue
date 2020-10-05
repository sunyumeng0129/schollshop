<template>
  <div class="cart">
    <van-empty
      image="error"
      description="购物车还是空的,快去添加叭~"
      v-show="!arr.length"
    />
    <dl v-for="(item, index) in arr" :key="index" class="cardl">
      <input
        type="checkbox"
        :checked="item.check"
        @change="ONE_CHECK(item.pid)"
      />
      <van-swipe-cell>
        <dt>
          <img :src="item.imgUrl" alt />
        </dt>
        <dd>
          <b>{{ item.pname }}</b>
          <li>
            <span style="color: red">￥{{ item.sale_price }}</span>
            <span class="gang">{{ item.original_price }}</span>
          </li>

          <p>
            <button @click="item.num++" class="btn">+</button>
            <span>{{ item.num }}</span>
            <button @click="item.num--" class="btn" v-if="item.num">-</button>
          </p>
        </dd>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="delitem(index)"
          />
        </template>
      </van-swipe-cell>
    </dl>

    <van-submit-bar
      :price="ALL_PRICE"
      button-text="提交订单"
      @submit="goaddress(item)"
    >
      <input type="checkbox" @change="ALL_CHECK" :checked="allCheck" />全选
      <template #tip>
        请选择您的
        <span @click="goaddress1">配送地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { Notify } from "vant";
export default {
  name: "Cart",
  data() {
    return {
      item: false,
      price: 0,
      sharr: [],
    };
  },
  create() {
    this.START_ALL();
  },

  computed: {
    ...mapState(["arr", "tjarr", "allCheck"]),
    ...mapGetters(["ALL_PRICE"]),
  },
  methods: {
    ...mapMutations([
      "delitem",
      "ALL_CHECK",
      "START_ALL",
      "ONE_CHECK",
      "TJ_DD",
    ]),
    // ...mapGetters(["ONE_CHECK"]),
    goaddress(e) {
      if (!localStorage.getItem("uid")) {
        Notify({ type: "warning", message: "请先登录" });
        this.$router.push("/login");
      } else if (!localStorage.getItem("address")) {
        Notify({ type: "warning", message: "您还没有选择收货地址" });
        localStorage.setItem("address", e);
        this.$router.push("/address");
      } else {
        Notify({ type: "warning", message: "老板大气！" });
        this.TJ_DD();
        this.$router.push("/index/my");
      }
    },
    goaddress1() {
      this.$router.push("/address");
    },
  },
};
</script>

<style lang="scss" scoped>
.van-swipe-cell {
  width: 100%;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.gang {
  text-decoration: line-through;
  color: #ccc;
  margin-left: 5px;
}
.cart {
  width: 100%;
  height: 100%;
}
.van-submit-bar {
  position: fixed;
  bottom: 50px;
}
.cardl {
  dt {
    margin-left: 20px;
    margin-right: 20px;
    float: left;
  }
  dd {
    display: flex;
    flex-direction: column;
  
    b {
      margin-bottom: 20px;
    }
    p {
      margin: 5px 0;
      display: flex;
    }
  }
}
img {
  width: 80px;
  height: 80px;
}
.delbtn {
  width: 50px;
  height: 25px;
  border-radius: 5%;
  border: none;
  outline: none;
  background: rgba(204, 204, 204, 0.308);
  margin-right: 20px;
  margin-left: 80px;
}
.btn {
  width: 25px;
  margin: 0 5px;
  height: 20px;
  border: none;
  outline: none;
}
</style>