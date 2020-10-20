<template>
  <div class="font-quicksand">
    <img
      src="../assets/logo_leclerc.svg"
      class="object-scale-down inline-flex h-24 w-auto mr-auto ml-2 pt-2"
    />
    <router-link to="/login">
      <SimpleButton
        name="Retour"
        class="w-48 inline-block mr-4 mt-4 text-xl float-right"
        style
      ></SimpleButton>
    </router-link>
    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4 mt-16 ml-20 ">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-3xl font-bold mb-2"
          for="username"
        >
          Nom d'utilisateur
        </label>
        <input
          class="text-3xl shadow appearance-none border w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Nom d'utilisateur"
          v-model="username"
        />
        <div v-show="noUsername" class="text-red-700">Veuillez entrer nom d'utilisateur !</div>
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-3xl font-bold mb-2"
          for="password"
        >
          Mot de passe
        </label>
        <input
          class="text-3xl shadow appearance-none border w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="*******"
          v-model ="mdp"
        />
        <div v-show="noMdp" class="text-red-700">Veuillez entrer un mot de passe !</div>
      </div>
      <div class="flex items-center justify-between">
        <SimpleButton
          name="Se connecter"
          class="w-48 inline-block text-xl"
          style
          @click="connect(); missingLogin()"
        ></SimpleButton>
        <SimpleButton
          name="Mot de passe oublié ?"
          class="w-48 inline-block text-xl mr-48"
          style
           @click="showPopup"
        ></SimpleButton>
        <Popup title="Pas de chance" v-show="isPopupVisible" @close="closePopup"></Popup>
        <Popup title="Les identifiants ne correspondent pas à un utilisateur enregistré" v-show="popupNoUser" @close="closePopup"></Popup>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SimpleButton from "../components/SimpleButton.vue";
import Popup from '../components/Popup.vue';

export default {
  name: "Identifiants",
  components: {
    SimpleButton,
    Popup,
  },
  data(){
      return {mdp:"", username:"", isPopupVisible:false, noUsername:false, noMdp:false, popupNoUser:false}
  },
  computed:{
    ...mapState(["users", "session"])
  },
  methods:{
    ...mapActions (["updateLoggedUser"]),
    connect:function(){
      let user=this.users.find(tmpuser=>{
        return tmpuser.username===this.username && tmpuser.password===this.mdp
        })
      if(user){
        this.updateLoggedUser(user.id)
        this.popupNoUser=false;
      }else{
        this.popupNoUser=true;
      }
      console.log(this.session.user)
    },

    missingLogin:function(){
      if(this.username==''){
        this.noUsername = true;
      }else{
        this.noUsername=false;
      }
      if(this.mdp==''){
        this.noMdp = true;
      }else{
        this.noMdp=false;
      }
    },

    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
      this.popupNoUser =false;
    }
  }
};
</script>
