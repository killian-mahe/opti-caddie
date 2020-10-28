<template>
  <div class="edit">
    <div id="all-products">
      <AllProducts @update-list="update_list"></AllProducts>
    </div>
    <div id="current-list">
      <EditedList @update-list="update_list"></EditedList>
    </div>
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
import AllProducts from "../components/AllProducts";
import { mapState, mapActions } from "vuex";

export default {
  name: "ListEdit",
  components: {
    EditedList,
    AllProducts,
  },

  computed: {
    ...mapState(["session", "shopping_lists"]),
  },

  methods: {
    ...mapActions(["updateItemQuantityInList"]),

    update_list(payload) {
      if (this.session.shopping_list.products) {
        let list_id = this.$route.params.list_id;

        this.updateItemQuantityInList({
          product_id: payload.product_id,
          list_id,
          amount: payload.amount,
        });
      }
    },
  },
};
</script>
