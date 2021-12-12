
<template>
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <div class="container flex flex-col px-6 mx-auto mt-20 sm:px-12 sm:flex-row">
    <div class="flex flex-col items-start mt-8 sm:w-2/5 sm:mt-0">
      <h1 class="mb-4 text-3xl leading-none lg:text-4xl">
        <strong class="text-gray-200 text-7xl">Info</strong>
      </h1>
    </div>
    <div class="container flex flex-col w-full h-screen mx-auto ml-8 swiper">
      <swiper :navigation="true" class="swiper-container bg-blue">
        <swiper-slide>
          fdgfdg
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </div>

  </div>
</template>
<style scoped>
</style>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
// import SwiperCore, { Pagination } from "swiper";

// SwiperCore.use([Pagination]);

export default {
  name: "Info",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
