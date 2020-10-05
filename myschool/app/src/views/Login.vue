<template>
  <div class="login-box">
    <h3>请登录</h3>
    <van-form>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        readonly
        clickable
        @touchstart.native.stop="show = true"
        :value="password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="login">登陆</van-button>
      </div>
    </van-form>

    <van-number-keyboard v-model="password" :show="show" :maxlength="6" @blur="show = false" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "haonan",
      password: "",
      show: false,
      value: "",
    };
  },
  methods: {
    async login() {
      const { username = [], password = [] } = this;
      let result = await this.$http.post("/user/login", { username, password });
      localStorage.setItem("username", this.username);
      localStorage.setItem("uid", result.result[0].uid);
      this.$router.history.push("/index/my");
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.login-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
h3 {
  margin-top: 20%;
  margin-bottom: 35px;
}
input,
button {
  margin-top: 20%;
  outline: none;
  border: none;
  margin-left: 10px;
}
input {
  width: 80%;
  height: 6%;
  border-radius: 0;
  border-bottom: 1px solid #ccc;
}
button {
  width: 90%;
  height: 30px;
  border-radius: 10px;
  background: #fd542d;
  color: #fff;
  font-size: 14px;
  &.active {
    background: #b3afae;
    color: #fff;
  }
}
</style>

