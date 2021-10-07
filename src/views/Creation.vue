<template>
  <div class="site">
    <Banner :bannerText="bannerText" :contact="contact" :faqs="faqs" />
    <Header />
    <Title title="EN COURS DE CREATION !" />
    <Footer />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Header from "../components/Header.vue";
import Title from "../components/Title.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Creation",
  components: {
    Banner,
    Header,
    Title,
    Footer,
  },
  data() {
    return {
      bannerText: "NOUS RENDONS LE E-COMMERCE FACILE...",
    };
  },
};
</script>