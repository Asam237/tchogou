<template>
  <carousel :items-to-show="1.5">
    <slide class="h-auto w-full m-2" v-for="slide in slides" :key="slide">
      <img :src="slide" alt="" />
    </slide>
    <div class="bg-black h-52"></div>
    <template #addons>
      <navigation class="mx-6 bg-black" />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "MyCarousel",
  data() {
    return {
      slides: [
        require("../assets/imgs/slider1.webp"),
        require("../assets/imgs/slider2.webp"),
        require("../assets/imgs/slider3.webp"),
        require("../assets/imgs/slider4.webp"),
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>