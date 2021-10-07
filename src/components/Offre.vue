<template>
  <div class="site__offre">
    <div class="hidden md:flex py-5 md:py-10 my-4 bg-gray-800">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <h4
            class="uppercase text-white font-extrabold"
            style="font-family: 'Yaldevi', sans-serif"
          >
            {{ title }}
          </h4>
          <a
            class="
              underline
              text-white text-xs
              hover:underline
              hover:text-gray-400
            "
            style="font-family: 'Yaldevi', sans-serif"
            :href="link.link"
            >{{ link.text }}</a
          >
        </div>
      </div>
    </div>
    <!-- <Product /> -->
  </div>
</template>

<script>
import Product from "../components/Product.vue";
export default {
  name: "Offre",
  components: {
    Product,
  },
  data() {
    return {
      title: "Offres du jour",
      link: { link: "", text: "Voir tout" },
    };
  },
};
</script>