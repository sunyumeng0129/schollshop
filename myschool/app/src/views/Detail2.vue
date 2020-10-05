<template>
  <div class="detail">
    <van-nav-bar
      title="商品详情"
      left-text=" "
      right-text="分享"
      left-arrow
      @click-left="onClickLeft"
      @click-right="showShare = true"
    />
    <div class="imgbox"></div>
    <dl v-for="item in item" :key="item.pid">
      <dt>
        <img :src="item.imgUrl" alt />
      </dt>
      <dd>
        <h2>{{ item.pname }}</h2>
        <b class="tui">小编推荐</b>
        <li>{{ item.desc }}</li>
      </dd>
    </dl>
    <div class="comment">
      <b style="borderbottom: 3px solid red">用户评论 (没有就刷新几下)</b>
      <div class="combox" v-for="item in comdata" :key="item.cid">
        <van-steps direction="vertical" active-color="#333">
          <van-step>
            <h3><img :src="item.uphoto" alt="" />{{ item.uname }}</h3>
            <p>
              {{ item.comment }}
              <!-- <van-rate readonly v-model="value"  style="float:right" /> -->
            </p>
          </van-step>
        </van-steps>
      </div>
      <!-- <van-field
        v-model="message"
        rows="2"
        autosize
        label="评论"
        type="textarea"
        maxlength="50"
        placeholder="请输入评论"
        show-word-limit
      />
      <van-button class="fb" color="red" type="primary" size="mini">发表评论</van-button> -->
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      item: {},
      comdata: [],
      loading: true,
      message: "",
      showShare: false,
      options: [{ name: "复制链接", icon: "link" }],
    };
  },
  mounted() {
    this.loading = false;
  },
  created() {
    this.get();
    this.getCommentList();
  },
  methods: {
    ...mapMutations(["arrAdd"]),

    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },

    onClickLeft() {
      this.$router.go(-1);
    },
    async get() {
      let { pid } = this.$route.params;
      let result = await this.$http.get("/homedetail", {
        params: { pid: pid },
      });
      this.item = result.result;
    },
    async getCommentList() {
      const result = await this.$http.get("/comment/all");
      let comdata = [];
      this.item.forEach((el) => {
        result.result.forEach((item) => {
          if (item.pid === el.pid) {
            comdata.push(item);
          }
        });
        this.comdata = comdata;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  dl {
    dt {
      img {
        width: 100%;
        height: 200px;
      }
    }
    dd {
      height: 90px;
      margin: 20px;
      h2 {
        color: rgb(194, 15, 15);
      }
      b {
        color: rgba(109, 109, 109, 0.945);
      }
    }
  }
}
.combox {
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
}
.comment {
  width: 100%;
  height: 250px;
  overflow: auto;
}
.tui {
  margin: 50px 0;
}
// .van-field {
//   position: fixed;
//   bottom: 60px;
//   border: solid 1px #ccc;
//   height: 60px;
//   width: 90%;
//   margin-left: 20px;

// }
// .fb{
//   position: fixed;
//   bottom: 30px;
//   right: 18px;
// }
</style>