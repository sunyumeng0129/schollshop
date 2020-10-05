<template>
  <div class="classify">
    <div class="top"><input type="text" placeholder='搜索校园超市商品' class="feninput"></div>
    <div class="flbox">
      <ul class="left">
        <li
          v-for="(item,index) in list"
          :key="index"
          @click="tab(index,item.t_type)"
          :class="curIndex===index?'active':''"
        >{{item.t_text}}</li>
      </ul>
      <div class="right">
        <dl v-for="(item,index) in list2" :key="index">
          <dt class="imgbox">
            <img src="../../assets/timg.jpg" alt @click="goDetail(item.s_type)" />
          </dt>
          <dd>
            <b>{{item.s_text}}</b>
            <li style="color:red;margin-top:50px">
              ￥98.5
              <span>
                <button>+</button>
              </span>
            </li>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Classify",
  created() {
    this.getOneList();
    //  this.getShopList()
  },
  data() {
    return {
      list: [],
      list2: [],
      curIndex: 0,
    };
  },
  methods: {
    async getOneList() {
      const result = await this.$http.get("/getTypeList");
      const res = await this.$http.get("/getSortList", {
        params: { t_type: 0 },
      });
      this.list = result.result;
      this.list2 = res.result;
    },
    async tab(index, type) {
      this.curIndex = index;
      const result = await this.$http.get("/getSortList", {
        params: { t_type: type },
      });
      this.list2 = result.result;
    },
    goDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
   
  },
};
</script>

<style lang="scss" scoped>
.flbox {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  .left {
    width: 30%;
    height: 100%;
    background: rgba(204, 204, 204, 0.253);
    text-align: center;
    li {
      margin-bottom: 20px;
      margin-top: 5px;
    }
  }
  .right {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;

    dl {
      display: flex;
      margin-bottom: 20px;
      margin-left: 20px;
      .imgbox {
        width: 120px;
        height: 120px;
        background: pink;
        margin-right: 10px;
        img {
          width: 120px;
          height: 120px;
          background: pink;
        }
      }
    }
  }
}
.active {
  color: salmon;
}
button {
  width: 25px;
  height: 25px;
  margin-left: 50px;
  background: red;
  border: none;
  color: white;
  border-radius: 50%;
}
.feninput{
  width: 90%;
  background: rgba(204, 204, 204, 0.233);
  border: none;
  padding: 6px;
  border-radius: 20px;
  margin: 7px;
}
</style>