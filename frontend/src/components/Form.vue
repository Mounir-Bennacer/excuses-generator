<template>
  <div>
    <div class="my-2 flex justify-between">
      <Input />
      <Button />
    </div>
  </div>
</template>
<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

  export default {
    name: 'Form',
    components: {
      Input,
      Button,
    },
  }
</script>
