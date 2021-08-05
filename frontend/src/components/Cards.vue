<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 class="text-center text-5xl font-extrabold uppercase text-gray-900 tracking-wider"> Canceling plans excuse generator </h1>
      <div class="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
        <div class="my-2 lg:mt-8">
        <h3 class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"> Choose an intro </h3>
          <Form />
          <Card v-for="(card, index) in 10" :key="index" :class="red"/>
        </div>
        <div class="mt-6 lg:mt-8">
        <h3 class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"> Choose a scapegoat </h3>
          <Form />
          <Card v-for="(card, index) in 10" :key="index"/>
        </div>
        <div class="mt-6 lg:mt-8">
        <h3 class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"> Choose a delay </h3>
          <Form />
          <Card v-for="(card, index) in 10" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>>
<script>
import Card from '@/components/Card.vue'
import Form from '@/components/Form.vue'

  export default {
    name: 'Cards',
    components: {
      Card,
      Form,
    }
  }
</script>
