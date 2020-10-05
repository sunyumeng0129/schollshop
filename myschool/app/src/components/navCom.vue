<template>
    <div class="main-nav-list">
          <div class="hs-1 a1">
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
                alt
              />
              <p>蔬菜每日鲜</p>
            </a>
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"
                alt
              />
              <p>早晚市</p>
            </a>
          </div>
          <div class="hs-1">
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1"
                alt
              />
              <p>肉禽蛋</p>
            </a>
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1"
                alt
              />
              <p>品牌汇</p>
            </a>
          </div>
          <div class="hs-1">
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1"
                alt
              />
              <p>母婴天地</p>
            </a>
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1"
                alt
              />
              <p>领券中心</p>
            </a>
          </div>
          <div class="hs-1">
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1"
                alt
              />
              <p>进店必买</p>
            </a>
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"
                alt
              />
              <p>支付优惠</p>
            </a>
          </div>
          <div class="hs-1">
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1"
                alt
              />
              <p>美通卡</p>
            </a>
            <a class="inse01">
              <img
                src="https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1"
                alt
              />
              <p>直采品牌</p>
            </a>
          </div>
        </div>
</template>

<script>
export default {
    name:"navCom"
}
</script>

<style lang='scss' scoped>
.main-nav-list {
    width: 100%;
    height: 130px;
   margin: 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    .hs-1 {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .inse01 {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 10px;
      }
      img {
        width: 66%;
        height: 58%;
      }
    }
    }
</style>
