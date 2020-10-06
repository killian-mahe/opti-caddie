<template>
  <div>
    <div class="login text-6xl object-center flex justify-center h-full">
      Opti-caddie
    </div>
    <div class="login flex justify-center items-center h-full">
      <ButtonIcon icon="camera" name="Scannez votre carte de fidélité" class="mr-16 px-16"></ButtonIcon>
      <ButtonIcon icon="user" name="Connectez-vous à votre compte" class="ml-16 px-16"></ButtonIcon>
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
