<template>
  <div class="Scan">
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
    

<div id="app" class="web-camera-container">
  <div class="camera-button">
      <div :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
        <span v-if="!isCameraOpen">
          <SimpleButton name="Activez la webcam" class="max-w-xs ml-auto mr-auto"></SimpleButton>
        </span>
        <span v-else>
          <SimpleButton name="Désactivez la webcam" class="max-w-xs ml-auto mr-auto"></SimpleButton>
        </span>
    </div>
  </div>
  
  <div v-show="isCameraOpen && isLoading" class="camera-loading mt-6">
    <div class="inline pr-64"></div>
    <div class="inline mt-12 ml-20">Veuillez patientez, si vous ne voyez rien veuillez vérifier que vous avez bien activé votre webcam !</div>
  </div>
  
  <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
    
    <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
      
    <video ref="camera" :width="450" :height="337.5" autoplay class="ml-auto mr-auto pb-6 mt-6 rounded-lg"></video>
    <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
      <button type="button" class="h-16 w-16 flex items-center content-center ml-auto mr-auto" @click="takePhoto">
        <img src="../assets/camera.png">
      </button>
  </div>
    <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5" class=" ml-auto mr-auto rounded-lg"></canvas>
  </div>
  
  
  
  <div v-if="isPhotoTaken && isCameraOpen" class="camera-download mr-auto ml-auto">
    <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
      <SimpleButton name="Télécharger" class="mt-4 max-w-xs ml-auto mr-auto"></SimpleButton>
    </a>
    
  </div>
</div>

 
  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton.vue";
import feather from "feather-icons";
export default {
  name: "Scan",
  components: {
    SimpleButton,
  },
  mounted(){
      feather.replace()
  },
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#'
    }
  },
  
  methods: {
    toggleCamera() {
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    
    createCameraElement() {
      this.isLoading = true;
      
      const constraints = (window.constraints = {
                audio: false,
                video: true
            });


            navigator.mediaDevices
                .getUserMedia(constraints)
                .then(stream => {
          this.isLoading = false;
                    this.$refs.camera.srcObject = stream;
                })
    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

            tracks.forEach(track => {
                track.stop();
            });
    },
    
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      
      this.isPhotoTaken = !this.isPhotoTaken;
      
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },
    
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
    .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
  }
};
</script>
