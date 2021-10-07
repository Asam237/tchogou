<template>
  <div class="login w-full md:w-1/2">
    <h4
      style="font-family: 'Yaldevi', sans-serif"
      class="text-center md:text-left font-extrabold"
    >
      {{ title }}
    </h4>
    <div class="site__sign-formulaire flex flex-col">
      <MyInput type="text" placeHolder="Identifiant ou adresse de messagerie" />
      <MyInput type="password" placeHolder="Mot de Passe" />
      <button
        style="font-family: 'Yaldevi', sans-serif"
        class="my-2 py-2 font-extrabold text-white bg-gray-800"
      >
        CONNEXION
      </button>
    </div>
  </div>
</template>

<script>
import MyInput from "../components/Input.vue";
export default {
  name: "Login",
  data() {
    return {
      title: "CONNEXION",
      signup: "S'INSCRIRE",
      content:
        "L'enregistrement sur ce site vous permet d'accéder au statut et à l'historique de vos commandes. Remplissez simplement les champs ci-dessous et un nouveau .Nous vous demanderons uniquement les informations nécessaires pour rendre le processus d'achat plus rapide et plus facile.",
    };
  },
  components: {
    MyInput,
  },
};
</script>