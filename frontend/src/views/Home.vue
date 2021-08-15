<template>
  <div class="home">
    <Questions />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Questions from '@/components/Questions.vue'

export default {
  name: 'Home',
  components: {
    Questions
  },
  setup() {
    const allIntros = ref([]);
    const getIntro = ref('');

    async function fetcheIntro (id) {
      await axios
        .get(`intro/get/${id}`)
        .then(({data}) => {
          allIntros = data
        }).catch(({error}) => {
          console.log(error)
        })
    };

    async function fetcheIntros () {
      await axios
        .get('intro/get')
        .then(({data}) => {
          intros = data.data
        }).catch(({error}) => {
          console.log(error)
        });
    }

    async function deleteIntro(id) {
      await axios
        .delete(`intro/delete/${id}`)
        .then(({data}) => {
          console.log('deleted successfully')
        }).catch(({error}) => {
          console.log(error)
        })
    };
    // onMounted( () => {
    //     console.log(allIntros,'hi')
    // })

    return {
      allIntros,
      getIntro
    }
  },
}
</script>
