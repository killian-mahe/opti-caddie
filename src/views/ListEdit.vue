<template>
  <div class="edit">
    <div id="all-products">
      <AllProducts @update-list="update_list" v-model="listName"></AllProducts>
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
    ...mapState(["shopping_lists"]),
    listName: {
      get() {
        return this.shopping_lists.find(list => list.id == this.$route.params.list_id).name;
      },
      set(val) {
        this.updateListName({
          list_id: this.$route.params.list_id,
          list_name: val
        });
      }
    }
  },

  methods: {
    ...mapActions(["updateItemQuantityInList", 'updateListName']),

    update_list(payload) {
      let list_id = this.$route.params.list_id;

      this.updateItemQuantityInList({
        product_id: payload.product_id,
        list_id,
        amount: payload.amount,
      });
    },
  },
};
</script>
