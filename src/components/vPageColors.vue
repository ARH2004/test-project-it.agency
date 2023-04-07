<template>
	<div class="pageColors">
		<vSlider/>
		<div class="wrapper">
			<vCard/>
			<div v-for="item in arrSel" :key="item.id">
				<vSelectors :initialState="item.stateSel" :text="item.text"/>
			</div>
		</div>
	</div>
</template>
<script>
import vSlider from '@/components/UI/vSlider.vue'
import vSelectors from '@/components/UI/vSelectors.vue'
import vCard from '@/components/UI/vCard.vue';

export default {
	name: 'vPageColor',
	components: {
		vSlider,
		vSelectors,
		vCard,
	},
	data() {
		return {
			arrSel: [
				{id: Date.now(), stateSel: false, text: 'Новинки'},
				{id: Date.now(), stateSel: false, text: 'Есть в наличии'},
				{id: Date.now(), stateSel: false, text: 'Контрактные'},
				{id: Date.now(), stateSel: false, text: 'Эксклюзивные'},
				{id: Date.now(), stateSel: false, text: 'Распродажа'},
			]
		}
	}
}
</script>
<style lang="scss" scoped>
.wrapper{
	display: flex;
}	
</style>