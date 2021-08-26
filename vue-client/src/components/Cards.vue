<template>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 class="text-center text-5xl font-extrabold uppercase text-gray-900 tracking-wider"> Canceling plans excuse generator </h1>
      <button
      @click="generateExcuse()"
      class="uppercase bg-blue-600 w-full mt-6 px-5 py-5 font-semibold text-white rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg">Generate excuse</button>
      <div class="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
        <div class="my-2 lg:mt-8">
        <h3 class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"> Choose an intro </h3>
          <Card
          v-for="intro in $store.state.intros" :key="intro._id"
          :title="intro.title"
          :selected="selectedIntro === intro._id"
          :bgColor="'bg-red-400'"
          @click.prevent="selectedIntro = intro._id; selectItem(intro._id)"
          />
        </div>
        <div class="mt-6 lg:mt-8">
        <h3 class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"> Choose a scapegoat </h3>
          <Card v-for="scapegoat in $store.state.scapegoats"
          :key="scapegoat._id"
          :title="scapegoat.title"
          :selected="selectedScapegoat === scapegoat._id"
          :bgColor="'bg-yellow-400'"
          @click.prevent="selectedScapegoat = scapegoat._id"
          />
        </div>
        <div class="mt-6 lg:mt-8">
        <h3 class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"> Choose a delay </h3>
          <Card v-for="delay in $store.state.delays"
           :key="delay._id"
           :title="delay.title"
           :selected="selectedDelay === delay._id"
           :bgColor="'bg-blue-400'"
           @click.prevent="selectedDelay = delay._id"
          />
        </div>
      </div>
    </div>
</template>>
<script>
import Card from '@/components/Card.vue'
import { mapGetters } from 'vuex'

  export default {
    name: 'Cards',
    data() {
      return{
        selectedIntro: -1,
        selectedScapegoat: -1,
        selectedDelay: -1,
      }
    },
    components: {
      Card,
    },
    coomputed: {
      ...mapGetters(['selectItem'])
    }
  }
</script>
