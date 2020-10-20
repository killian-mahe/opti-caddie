<template>
    <div class="Popup-backdrop ">
      <div class="Popup pl-6 pr-6 pt-2 pb-2 text-4xl rounded-lg font-quicksand grid grid-rows-2" role="dialog">
        <div class="self-center pl-5">
              {{title}}
        </div>
        <div class="grid grid-cols-3">
            <button type="button" class="btn-close px-0 bg-leclercOrange rounded-lg text-2xl mt-4 pr-2 pl-2 font-quicksand col-start-2" @click="close" aria-label="Close Popup">
              Fermer
            </button>
        </div>
          
      </div>
      
    </div>
</template>


<script>
  export default {
    name: 'Popup',
    methods: {
      close() {
        this.$emit('close');
      },
    },
    components: {
    },
    props: [
        "title",
    ]
    
  };
</script>

<style>

  .Popup-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Popup {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .Popup-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
</style>