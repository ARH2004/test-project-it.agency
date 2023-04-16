<template>
  <div class="cardsProduct">
    <div class="cardsProduct__item" v-for="item in arrInfo" :key="item.id">
      <vCard :item="item" />
    </div>
  </div>
</template>
<script>
import vCard from "@/components/UI/vCard.vue";
export default {
  name: "vCardsProduct",
  components: {
    vCard,
  },
	props: {
		arrInfo: {
			type: Array,
      required: true,
		}
	},
  data() {
    return {
    };
  },
  mounted() {
    this.$emit("array-length", this.arrInfo.length);
  },
};
</script>
<style lang="scss" scoped>
.cardsProduct {
  display: flex;
  flex-wrap: wrap;
}
</style>
