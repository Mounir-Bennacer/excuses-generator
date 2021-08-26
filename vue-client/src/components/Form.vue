<template>
    <div class="my-2 flex justify-between">
      <form ref="form" class="w-2/3">
        <Input />
        <Dropdown />
        <Button />
      </form>
    </div>
</template>
<script>
import Input from '@/components/Input.vue'
import Dropdown from '@/components/Dropdown.vue'
import Button from '@/components/Button.vue'

  export default {
    name: 'Form',
    components: {
      Input,
      Dropdown,
      Button,
    },
  }
</script>
