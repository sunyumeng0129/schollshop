<template>
  <div class="address">
    <van-nav-bar
      title="地址"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="add" v-if="!data.length">
      <h3>还没有地址,现在添加吧！</h3>
      <button @click="changeshow">+添加</button>
    </div>
    <div class="addbox" v-if="show">
      <div class="box">
        <span @click="show = false" class="X">X</span>
        <van-form @submit="onSubmit()">
          <van-field
            v-model="add.auser"
            name="姓名"
            label="姓名"
            placeholder="姓名"
            :rules="[{ required: true, message: '请填写姓名' }]"
          />
          <van-field
            v-model="add.mobile"
            name="电话"
            label="电话"
            placeholder="电话"
            :rules="[{ required: true, message: '请填写电话' }]"
          />
          <van-field
            v-model="add.province"
            name="省会"
            label="省会"
            placeholder="省会"
            :rules="[{ required: true, message: '请填写省会' }]"
          />
          <van-field
            v-model="add.city"
            name="城市"
            label="城市"
            placeholder="城市"
            :rules="[{ required: true, message: '请填写城市' }]"
          />
          <van-field
            v-model="add.county"
            name="区域"
            label="区域"
            placeholder="区域"
            :rules="[{ required: true, message: '请填写区域' }]"
          />
          <van-field
            v-model="add.street"
            name="详细地址"
            label="详细地址"
            placeholder="详细地址"
            :rules="[{ required: true, message: '请填写详细地址' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </div>
    <div class="alllist">
      <div v-for="item in data" :key="item.aid">
        <b><input type="checkbox" @click="onClickLeft" />{{ item.auser }}</b>
        <a>{{ item.mobile }}</a>
        <button class="delbtn" @click="Del(item.aid)">删除</button>
        <p>
          <span>{{ item.province }}</span
          ><span>{{ item.city }}</span
          ><span>{{ item.county }}</span
          ><span>{{ item.street }}</span>
        </p>
        
      </div>
    </div>
    <div class="addbtn" v-show="!show">
      <button @click="changeshow">+新增地址</button>
    </div>
  </div>
</template>

<script>
import { Notify, Dialog } from "vant";
export default {
  data() {
    return {
      data: [],
      uid: "",
      show: false,
      add: {
        auser: "",
        mobile: "",
        province: "",
        city: "",
        county: "",
        street: "",
      },
    };
  },

  computed: {},
  created() {
    this.getAddressList();
  },
  methods: {
    async getAddressList() {
      let uid = localStorage.getItem("uid");
      this.uid = uid;
      const result = await this.$http.get("/address/list");
      result.result.forEach((item) => {
        if (item.uid === this.uid) {
          this.data.push(item);
        }
      });
      console.log(this.data);
    },
    changeshow() {
      this.show = true;
    },
    async onSubmit() {
      let { auser, mobile, province, city, county, street } = this.add;
      let result = await this.$http.post("/address/add", {
        uid: this.uid,
        auser,
        mobile,
        province,
        city,
        county,
        street,
      });
      this.show = false;
      this.$router.go(0);
      Notify("添加成功");
    },
    async Del(aid) {
      Dialog.confirm({
        title: "",
        message: "确定要删除这条地址吗？",
      })
        .then(() => {
          this.$http.delete("/address/del", { params: { aid } });
          this.$router.go(0);
        })
        .catch(() => {});
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style style lang="scss" scoped>
.X {
  position: fixed;
  right: 40px;
  z-index: 9;
  top: 150px;
}
.address {
  width: 100%;
  height: 100%;
}
.add {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  button {
    outline: none;
    border: none;
    color: white;
    background: rgba(172, 23, 23, 0.555);
    padding: 4px;
  }
}
.addbox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  .box {
    width: 90%;
    height: 50%;
    background: white;
    position: fixed;
    top: 130px;
    left: 18px;
  }
}
.addbtn {
  width: 100%;
  height: 50px;
  background: red;
  position: fixed;
  bottom: 0;
  button {
    width: 100%;
    height: 100%;
    background: red;
    color: white;
    border: none;
    outline: none;
  }
}
.alllist {
  div {
    margin: 0 0 15px 5px;
    border-bottom: solid 1px #ccc;
    height: 50px;
    b {
      margin-right: 10px;
      input {
        margin-right: 10px;
      }
    }
    a {
      color: rgb(117, 117, 117);
    }
    p {
      span {
        margin-right: 10px;
      }
    }
  }
}
.delbtn {
  background: red;
  color: white;
  border: none;
  outline: none;
  padding: 2px;
  float: right;
  margin-right: 5px;
}
</style>