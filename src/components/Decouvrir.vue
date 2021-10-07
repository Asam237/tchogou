<template>
  <div class="site__decouvrir py-5 md:py-10">
    <div class="container mx-auto">
      <div class="flex flex-col pb-4 md:flex-row">
        <div
          class="
            site__decouvrir-phones
            hidden
            md:flex md:flex-col
            md:w-1/3
            md:mr-10
          "
        >
          <div class="site__decouvrir-phoneOne w-full h-72 bg-gray-900">
            <p>a</p>
          </div>
          <div
            class="
              site__decouvrir-phoneTwo
              w-full
              h-72
              bg-cover
              hover:scale-50
              bg-gray-900
              mt-4
            "
          >
            <p>a</p>
          </div>
        </div>
        <div class="site__decouvrir-product w-full md:w-3/4">
          <div
            class="
              site__decouvrir-header
              flex flex-col
              md:flex-row
              bg-cover
              md:justify-between
            "
          >
            <h1
              class="
                text-xl text-gray-800
                font-extrabold
                md:border-b-2 md:border-red-700
                text-center
                cursor-pointer
                px-2
                md:px-0
                md:uppercase
              "
              style="font-family: 'Yaldevi', sans-serif"
              @click="changeProduct"
            >
              A decouvrir sur Vetchi Smart Stock
            </h1>
            <h1
              class="
                text-xs
                cursor-pointer
                hidden
                md:flex
                md:text-sm
                uppercase
                font-extrabold
              "
              style="font-family: 'Yaldevi', sans-serif"
              @click="changeProduct"
            >
              AJOUTS RÉCENTS DE NOS VENDEURS
            </h1>
          </div>
          <div class="site__decouvrir-main">
            <div v-show="value === 'A'">
              <!-- {{ value }} -->
              <Product />
            </div>
            <div v-show="value === 'B'">
              {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
export default {
  name: "Decouvrir",
  data() {
    return {
      value: "A",
    };
  },
  methods: {
    changeProduct: function () {
      if (this.value == "A") {
        return (this.value = "A");
      }
    },
  },
  components: {
    Product,
  },
};
</script>