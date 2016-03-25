<template>
	<div class="main">
    <title-bar :current-user="currentUser"></title-bar>
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
