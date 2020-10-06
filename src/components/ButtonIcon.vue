<template>
  <div>
    <div class="buttonicon cursor-pointer inline-block bg-leclercOrange rounded-lg h-40 text-2xl mt-12">
        <span>{{name}}</span>
        <div class="ml-32">
            <i :data-feather="icon" class="h-16 w-16"></i>
        </div>
    </div>
  </div>
</template>

<script>

import feather from "feather-icons"
export default {
  name: 'ButtonIcon',
  components: {
  },
  props: [
      "name",
      "icon",
  ],
  mounted(){
      feather.replace()
  }
}
</script>