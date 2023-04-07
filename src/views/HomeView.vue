<template>
  <div class="mainView">
		<div class="wrapper">
			<div>
    		<vHeader/>
				<vPageColors/>
			</div>
			<vFooter/>
		</div>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader.vue';
import vFooter from '@/components/vFooter.vue';
import vPageColors from '@/components/vPageColors.vue';
export default {
  name: 'HomeView',
  components: {
    vHeader,
		vPageColors,
		vFooter,
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>