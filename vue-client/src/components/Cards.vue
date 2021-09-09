<template>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1
            class="text-center text-5xl font-extrabold uppercase text-gray-900 tracking-wider"
        >
            Canceling plans excuse generator
        </h1>
        <button
            @click="shuffleExcuse"
            class="uppercase bg-blue-600 w-full mt-6 px-5 py-5 font-semibold text-white rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg"
        >
            Generate excuse
        </button>
        <div>
            <span id="intro"></span>
            <span id="scapegoat"></span>
            <span id="delay"></span>
            <h1
                v-if="excuse"
                class="mt-10 py-5 font-semibold bg-gray-200 text-2xl text-gray-700 rounded-md"
            >
                {{ excuse }}
            </h1>
        </div>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
            <div class="my-2 lg:mt-8">
                <h3
                    class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"
                >
                    Choose an intro
                </h3>
                <!-- <teleport to="#intro"> -->
                <Card
                    v-for="intro in intros"
                    :key="intro._id"
                    :title="intro.title"
                    :selected="selectedIntro === intro._id"
                    @click.passive="
                        $store.commit('excuse/selectIntro', intro._id)
                    "
                    :color="'bg-green-400 bg-opacity-70'"
                />
                <!-- </teleport> -->
            </div>
            <div class="mt-6 lg:mt-8">
                <h3
                    class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"
                >
                    Choose a scapegoat
                </h3>
                <Card
                    v-for="scapegoat in scapegoats"
                    :key="scapegoat._id"
                    :title="scapegoat.title"
                    :selected="selectedScapegoat === scapegoat._id"
                    @click.passive="
                        $store.commit('excuse/selectScapegoat', scapegoat._id)
                    "
                    :color="'bg-yellow-400 bg-opacity-70'"
                />
            </div>
            <div class="mt-6 lg:mt-8">
                <h3
                    class="text-center text-2xl font-semibold uppercase text-gray-700 tracking-wider mb-4"
                >
                    Choose a delay
                </h3>
                <Card
                    v-for="delay in delays"
                    :key="delay._id"
                    :title="delay.title"
                    :selected="selectedDelay === delay._id"
                    @click.passive="
                        $store.commit('excuse/selectDelay', delay._id)
                    "
                    :color="'bg-blue-400 bg-opacity-70'"
                />
            </div>
        </div>
    </div>
</template>
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
        ...mapState('excuse', [
            'selectedIntro',
            'selectedScapegoat',
            'selectedDelay',
            'excuse',
            'intros',
            'delays',
            'scapegoats',
        ]),
        ...mapGetters('excuse', ['shuffleExcuse']),
    },
    mounted() {},
}
</script>
