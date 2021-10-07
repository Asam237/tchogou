<template>
  <div class="site">
    <Banner :bannerText="bannerText" :contact="contact" :faqs="faqs" />
    <Header />
    <MyCarousel />
    <Offre />
    <Decouvrir />
    <Livraison />
    <WhatVSS />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "../components/Banner.vue";
import Header from "../components/Header.vue";
import WhatVSS from "../components/WhatVSS.vue";
import MyCarousel from "../components/Carousel.vue";
import Decouvrir from "../components/Decouvrir.vue";
import Offre from "../components/Offre.vue";
import Livraison from "../components/Livraison.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Banner,
    Header,
    MyCarousel,
    Decouvrir,
    Livraison,
    WhatVSS,
    Offre,
    Footer,
  },
  data() {
    return {
      bannerText: "NOUS RENDONS LE E-COMMERCE FACILE...",
    };
  },
};
</script>
