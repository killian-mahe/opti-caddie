<template>
  <div class="edit">
    <div id="all-products"></div>
    <div id="current-list"><EditedList></EditedList></div>
  </div>
</template>

<style scoped lang="scss">
.edit {
  @apply h-full;
  @apply w-full;

  #all-products {
    @apply bg-leclercBlue;
    @apply h-full;
    width: 75%;
    float: left;
  }

  #current-list {
    @apply bg-leclercOrange;
    @apply h-full;
    width: 25%;
    float: right;
  }
}
</style>

<script>
import EditedList from "../components/EditedList";

export default {
  name: "ListEdit",
  components: {
    EditedList,
  },
};
</script>
