<template>
  <div class="register">
    <van-nav-bar title="登陆"></van-nav-bar>
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
      />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="register">注册</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      uid:'0',
    };
  },
  methods: {
    async register() {
      const { username, password } = this;
      const res = await this.$http.post("/user/registry", {
        username,
        password,
      });
      this.$router.history.push("/login");
    },
  },
};
</script>