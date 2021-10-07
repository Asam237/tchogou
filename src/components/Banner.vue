<template>
  <div class="site__banner px-2 md:px-0" style="border-width: 1px">
    <div
      class="
        container
        mx-auto
        flex
        sm:justify-between
        justify-center
        items-center
      "
    >
      <div class="site__banner-text hidden sm:flex py-2">
        <p
          class="text-gray-500 text-xs"
          style="font-family: 'Roboto', sans-serif"
        >
          {{ bannerText }}
        </p>
      </div>
      <div class="site__banner-tools flex items-center">
        <div class="site__banner-social py-2 flex">
          <ul v-for="social in socials">
            <a class="ml-2" :href="social.link">
              <i
                :class="`${social.icon} text-gray-800
              hover:text-gray-400
              `"
                aria-hidden="true"
              ></i>
            </a>
          </ul>
        </div>
        <div
          class="
            site__banner-letter
            hidden
            py-2
            text-gray-800
            md:flex
            items-center
            ml-6
            hover:text-gray-400
          "
        >
          <i :class="`${mail.icon} mr-2`" aria-hidden="true"></i>
          <a
            href="#"
            class="text-xs font-semibold hover:underline hover:text-gray-400"
            style="font-family: 'Yaldevi', sans-serif"
          >
            {{ mail.text }}
          </a>
        </div>
        <div
          v-for="other in others"
          class="
            site__banner-contact
            hidden
            md:flex
            ml-6
            font-semibold
            items-center
          "
        >
          <p class="h-full bg-gray-800 mx-2" style="width: 1px"></p>
          <a
            href="#"
            class="
              uppercase
              flex
              text-gray-800 text-xs
              hover:underline
              hover:text-gray-400
            "
            style="font-family: 'Yaldevi', sans-serif"
          >
            {{ other }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      socials: [
        { id: "0", link: "https://facebook.com", icon: "fa fa-facebook" },
        { id: "1", link: "https://twitter.com", icon: "fa fa-twitter" },
        { id: "2", link: "https://instagram.com", icon: "fa fa-instagram" },
        { id: "3", link: "https://whatsapp.com", icon: "fa fa-whatsapp" },
      ],
      mail: { text: "NEWLETTER", icon: "fa fa-envelope" },
      others: ["contact", "faqs"],
    };
  },
  props: {
    bannerText: String,
    contact: String,
    faqs: String,
  },
};
</script>