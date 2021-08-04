<template>
  <div class="home">
    <button @click="fetchData" class="bg-red-400 py-2 px-3 text-white rounded-md hover:bg-red-300">Fetch</button>
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
  methods: {
    fetchData: () => {
      axios.get('http://localhost:8800/intro/get',{headers: {'Access-Control-Allow-Origin': '*'}}).then( (req, res) => {
        console.log(res.data)
      })
    }
  }
}
</script>
