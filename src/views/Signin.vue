<template>
  <div class="site">
    <Banner :bannerText="bannerText" :contact="contact" :faqs="faqs" />
    <Header />
    <Title title="Mon compte" />
    <Formulaire />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "../components/Banner.vue";
import Header from "../components/Header.vue";
import Title from "../components/Title.vue";
import Formulaire from "../components/Formulaire.vue";
import Footer from "../components/Footer.vue";
document.title =
  "Mon compte | VSS Market, Leader de la vente en ligne au Cameroun";
export default {
  name: "Signin",
  components: {
    HelloWorld,
    Banner,
    Header,
    Title,
    Formulaire,
    Footer,
  },
  data() {
    return {
      bannerText: "NOUS RENDONS LE E-COMMERCE FACILE...",
    };
  },
};
</script>