
<template>
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <div class="container flex flex-col px-6 mx-auto mt-20 sm:px-12 sm:flex-row">
    <div class="flex flex-col items-start mt-8 sm:w-2/5 sm:mt-0">
      <h1 class="mb-4 text-3xl leading-none lg:text-4xl">
        <strong class="text-gray-200 text-7xl">Project</strong>
      </h1>
    </div>
    <div class="container flex flex-col w-full h-screen mx-auto ml-8 swiper sm:h-[100]">
      <swiper :navigation="true" class="swiper-container bg-blue">
        <swiper-slide v-for="(item,index) in slideContent" :key="index">
          <div class="w-5/6 p-4 mb-6">
            <div class="h-64 overflow-hidden rounded-lg">
              <img class="object-cover object-center w-full h-full" :src="item.imgUrl">
            </div>
            <div :id="`title-${index}`">
              <h2 class="mt-5 text-xl font-medium text-gray-900 title-font">{{item.title}}</h2>
              <p class="mt-2 text-base leading-relaxed">-運用React Router、React hook週期</p>
              <p class="mt-2 text-base leading-relaxed">-使用useMemo、useContext、useCallback</p>
              <p class="mt-2 text-base leading-relaxed">Redux</p>
              <a class="inline-flex items-center mt-3 text-indigo-500">Github
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </swiper-slide>
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
  name: "Project",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      someLocalProperty: [],
      slideContent: {
        0: {
          imgUrl:
            "https://images.unsplash.com/photo-1586053015795-0e7dc4c44d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          title: "React.js",
        },
        1: {
          imgUrl:
            "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
          title: "Vue.js",
        },
        2: {
          imgUrl:
            "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          title: "大學專題-BuyChaser",
        },
      },
    };
  },
  methods: {},
};
</script>
