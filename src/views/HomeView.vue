<template>
  <div class="mainView">
    <vHeader msg="Welcome to Your Vue.js App"/>
		<vSlider></vSlider>
  </div>
</template>

<script>
// @ is an alias to /src
import vHeader from '@/components/vHeader'
import vSlider from '@/components/vSlider';

export default {
  name: 'HomeView',
  components: {
    vHeader,
		vSlider
  }
}
</script>
