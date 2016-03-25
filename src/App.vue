<template>
	<div class="main">
    <title-bar :current-user="currentUser"></title-bar>
	</div>
  <div class="container">
    <router-view :current-user="currentUser"></router-view>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue'

export default {
  components: {
    'title-bar': TitleBar
  },
  data () {
    return {
      currentUser: ''
    }
  }
}
</script>

<style lang="scss">
$background-color: #EFF4F9;
$medium-color: #797A9E;
$font-stack: 'Helvetica Neue', Helvetica, Arial, sans-serif;

body {
  background-color: $background-color;
}

.app-title-font {
  font-family: $font-stack;
  font-size: 20pt;
  font-weight: 600;
  color: $medium-color;
  letter-spacing: 0.8px;
}

</style>
