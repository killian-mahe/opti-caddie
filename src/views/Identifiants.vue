<template>
  <div>
    <img
      src="../assets/logo_leclerc.svg"
      class="object-scale-down h-24 w-auto mr-auto ml-2 pt-2"
    />
    <router-link to="/login">
      <SimpleButton
        name="Retour"
        class="w-48 inline-block mr-auto text-xl"
        style
      ></SimpleButton>
    </router-link>
    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Nom d'utilisateur
        </label>
        <input
          class="shadow appearance-none border w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Nom d'utilisateur"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Mot de passe
        </label>
        <input
          class="shadow appearance-none border w-6/12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="*******"
        />
      </div>
      <div class="flex items-center justify-between">
        <SimpleButton
        name="Se connecter"
        class="w-48 inline-block text-xl"
        style
      ></SimpleButton>
       <SimpleButton
        name="Mot de passe oublié ?"
        class="w-48 inline-block text-xl"
        style
      ></SimpleButton>
      </div>
    </form>
  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton.vue";
export default {
  name: "Identifiants",
  components: {
    SimpleButton,
  },
};
</script>
