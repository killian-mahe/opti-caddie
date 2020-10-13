<template>
  <div>
    <img src="../assets/logo_leclerc.svg" class=" object-scale-down h-24 w-auto mr-auto ml-2 pt-2">
    <div class="login text-6xl object-center flex justify-center h-full text-leclercBlue font-quicksand font-bold">
      Opti-caddie
    </div>
    <div class="login flex justify-center items-center h-full">
      <router-link to="/scan">
        <ButtonIcon icon="camera" name1="Scannez votre" name2="carte de fidélité" class="mr-16 px-16"></ButtonIcon>
      </router-link>
      <router-link to="/identifiants">
        <ButtonIcon icon="user" name1="Connectez-vous à" name2="votre compte" class="ml-16 px-16"></ButtonIcon>
      </router-link>
    </div>
    <div class="login text-6xl object-center flex justify-center h-full text-leclercBlue pt-16 font-quicksand font-semibold">
      16 : 12
    </div>
    <img src="../assets/logo_effica.svg" class="flex object-scale-down h-48 w-auto ml-auto mr-8 mt-8">
  </div>
</template>

<script>
import ButtonIcon from "../components/ButtonIcon.vue"
export default {
  name: 'Login',
  components: {
    ButtonIcon,
  }
}
</script>
