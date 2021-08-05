<template>
  <div class="home">
    <Questions />
  </div>
</template>

<script>
import axios from 'axios'
import Questions from '@/components/Questions.vue'

export default {
  name: 'Home',
  components: {
    Questions
  },
  methods: {},
}
</script>
