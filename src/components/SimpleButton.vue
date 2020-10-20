<template>
  <div @click="$emit('click')" class="SimpleButton bg-leclercOrange hover:bg-leclercOrangeClair text-black font-semibold py-2 px-4 border-b-8 border-leclercOrangeFonce hover:border-leclercOrange rounded-lg text-center cursor-pointer">
    {{ name }}
  </div>
</template>

<script>

export default {

  
  name: 'SimpleButton',
  components: {
  },
  props: [
      "name",
    ]
}
</script>
