<template>
        <div
        :class="{notClicked: !isClicked, clicked: isClicked}"
        @click="toggleClick()"
        class="flex justify-center py-4 px-8 mb-2 bg-gray-300">
          <img class="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Workcation" />
        </div>
</template>

<script>

export default {
  name: 'Card',
  data() {
    return {
      isClicked: false,
    }
  },
  components: {
  },
  methods: {
    toggleClick(item){
      this.isClicked = !this.isClicked
      console.log(this.isClicked)
    }
  }
}
</script>
