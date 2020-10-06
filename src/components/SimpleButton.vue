<template>
  <div class="SimpleButton bg-leclercOrange hover:bg-leclercOrangeClair text-black font-bold py-2 px-4 border-b-4 border-leclercOrangeFonce hover:border-leclercOrange rounded-lg text-center">{{ name }}
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
