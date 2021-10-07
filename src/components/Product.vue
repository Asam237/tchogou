<template>
  <div
    class="
      py-4
      site__product
      md:grid
      md:gap-4
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      sm:grid-cols-2
    "
  >
    <ul
      v-for="dts in myAPI"
      v-bind:key="dts.id"
      class="site__product-item shadow-2xl p-4"
    >
      <div>
        <img
          class="w-full bg-cover h-52"
          :src="dts.produits[0]['medias'][0].link"
        />
        <div class="flex justify-between pt-2">
          <p class="font-bold" style="font-family: 'Yaldevi', sans-serif">
            {{ dts.produits[0].name }}
          </p>
          <p
            class="text-red-700 text-sm underline font-semibold"
            style="font-family: 'Yaldevi', sans-serif"
          >
            {{ dts.produits[0].price }} FCFA
          </p>
        </div>
      </div>
      <!-- <div v-else>
        <div class="flex justify-center py-10 items-center">
          <img class="w-10 h-10 bg-cover" :src="loadingPic" alt="" />
        </div>
      </div> -->
      <!-- <div>{{ dts.produits[key].name }}</div>
      <div>{{ dts.produits[key].name }}</div> -->
      <div class="site__product-title">
        <p style="font-family: 'Yaldevi', sans-serif">
          <!-- {{ dts.name }} -->
        </p>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      myAPI: [],
      loadingPic: require("../assets/imgs/loading.gif"),
    };
  },
  async created() {
    const data = await axios
      .get(
        "https://dashboard.mystore.lamater.net/api/2021-05/companies/430/collections",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => (this.myAPI = response.data.data));
    console.log("hello data:::::", data);
  },
};
</script>