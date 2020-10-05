<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in this.swiperList" :key="index">
          <img :src="item.img" alt />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
//swiper

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  props: ["swiperList"],
  updated() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 150px;
  width: 100%;
  background: orange;
  margin-top: 10px;
}
.swiper-slide {
  text-align: center;
  line-height: 150px;
  color: aliceblue;
  width: 100%;
  height: 100%;
  font-size: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}

</style>