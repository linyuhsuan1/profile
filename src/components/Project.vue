
<template>
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <div class="container flex flex-col px-2 mx-auto mt-20 sm:px-6 sm:flex-row iphoneX:mt-[1rem]">
    <div class="flex flex-col items-start mt-8 sm:w-2/5 sm:mt-0 iphoneX:ml-[15%]">
      <span class="w-8 h-8 mr-4 bg-blue-500 rounded-full iphoneX:ml-[-1%]"></span>
      <h1 class="mb-4 text-3xl leading-none lg:text-4xl title-top ml-[0.5rem]">
        <strong class="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-300 via-pink-400 via-purple-400 to-blue-400 iphoneX:text-[5rem]">Project</strong>
      </h1>
    </div>
    <div class="container flex flex-col w-full h-screen mx-auto ml-8 swiper sm:h-[100]">
      <swiper :navigation="true" class="swiper-container bg-blue">
        <swiper-slide v-for="(item,index) in slideContent" :key="index">
          <div class="w-5/6 p-4 mb-6">
            <div class="overflow-hidden rounded-lg ">
              <img class="object-cover object-center w-full h-full" :src="item.imgUrl">
            </div>
            <div :id="`title-${index}`">
              <h2 class="mt-5 text-xl font-medium text-gray-900 title-font">{{item.title}}</h2>
              <p class="mt-2 text-base leading-relaxed text-gray-600">{{item.text_1}}</p>
              <p class="mt-2 text-base leading-relaxed text-gray-600">{{item.text_2}}</p>
              <p class="mt-2 text-base leading-relaxed text-gray-600">{{item.text_3}}</p>
              <p class="mt-2 text-base leading-relaxed text-gray-600">{{item.text_4}}</p>
              <a :href="item.link" class="inline-flex items-center mt-3 text-indigo-500">Github
                <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg> -->
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
          imgUrl: require("../../src/assets/project-vue-1.png"),
          link: "",
          title: "React.js",
          text_1: "- 運用 React.js Hook",
          text_2: "- 使用 Tailwind.css UI Library",
          text_3: "- 使用 useState、useMemo、useCallback 做資料處理",
          text_4: "- 使用 useContext 做全域狀態管理",
        },
        1: {
          imgUrl: require("../../src/assets/project-vue-1.png"),
          link: "https://github.com/linyuhsuan/vuefinal",
          title: "Vue.js 電商網站 - La'quisine",
          text_1: "- 使用 VeeValidate 表單驗證",
          text_2: "- 使用 Vue-carousel 輪播特效",
          text_3: "- VueRouter",
          text_4: "- Veux 達到元件同步更新資料",
        },
        2: {
          imgUrl: require("../../src/assets/project-vue-2.png"),
          link: "",
          title: "大學專題 - BuyChaser",
          text_1: "針對現今代購直播問題, 解決買賣雙方帶來的問題,",
          text_2: "並讓代購不只是特定的人, 也結合共享經濟的概念, 讓人人都是代購者",
          text_3: "- 使用 Bootstrap 開發並使用 RWD 去相容多裝置",
        },
      },
    };
  },
  methods: {},
};
</script>
