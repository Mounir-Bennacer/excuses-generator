<template>
  <div class="home">
    <Questions />
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import Questions from '../components/Questions.vue';

export default {
  name: 'Home',
  components: {
    Questions,
  },
  setup() {
    let allIntros = ref([]);
    let getIntro = ref('');

    async function fetcheIntro(id) {
      await axios
        .get(`intro/get/${id}`)
        .then(({ data }) => {
          allIntros = data;
        })
        .catch(({ error }) => {
          console.log(error);
        });
    }

    async function fetcheIntros() {
      await axios
        .get('intro/get')
        .then(({ data }) => {
          intros = data.data;
        })
        .catch(({ error }) => {
          console.log(error);
        });
    }

    async function deleteIntro(id) {
      await axios
        .delete(`intro/delete/${id}`)
        .then(({ data }) => {
          console.log('deleted successfully');
        })
        .catch(({ error }) => {
          console.log(error);
        });
    }

    return {
      allIntros,
      getIntro,
    };
  },
};
</script>
