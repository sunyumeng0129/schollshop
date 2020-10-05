<template>
  <div class="search">
    <input type="text" placeholder="请输入关键字" v-model="keyword" @change="getSearchList" />
    <div class="list">
      <dl v-for="(item,index) in data" :key="index">
        <dt @click="goDetail(item.pid)">
          <img :src="item.imgUrl" alt />
        </dt>
        <dd>
          <b>{{item.pname}}</b>
          <a class="mode">{{item.mode}}</a>
          <li>
            ￥{{item.sale_price}}
            <span class="gang">{{item.original_price}}</span>
          </li>
          <p>
            <span>月销：{{item.sales}}</span>
            <span>
              <button @click="arrAdd(item.pid)">+</button>
            </span>
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name:"Search",
  data() {
    return {
      keyword: "",
      data: [],
    };
  },
  methods: {
    ...mapMutations(["arrAdd"]),
    async getSearchList() {
      const result = await this.$http.get("/product/searchByType", {
        params: {
          keyword: this.keyword,
        },
      });
      this.data = result.result;
    },
    goDetail(pid) {
      this.$router.push(`/homedetail/${pid}`);
    },
  },
};
</script>

<style lang="scss" scoped>
dl {
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  dt {
    margin-right: 20px;
    img {
      width: 90px;
      height: 90px;
      background: pink;
    }
  }
  dd {
    display: flex;
    flex-direction: column;
    p {
      display: flex;
      justify-content: space-between;
      width: 200px;
      span {
        display: inline-block;
      }
    }
  }
}
button {
  width: 25px;
  height: 25px;
  margin-left: 50px;
  background: red;
  border: none;
  color: white;
  border-radius: 50%;
  float: right;
}
input {
  width: 70%;
  height: 20px;
  margin: 15px;
  margin-left: 50px;
  border-radius: 20px;
  border: #ccc 1px solid;
  outline: none;
  font-size: 14px;
  padding: 5px;
}
.gang {
  text-decoration: line-through;
  color: #ccc;
}
.mode {
  color: red;
  border: red solid 1px;
  border-radius: 5px;
  width: 50px;
  height: 20px;
  line-height: 20px;
  margin: 3px 0;
  text-align: center;
  display: inline-block;
}
</style>