<template>
  <div class="site__sign-formulaire px-2 md:px-0 py-5 md:py-10">
    <div class="container mx-auto flex flex-col md:flex-row">
      <div v-show="value === 'A'" class="login w-full md:w-1/2">
        <h4
          style="font-family: 'Yaldevi', sans-serif"
          class="text-center md:text-left font-extrabold"
        >
          {{ title[0] }}
        </h4>
        <form
          @submit="checkForm"
          action="https://dashboard.mystore.lamater.net/api/2021-05/clients/login"
          method="post"
          class="site__sign-formulaire flex flex-col"
        >
          <MyInput
            type="text"
            placeHolder="Identifiant ou adresse de messagerie"
            myModel="identifiant"
          />
          <MyInput
            myModel="password"
            type="password"
            placeHolder="Mot de Passe"
          />
          <button
            style="font-family: 'Yaldevi', sans-serif"
            class="
              my-2
              py-2
              font-extrabold
              text-white
              bg-gray-800
              hover:bg-gray-900
            "
          >
            CONNEXION
          </button>
        </form>
      </div>

      <div v-show="value === 'B'" class="login w-full md:w-1/2">
        <h4
          style="font-family: 'Yaldevi', sans-serif"
          class="text-center md:text-left font-extrabold"
        >
          {{ title[1] }}
        </h4>
        <div class="site__sign-formulaire flex flex-col">
          <MyInput
            myModel="identifiant"
            type="text"
            placeHolder="Identifiant"
          />
          <MyInput type="text" placeHolder="Adresse de messagerie" />
          <MyInput type="password" placeHolder="Mot de Passe" />
          <p class="py-2 text-sm" style="font-family: 'Yaldevi', sans-serif">
            {{ politique }}
          </p>
          <button
            style="font-family: 'Yaldevi', sans-serif"
            class="
              my-2
              py-2
              font-extrabold
              text-white
              bg-gray-800
              hover:bg-gray-900
            "
          >
            INSCRIPTION
          </button>
          <p>Hello - {{ identifiant }}</p>
        </div>
      </div>

      <div class="signup w-full flex items-center flex-col md:w-1/2">
        <h4
          class="font-extrabold py-4 md:py-0"
          style="font-family: 'Yaldevi', sans-serif"
        >
          {{ signup }}
        </h4>
        <p
          class="text-center text-sm p-4 md:p-8 leading-6 font-medium"
          style="font-family: 'Yaldevi', sans-serif"
        >
          {{ content }}
        </p>
        <button
          style="font-family: 'Yaldevi', sans-serif"
          @click="changeComponent"
          class="
            border-2
            py-1
            px-4
            cursor-pointer
            hover:bg-gray-900
            hover:text-white
            text-sm
            font-medium
          "
        >
          {{ signup }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from "../components/Input.vue";
import Login from "../components/login.vue";
export default {
  name: "Formulaire",
  components: {
    MyInput,
    Login,
  },
  data() {
    return {
      title: ["CONNEXION", "INSCRIPTION"],
      signup: "S'INSCRIRE",
      currentComponent: Login,
      identifiant: "A",
      value: "A",
      content:
        "L'enregistrement sur ce site vous permet d'accéder au statut et à l'historique de vos commandes. Remplissez simplement les champs ci-dessous et un nouveau .Nous vous demanderons uniquement les informations nécessaires pour rendre le processus d'achat plus rapide et plus facile.",
      politique:
        "Vos données personnelles seront utilisées pour étayer votre expérience sur ce site, pour gérer l'accès à votre compte, et à d'autres fins décrites dans notre politique de confidentialité.",
      identifiant: null,
      password: null,
    };
  },
  methods: {
    changeComponent: function () {
      if (this.value == "A") {
        this.signup = "INSCRIPTION";
        return (this.value = "B");
      }
      if (this.value != "A") {
        this.signup = "CONNEXION";
        return (this.value = "A");
      }
    },
    checkForm: function (e) {
      e.preventDefault();
    },
  },
  template: `Hello`,
};
</script>