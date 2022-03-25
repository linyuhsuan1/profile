
<template>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400&display=swap" rel="stylesheet" />

  <div class="bg-white">
    <div @click="goTop()" class="top-[89%] fixed left-[2%] z-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
      </svg>
    </div>
    <main class="z-50 bg-white font-montserrat">

      <nav class="bg-white font-montserrat">
        <div class="container flex flex-wrap items-center p-4 mx-auto md:flex-no-wrap">
          <div class="mr-4 md:mr-8">
            <div>
              <div class="flex items-center text-2xl font-black text-gray-700">
                <span class="w-6 h-6 mr-4 bg-blue-500 rounded-full cursor-default"></span>Profile
              </div>
            </div>
          </div>
          <div class="ml-auto md:hidden">
            <button class="flex items-center px-3 py-2 border rounded" type="button" v-on:click="toggleNavbar()">
              <svg class="w-3 h-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div v-bind:class="{ hidden: !showMenu, flex: showMenu }" class="w-full md:w-auto md:flex-grow md:flex md:items-center">
            <ul class="flex flex-col pt-4 mt-4 -mx-4 text-lg md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
              <li class="block px-4 py-1 text-gray-600 cursor-default md:p-2 lg:px-4 hover:text-blue-500" href="#" v-scroll-to="'#skill'">
                Skill
              </li>
              <li class="block px-4 py-1 text-gray-600 cursor-default md:p-2 lg:px-4 hover:text-blue-500" href="#" v-scroll-to="'#Project'">
                Project
              </li>
              <li class="block px-4 py-1 text-gray-600 cursor-default md:p-2 lg:px-4 hover:text-blue-500" href="#" v-scroll-to="'#Experience'">
                Experience
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div class="container flex flex-col-reverse items-center px-6 mx-auto text-center sm:px-12 sm:flex-row">
          <div class="flex flex-col items-center mt-8 sm:w-2/5 sm:mt-0">
            <h1 class="mb-4 text-4xl text-[#fb923c]">Shelly Lin - 林俞萱</h1>
            <div class="relative grid gap-8 bg-white p-7 lg:grid-cols-2 lg:width-[38vw] lg:ml-[12%] lg:mt-[4%]">
              <div class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 bg-[#FFEDD5] rounded-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="30" height="30" fill="#FDBA74">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 text-md">Frontend Engineer</p>
                </div>
              </div>
              <div class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                style="width:fit-content">
                <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#FFEDD5] rounded-[8px] sm:h-12 sm:w-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="#FDBA74">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 text-md">liny7544@gmail.com</p>
                </div>
              </div>
              <div class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 bg-[#FFEDD5] rounded-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="30" height="30" fill="#FDBA74">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 text-md">Taiwan City, TW</p>
                </div>
              </div>
              <a href="https://github.com/linyuhsuan1" target="_blank"
                class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 bg-[#FFEDD5] rounded-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FDBA74" viewBox="0 0 1792 1792">
                    <path
                      d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 text-md">Github</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/%E4%BF%9E%E8%90%B1-%E6%9E%97-75b27115b/" target="_blank"
                class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 bg-[#FFEDD5] rounded-[8px]">
                  <svg width="30" height="30" fill="#FDBA74" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="8" fill="#FFEDD5"></rect>
                    <path
                      d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="font-medium text-gray-900 text-md">LinkedIn</p>
                </div>
              </a>
            </div>
            <!-- <div class="flex flex-row justify-center">
             <a href="https://www.linkedin.com/in/%E4%BF%9E%E8%90%B1-%E6%9E%97-75b27115b/" target="_blank" class="text-[#78716c] transition-colors duration-200 hover:text-gray-800 ">
              <svg width="30" height="30"  fill="#FDBA74" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                </path>
              </svg>
            </a>
             <a href="https://github.com/linyuhsuan1"  target="_blank" class="text-[#78716c] transition-colors duration-200 hover:text-gray-800 " style="margin-left:30%">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FDBA74" viewBox="0 0 1792 1792">
                <path
                  d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                </path>
              </svg>
            </a>
            </div> -->
          </div>
          <div class="flex justify-center sm:w-3/5 mt-[4%]">
            <img src="../../src/assets/profile.jpeg" class="bg-center bg-no-repeat bg-auto w-[60%] ml-[18%] iphoneX:ml-[0%] iphoneX:w-[60%]" style="border-radius:20px" />
          </div>
        </div>
      </div>
    </main>
    <div id="skill">
      <Education />
    </div>
    <div id="Project">
      <Project />
    </div>
    <div id="Experience">
      <Experience />
    </div>
  </div>
</template>


<script>
import Project from "./Project.vue";
import Education from "../components/Education.vue";
import Experience from "../components/Experience.vue";
export default {
  name: "HelloWorld",
  components: {
    Project,
    Education,
    Experience,
  },
  data() {
    return {
      showMenu: false,
    };
  },

  mounted() {},
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
    goTop: function () {
      document.documentElement.scrollTop = 0;
    },
  },
  props: {},
};
</script>

