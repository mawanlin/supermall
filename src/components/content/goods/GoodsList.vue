<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item.id" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: Array,
    default() {
      return [];
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  /* 包裹 */
  flex-wrap: wrap;
  /* 均等分 */
  justify-content: space-around;
  padding: 2px;
}
</style>
