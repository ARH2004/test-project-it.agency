<template>
	<div class="cardsProduct">
		<vCard/>
		<vCard/>
		<vCard/>
		<vCard/>
		<vCard/>
		<vCard/>
		<vCard/>
	</div>
</template>
<script>
import vCard from '@/components/UI/vCard.vue';
export default {
	name: 'vCardsProduct',
	components: {
		vCard,
	}
}
</script>
<style lang="scss" scoped>
.cardsProduct {
	display: flex;
	flex-wrap: wrap;
}
</style>