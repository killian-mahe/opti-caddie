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
          <SimpleButton name="Open camera"></SimpleButton>
        </span>
        <span v-else>
          <SimpleButton name="Close camera"></SimpleButton>
        </span>
    </div>
  </div>
  
  <div v-show="isCameraOpen && isLoading" class="camera-loading">
    <ul class="loader-circle">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  
  <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
    
    <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
      
    <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>
    
    <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
  </div>
  
  <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
    <button type="button" class="button" @click="takePhoto">
      <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
    </button>
  </div>
  
  <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
    <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
      Download
    </a>
  </div>
</div>

 
  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton.vue";
export default {
  name: "Scan",
  components: {
    SimpleButton,
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
