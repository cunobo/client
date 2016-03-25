<template>
  <question></question>
  <editor></editor>
</template>

<script>
import Question from './Question.vue'
import Editor from './Editor.vue'

export default {
  components: {
    'question': Question,
    'editor': Editor
  }
}
</script>
