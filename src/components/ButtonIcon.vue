<template>
  <div>
    <div class="buttonicon cursor-pointer bg-leclercOrange rounded-lg w-auto pl-4 pr-4 text-2xl mt-40 py-4  items-center grid font-quicksand active:border-0 border-b-8 border-leclercOrangeFonce">
        <div class="grid text-center mt-2 pl-12 pr-12">{{name1}}</div>
        <div class="grid text-center mt-2 pl-12 pr-12 pb-4">{{name2}}</div>
        <div :data-feather="icon" class="h-16 w-16 flex items-center content-center ml-auto mr-auto"></div>
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
      "name1",
      "name2",
      "icon",
  ],
  mounted(){
      feather.replace()
  }
}
</script>