<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <div class="home">
        <div class="top">
          <li @click="goposition">
            <van-icon name="location-o" />
            位置： {{ text }}
          </li>
          <input
            type="text"
            placeholder="请输入关键字"
            @click="gosearch"
            class="homeinput"
          />
        </div>
        <!-- 轮播图 -->
        <Banner :swiperList="this.swiperList" />
        <!--分类格-->
        <navCom />
        <img src="../../assets/123.png" alt />
        <div class="navtab">
          <span v-for="(item, index) in navlist" :key="index">{{ item }}</span>
        </div>
        <div class="list">
          <dl v-for="(item, index) in data" :key="index">
            <dt @click="goDetail(item.pid)">
              <img :src="item.imgUrl" alt />
            </dt>
            <dd>
              <b>{{ item.pname }}</b>
              <a class="mode">{{ item.mode }}</a>
              <li>
                ￥{{ item.sale_price }}
                <span class="gang">{{ item.original_price }}</span>
              </li>
              <p>
                <span>月销：{{ item.sales }}</span>
                <span>
                  <button @click="arrAdd(item.pid)">+</button>
                </span>
              </p>
            </dd>
          </dl>
        </div>
        <div class="notext">没有更多内容了~</div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Home/Banner";
import navCom from "../../components/navCom";
import { Toast } from "vant";
import { mapState, mapMutations, mapActions } from "vuex";
import BScroll from "better-scroll";
export default {
  name:"Home",
  components: {
    navCom,
    Banner,
  },
  created() {
    this.Scroll = null;
    this.onsearch();
    this.getdatas();
    this.getSwiperList();
    // this.$nextTick(() => {
    //   if (!this.Scroll) {
    //     this.Scroll = new BScroll(this.$refs.wrapper, {
    //       click: true, // 配置允许点击事件
    //       scrollY: true, // 开启纵向滚动
    //     });
    //   } else {
    //     this.Scroll.refresh(); // 重新计算 better-scroll，当 DOM 结构发生变化的时确保滚动效果正常
    //   }
    // });
  },
  data() {
    return {
      navlist: ["新晋爆款", "每日必抢", "水果", "蔬菜", "肉蛋", "零食"],
      text: "",
      swiperList: [],
      count: 0,
      isLoading: false,
    };
  },
  mounted() {},
  methods: {
    ...mapMutations(["arrAdd"]),
    ...mapActions(["getdatas"]),
    async getSwiperList() {
      const result = await this.$http.get("/carousel/list");
      this.swiperList = result.result;
    },
    goposition() {
      this.$router.push("/position");
    },
    onsearch() {
      this.text = localStorage.getItem("text");
    },

    goDetail(pid) {
      this.$router.push(`/homedetail/${pid}`);
    },
    gosearch() {
      this.$router.push(`/home/search`);
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
  computed: {
    ...mapState(["data"]),
  },
};
</script>

<style lang="scss" scoped>
// .wrapper {
//   width: 100%;
//   position: absolute;
//   top: 45px;
//   bottom: 50px; /*关键*/
//   overflow: hidden;
//   z-index: 1;
// }

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
.gang {
  text-decoration: line-through;
  color: #ccc;
}
.mode {
  color: red;
  border: red solid 1px;
  border-radius: 5px;
  width: 50px;
  height: 25px;
  line-height: 25px;
  margin: 15px 0px;
  text-align: center;
  display: inline-block;
}
dl {
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  dt {
    margin-right: 20px;

    img {
      width: 120px;
      height: 120px;
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
.top {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: white;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.homeinput {
  width: 150px;
  outline: none;
  border-radius: 20px;
  border: #ccc 1px solid;
}
img {
  width: 100vw;
}
.navtab {
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  position: sticky;
  top: 0;
  background: white;
}
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
.notext {
  text-align: center;
  color: #ccc;
  font-size: 10px;
}
</style>