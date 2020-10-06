<template>
  <div class="SimpleButton bg-red-700 hover:bg-red-300 cursor-pointer text-black font-bold rounded">{{ name }}
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
