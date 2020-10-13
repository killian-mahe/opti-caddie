<template>
  <div class="home px-12 pt-10">
    <h1 class=" font-bold pb-4 text-leclercBlue text-2xl">Mes listes</h1>
    <div class=" bg-gray-300 h-24 mb-8">
       <i data-feather="shopping-cart" class="h-24 w-24 pb-8 inline-block"></i>
       <h3 class="inline-block  pl-8 pt-2 text-2xl">Vacances <br> ~35min</h3> 
       <div class="inline-block float-right pr-8 pt-5">
       <SimpleButton name="Editer" class="w-48 inline-block float-right text-xl" style></SimpleButton> 
       </div>
    </div>
    <div class="  bg-gray-300 h-24">
       <i data-feather="shopping-cart" class="h-24 w-24 pb-8 inline-block"></i>
       <h3 class="inline-block  pl-8 pt-2 text-2xl">Hebdomadaires <br> ~25min</h3> 
       <div class="inline-block float-right pr-8 pt-5">
       <SimpleButton name="Editer" class="w-48 inline-block float-right text-xl" style></SimpleButton> 
       </div>
    </div>


    <div class="w-full flex justify-between mt-24">
       <SimpleButton name="Ajouter une liste" class="w-5/12 inline-block float-right text-3xl" style></SimpleButton> 
       <SimpleButton name="Scanner la liste" class="w-5/12 inline-block float-right text-3xl" style></SimpleButton> 
    </div>

    <div>
        
    </div>

  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton.vue"
import feather from "feather-icons"
export default {

  name: 'Home',
  components: {
    SimpleButton
  },

  mounted(){
    feather.replace()
  }
}
</script>
