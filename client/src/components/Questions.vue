<template>
  <div>
    <Cards />
  </div>
</template>

<script>
import Cards from './Cards.vue';

export default {
  name: 'Questions',
  components: {
    Cards,
  },
  props: {
    msg: String,
  },
};
</script>
