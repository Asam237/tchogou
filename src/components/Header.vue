<template>
  <header class="site__header">
    <div class="container mx-auto">
      <div
        class="
          site__header-tems
          justify-center
          px-2
          md:px-0
          py-4
          flex
          items-center
          md:justify-around
        "
      >
        <div class="site__header-pic flex items-center justify-center flex-col">
          <img class="w-24 h-auto" src="../assets/imgs/svt.jpg" alt="" />
          <h4
            class="text-sm text-gray-900 font-bold"
            style="font-family: 'Yaldevi', sans-serif"
          >
            {{ title }}
          </h4>
          <p
            class="text-xs font-normal mt-1"
            style="font-family: 'Yaldevi', sans-serif"
          >
            {{ content }}
          </p>
        </div>
        <div
          class="
            site__header-search
            p-2
            hidden
            lg:flex
            items-center
            justify-between
            lg:w-1/2
          "
          style="border-width: 2px; font-family: 'Yaldevi', sans-serif"
        >
          <input type="text" class="w-10/12" :placeholder="placeHolder" />
          <i :class="`${faws.icon} text-gray-800`" aria-hidden="true"></i>
          <!-- <div style="width: 10px" class="h-full w-1 bg-gray-800" /> -->
        </div>
        <div
          class="site__header-sign hidden md:flex items-center justify-center"
        >
          <a
            style="font-family: 'Yaldevi', sans-serif"
            class="
              uppercase
              text-gray-900 text-xs
              font-semibold
              hover:underline
              hover:text-gray-400
            "
            href="/account"
            >{{ signs }}</a
          >
        </div>
        <div
          class="site__header-icons hidden md:flex items-center justify-center"
        >
          <ul v-for="share in shares">
            <a class="ml-2" :href="share.link">
              <i :class="`${share.icon} text-gray-800`" aria-hidden="true"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="site__header-nav py-2 bg-gray-800 hidden md:flex"
      style="background-color: '#4657A0'"
    >
      <div class="container mx-auto">
        <div class="flex items-center justify-between py-1">
          <div class="blogOne flex">
            <ul v-for="main in mainOne">
              <li>
                <a
                  :href="main.link"
                  class="
                    mr-6
                    text-sm text-white
                    font-semibold
                    uppercase
                    hover:underline
                    hover:text-gray-400
                  "
                  style="font-family: 'Yaldevi', sans-serif"
                  >{{ main.text }}</a
                >
              </li>
            </ul>
          </div>
          <div class="blogTwo flex">
            <ul v-for="main in mainTwo">
              <li>
                <a
                  :href="main.link"
                  class="
                    mr-6
                    text-sm text-white
                    font-semibold
                    uppercase
                    hover:underline
                    hover:text-gray-400
                  "
                  style="font-family: 'Yaldevi', sans-serif"
                  >{{ main.text }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
document.title =
  "Accueil | VSS Market, Leader de la vente en ligne au Cameroun";
export default {
  name: "Header",
  data() {
    return {
      placeHolder: "Rechercher des produits",
      signs: "Se connecter / s'inscrire",
      faws: { id: 0, icon: "fa fa-search" },
      title: "Sahel Vetchi Technologies",
      content: "La vente en ligne pour tous !!",
      shares: [
        { id: "0", link: "https://facebook.com", icon: "fa fa-heart" },
        { id: "1", link: "https://twitter.com", icon: "fa fa-share" },
        { id: "2", link: "https://instagram.com", icon: "fa fa-shopping-cart" },
      ],
      mainOne: [
        { id: 1, link: "/", text: "accueil" },
        { id: 2, link: "/creation", text: "shop" },
        { id: 3, link: "/creation", text: "nos vendeurs" },
        { id: 4, link: "/creation", text: "blog" },
        { id: 5, link: "/creation", text: "produit" },
      ],
      mainTwo: [
        { id: 1, link: "", text: "a propos" },
        { id: 2, link: "/creation", text: "creer une boutique" },
      ],
    };
  },
};
</script>