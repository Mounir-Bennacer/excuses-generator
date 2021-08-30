<template>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 class="text-center text-5xl font-extrabold uppercase text-gray-900 tracking-wider"> Canceling plans excuse generator </h1>
      <button
      @click="$store.getters.shuffleExcuse"
      class="uppercase bg-blue-600 w-full mt-6 px-5 py-5 font-semibold text-white rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg">Generate excuse</button>
      <div>
      <loader :active="true" message="Loading, please wait..."/>
        <h1 v-if="$store.state.excuse" class="mt-10 py-5 font-semibold bg-gray-200 text-2xl text-gray-700 rounded-md">{{ $store.state.excuse }}</h1>
      </div>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
        <div class="my-2 lg:mt-8">
        <h3 class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"> Choose an intro </h3>
          <Card
          v-for="intro in $store.state.intros" :key="intro._id"
          :title="intro.title"
          :selected="$store.state.selectedIntro === intro._id"
          @click.passive="$store.state.selectedIntro = intro._id"
          :color="'bg-green-400 bg-opacity-70'"
          />
        </div>
        <div class="mt-6 lg:mt-8">
        <h3 class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"> Choose a scapegoat </h3>
          <Card v-for="scapegoat in $store.state.scapegoats"
          :key="scapegoat._id"
          :title="scapegoat.title"
          :selected="$store.state.selectedScapegoat === scapegoat._id"
          @click.passive="$store.state.selectedScapegoat = scapegoat._id"
          :color="'bg-yellow-400 bg-opacity-70'"
          />
        </div>
        <div class="mt-6 lg:mt-8">
        <h3 class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"> Choose a delay </h3>
          <Card v-for="delay in $store.state.delays"
           :key="delay._id"
           :title="delay.title"
           :selected="$store.state.selectedDelay === delay._id"
           @click.passive="$store.state.selectedDelay = delay._id"
          :color="'bg-blue-400 bg-opacity-70'"
          />
        </div>
      </div>
    </div>
</template>>
<script>
import Card from '@/components/Card.vue'
import Loader from '@/components/Loader'
import { mapGetters, mapState } from 'vuex'

  export default {
    name: 'Cards',
    components: {
      Card,
      Loader,
    },
    computed: {
      ...mapState(['selectedIntro', 'selectedScapegoat','selectedDelay']),
      ...mapGetters(['shuffleExcuse'])
    },
  }
</script>
