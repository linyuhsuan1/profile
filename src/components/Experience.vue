
<template>
  <div class="container flex flex-col px-6 mx-auto mt-20 bg-white sm:px-12 sm:flex-row">
    <div class="container flex flex-col-reverse mx-auto ml-8">
      <div class="relative flex pt-10 pb-20 sm:items-center md:w-2/3">
        <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
          <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
          1
        </div>
        <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full ">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <h2 class="mb-1 text-xl font-medium text-gray-900 title-font">
              大學
            </h2>
            <p class="leading-relaxed">
              中原大學 資訊管理學系 CYCU Information
            </p>
          </div>
        </div>
      </div>
      <div class="relative flex pb-20 sm:items-center md:w-2/3">
        <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
          <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
          2
        </div>
        <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full ">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <h2 class="mb-1 text-xl font-medium text-gray-900 title-font">
              大學
            </h2>
            <p class="leading-relaxed">中原大學 資訊管理學系</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start mt-8 sm:w-2/5 sm:mt-0">
      <h1 class="mb-4 text-3xl leading-none lg:text-4xl">
        <strong class="text-gray-200 text-7xl">Experience</strong>
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Experience",
  components: {},
};
</script>
