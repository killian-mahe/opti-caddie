<template>
  <div class="relative min-h-50">
    <div @click="$emit('click')" class="w-full SimpleButton bg-leclercOrange text-black active:border-0 absolute bottom-0 font-semibold py-2 px-4 border-b-8 border-leclercOrangeFonce rounded-lg text-center cursor-pointer">
    {{ name }}
    </div>
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
