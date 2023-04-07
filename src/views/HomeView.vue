<template>
  <div class="mainView">
		<div class="wrapper">
			<div>
    		<vHeader/>
				<vSlider/>
			</div>
			<vFooter/>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import vHeader from '@/components/vHeader.vue'
import vSlider from '@/components/vSlider.vue'
import vFooter from '@/components/vFooter.vue';

export default {
  name: 'HomeView',
  components: {
    vHeader,
		vSlider,
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