<template>
	<div class="cart" >
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
}
</script>
<style lang="scss" scoped>
	
</style>