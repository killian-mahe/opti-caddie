<template>
  <div>
    <div class="login text-6xl object-center flex justify-center h-full text-leclercBlue pt-24">
      Opti-caddie
    </div>
    <div class="login flex justify-center items-center h-full">
      <ButtonIcon icon="camera" name1="Scannez votre" name2="carte de fidélité" class="mr-16 px-16"></ButtonIcon>
      <ButtonIcon icon="user" name1="Connectez-vous à" name2="votre compte" class="ml-16 px-16"></ButtonIcon>
    </div>
    <div class="login text-6xl object-center flex justify-center h-full text-leclercBlue pt-16">
      16 : 12
    </div>
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
