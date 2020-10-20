<template>
  <div class="home px-12 pt-10">
    <h1 class=" font-bold pb-4 text-leclercBlue text-2xl">Mes listes</h1>
    <div v-for="id in session.user.user_lists" :key="id" class="  bg-gray-300 h-24 mb-8">
      <i data-feather="shopping-cart" class="h-24 w-24 pb-8 inline-block"></i>
      <List :list="getList(id)" ></List>
      <SimpleButton name="Editer" class="w-48 my-5 mr-4 inline-block float-right text-xl" style></SimpleButton> 
    </div>

    <div class="w-full flex justify-between mt-24">
       <SimpleButton name="Ajouter une liste" class="w-5/12 inline-block float-right text-3xl" style></SimpleButton> 
       <SimpleButton name="Scanner la liste" class="w-5/12 inline-block float-right text-3xl" style></SimpleButton> 
    </div>
    <button @click="print">test</button>
    <div class=" bg-gray-300 my-20">
      <Carousel
        @next="next"
        @prev="prev"
        >

            <CarouselSlide v-for="slide in productsInPromo" 
            :key="slide.id"
            :slide="slide"
            :config="config"
            :productsInPromo="productsInPromo"
            class="pl-64 py-12 pr-32"
            >
            </CarouselSlide>
        
      </Carousel>

      
    </div>

  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton.vue"
import Carousel from "../components/Carousel.vue"
import CarouselSlide from "../components/CarouselSlide.vue"
import List from "../components/List.vue"
import { mapState } from 'vuex';
import feather from "feather-icons"
export default {

  name: 'Home',
  data() {
    return {
      config: {
      visibleSlide : 0,
      direction : '',},
    }
  },

  computed: {
    ...mapState(["products", "productsInPromo", "session", "shopping_lists"]),
    slidesLen() {
      return this.productsInPromo.length;
    },
    
    
  },
  methods : {
    next() {
      if(this.config.visibleSlide >= this.slidesLen -1) {
        this.config.visibleSlide = 0;
      }else {
        this.config.visibleSlide++;
      }
      this.config.direction = "left"
    },
    prev(){
      if(this.config.visibleSlide <= 0) {
        this.config.visibleSlide = this.slidesLen -1;
      }else {
        this.config.visibleSlide--;
      }
      this.config.direction = "right"
    },
    
    print(){
      
      for(let i=0; i<this.session.user.user_lists.length; i++){
        console.log(this.session.user.user_lists[i]);
      }
        
    },
    getList : function (id) {
      return this.shopping_lists.find(list => list.id === id);
    },

  },
  

  components: {
    SimpleButton,
    Carousel,
    CarouselSlide,
    List,
  },

  mounted(){
    feather.replace()
  },

  
}
</script>
