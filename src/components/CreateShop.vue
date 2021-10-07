<template>
  <div data-aos="fade-left" class="site__shop py-4 md:py-10" id="createshop">
    <div class="container mx-auto">
      <h1
        class="font-extrabold text-gray-800 text-center text-xl"
        style="font-family: 'Yaldevi', sans-serif"
      >
        COMMENT PROCEDER
      </h1>
      <div
        class="
          site__shop-items
          grid
          gap-4
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          py-4
          md:py-10
        "
      >
        <ul class="shadow-2xl p-4" v-for="item in shops" v-bind:key="item.id">
          <h4
            style="font-family: 'Yaldevi', sans-serif"
            class="text-sm text-gray-800 font-extrabold"
          >
            {{ item.title }}
          </h4>
          <p style="font-family: 'Yaldevi', sans-serif" class="text-xs py-2">
            {{ item.content }}
          </p>
          <button
            style="font-family: 'Yaldevi', sans-serif"
            class="
              text-xs
              py-1
              uppercase
              font-extrabold
              text-white
              bg-green-800
              w-full
              p-1
            "
          >
            {{ item.btn }}
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateShop",
  data() {
    return {
      shops: [
        {
          id: "0",
          title: "CHOISIR SON FORFAIT",
          content:
            "Durrell Market Propose trois forfaits mensuels (5.000F - 50.000F et 100.000F par mois pour les Vendeurs)",
          btn: "choisir",
        },
        {
          id: "1",
          title: "CRÉER SA BOUTIQUE",
          content:
            "Une fois le Forfait choisi, Vous pouvez facilement suivre l'assistant pour la création de votre boutique",
          btn: "creer",
        },
        {
          id: "2",
          title: "AJOUTER SES PRODUITS",
          content:
            "Une fois la boutique créée, il ne reste plus qu'à ajouter vos produits et à gérer vos ventes.",
          btn: "ma boutique",
        },
      ],
    };
  },
};
</script>