<template>
  <div class="position">
    <van-nav-bar title="选择地址" left-text=" " right-text=" " left-arrow @click-left="onClickLeft" />
    <div class="search">
      <input type="text" placeholder="请输入关键字" v-model="search" class="position-input"/>
      <button @click="positionimg" class="position-btn">搜索</button>
    </div>
    <div id="map"></div>
    <ul class="listbox">
      <li v-for="list in searchlist" :key="list.uid">
        <b @click="onsearch(list.title)">{{list.title}}</b>
        <p>{{list.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "八维",
      searchlist: [],
      opt: {
        onSearchComplete: (results) => {
          this.searchlist = results._pois;
        },
      },
    };
  },
  mounted() {
    this.positionimg();
  },
  methods: {
    positionimg() {
      var map = new BMapGL.Map("map"); // 创建Map实例
      map.centerAndZoom(new BMapGL.Point(116.28019, 40.049191), 19);
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.setHeading(64.5);
      map.setTilt(73);
      //搜索
      var local = new BMapGL.LocalSearch(map, this.opt);
      local.search(this.search);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onsearch(e) {
      localStorage.setItem("text", e);
      this.$router.push("/index/home");
    },
  },
};
</script>

<style lang='scss'>
.position {
  width: 100%;
  height: 100%;
}
#map {
  width: 100%;
  height: 30%;
}
.search {
  display: flex;
  justify-content: space-around;
}
.position-input {
  width: 70%;
  height: 20px;
  margin: 15px;
  border-radius: 20px;
  border: #ccc 1px solid;
  outline: none;
  font-size: 14px;
  padding: 5px;
}
.position-btn {
  width: 20%;
  height: 30px;
  margin-top: 15px;
  margin-right: 10px;
  background: skyblue;
  border: none;
  outline: none;
  border-radius: 20px;
}
.listbox {
  width: 100vw;
  height: 50%;
  overflow: auto;
  margin-top: 5px;
  margin-left: 5px;
  li {
    margin-bottom: 10px;
  }
}
</style>