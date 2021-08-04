<template>
<div>
  <Card />
</div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Questions',
  components: {
    Card
  },
  props: {
    msg: String
  }
}
</script>
