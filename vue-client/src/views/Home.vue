<template>
    <div class="home">
        <Questions />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import store from '@/store'
import Questions from '@/components/Questions.vue'

name: 'Home', store.dispatch('excuse/init')
</script>
