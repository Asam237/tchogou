<template>
  <footer class="site__footer px-2 md:px-0 py-5 md:py-10">
    <div class="container mx-auto">
      <div
        class="
          flex flex-col
          items-center
          justify-center
          md:flex-row
          md:justify-between
        "
      >
        <div class="site__footer-text flex flex-col text-center md:flex-row">
          <p
            class="font-bold text-xs"
            style="font-family: 'Yaldevi', sans-serif"
          >
            {{ title }}
          </p>
          <span class="mr-1"></span>
          <p class="text-xs" style="font-family: 'Yaldevi', sans-serif">
            {{ description }}
          </p>
        </div>
        <div class="site__footer__items flex mt-4 md:mt-0">
          <ul v-for="item in items">
            <img :src="item.icon" class="w-auto mr-2 h-6" alt="" />
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      title: "Sahel Vetchi Technologies",
      description: " Copyrigth 2021 Design by Asam.",
      items: [
        { link: "/om", icon: require("../assets/imgs/om.jpg") },
        { link: "/momo", icon: require("../assets/imgs/momo.jpg") },
        { link: "/yoomee", icon: require("../assets/imgs/yoomee.jpg") },
      ],
    };
  },
};
</script>