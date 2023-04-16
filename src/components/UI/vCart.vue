<template>
	<div class="cart" v-if="isModalDialog">
		<div v-for="item in cartItems">
			{{ item.title }}
		</div>
	</div>
</template>
<script>
export default {
	name: 'vCart',
  computed: {
    cartItems() {
      return this.$store.getters.isCarts;
    },
  },
	props: {
		isModalDialog: {
			type: Boolean,
      required: true,
		}
	}
}
</script>
<style lang="scss" scoped>
	
</style>