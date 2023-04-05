<template>
  <div class="mainView">
    <vHeader msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import vHeader from '@/components/vHeader'

export default {
  name: 'HomeView',
  components: {
    vHeader
  }
}
</script>
