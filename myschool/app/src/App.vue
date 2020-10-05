<template>
  <div id="app">
    <keep-alive :include="include">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      include: [],
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name);
      }

      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        const index = this.include.indexOf(from.name);
        index !== -1 && this.include.splice(index, 1);
      }
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
html,
body,
#app {
  height: 100vh;
  font-size: 15px;
}
</style>
