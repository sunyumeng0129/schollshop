<template>
  <div class="dps">
    <van-empty
      image="error"
      description="小主还没有买任何商品哦~"
      v-show="!tjarr.length"
    />
    <dl v-for="(item, index) in tjarr" :key="index" class="cardl">
      <dt>
        <img :src="item.imgUrl" alt />
      </dt>
      <dd>
        <b>{{ item.pname }}</b>
        <li>
          <span style="color: red">￥{{ item.sale_price }}</span>
        </li>
        <p>
          <button @click="DEL_TJ(index)" class="delbtn">退款</button>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name:"Dps",
  computed: {
    ...mapState(["tjarr"]),
  },
  methods: {
    ...mapMutations(["DEL_TJ"]),
  },
};
</script>

<style lang="scss" scoped>
.cardl {
  display: flex;
  margin: 20px;
  dt {
    margin-left: 20px;
    margin-right: 20px;
  }
  dd {
    display: flex;
    flex-direction: column;
    b {
      margin-bottom: 20px;
    }
    p {
      margin: 2px 0;
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
  margin-left: 150px;
}
</style>