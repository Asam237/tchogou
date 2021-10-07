<template>
  <div class="site__livraison bg-green-800 py-5 md:py-10 my-8 px-2 md:px-0">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="site__livraison-items w-full md:w-3/5">
          <div
            class="
              site__livraison-itemOne
              grid
              gap-4
              grid-cols-1
              md:grid-cols-3
            "
          >
            <ul
              v-for="myItem in items"
              v-bind:key="myItem.icon"
              class="bg-white shadow-xl flex items-center p-1"
            >
              <i
                :class="`${myItem.icon} fa-lg mr-3 md:mr-4 text-green-800
              hover:text-gray-400
              rounded-full
              `"
                aria-hidden="true"
              ></i>
              <div class="site__livraison-block w-full">
                <p
                  class="text-xs font-extrabold"
                  style="font-family: 'Yaldevi', sans-serif"
                >
                  {{ myItem.title }}
                </p>
                <p
                  class="text-xs py-1"
                  style="font-family: 'Yaldevi', sans-serif"
                >
                  {{ myItem.content }}
                </p>
                <button
                  class="
                    text-xs
                    bg-green-700
                    mt-2
                    text-white
                    w-full
                    p-1
                    rounded-sm
                  "
                  style="font-family: 'Yaldevi', sans-serif"
                >
                  {{ myItem.btn }}
                </button>
              </div>
            </ul>
          </div>
        </div>
        <div
          class="
            site__livraison-sign
            w-full
            flex
            md:justify-center
            justify-start
            items-center
            md:w-2/5
          "
        >
          <div class="flex flex-col w-full mt-4 md:mt-0 md:w-3/6">
            <u v-for="item in signs" v-bind:key="item.id">
              <a :href="item.link">
                <button
                  style="font-family: 'Yaldevi', sans-serif"
                  class="
                    text-black
                    my-1
                    uppercase
                    text-xs
                    shadow-2xl
                    rounded-sm
                    p-1
                    bg-white
                    w-full
                    hover:text-white
                    hover:bg-green-400
                  "
                >
                  {{ item.name }}
                </button>
              </a>
            </u>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Livraison",
  data() {
    return {
      items: [
        {
          icon: "fa fa-truck",
          title: "Livraison rapide ",
          content: "Entre 1 et 4jours",
          btn: "Mes commandes",
        },
        {
          icon: "fa fa-money",
          title: "Service client de qualité",
          content: "Disponible à 100% ",
          btn: "Vendre sur VSS",
        },
        // {
        //   icon: "fa fa-money",
        //   title: "Plusieurs Moyens de paiement ",
        //   content: "Cash à la livraison/Mobile Money",
        //   btn: "Voir mon panier",
        // },
        {
          icon: "fa fa-calendar",
          title: "Retour sous 10 jours rapide ",
          content: "Si le produit a un problème",
          btn: "Service client",
        },
      ],
      signs: [
        { id: 0, name: "inscription", link: "/account" },
        { id: 1, name: "connexion", link: "/account" },
      ],
    };
  },
};
</script>