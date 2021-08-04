<template>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card />
  </div>
</template>
<script>
import Card from '@/components/Card.vue'

  export default {
    name: 'Cards',
    components: {
      Card
    }
  }
</script>
