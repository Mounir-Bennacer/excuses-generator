<template>
        <div
        class="flex justify-center py-4 px-8 mb-2 rounded-md cursor-pointer"
        :class="[selected ? `${color} bg-opacity-100 shadow-md` : color]"
        >
          <p class="font-medium text-xl"
          :class="[ selected ? 'text-white' : 'text-gray-700']"
          >
          {{ title }}
          </p>
        </div>
</template>

<script lang="ts">
import { mapState, mapGetters} from 'vuex'

export default{
  name: 'Card',
  data() {
    return {}
  },
  props: {
    title: {
      type: String
    },
    color: {
      type: String
    },
    selected: {
      type: Boolean
    }
  },
  methods: {}
}
</script>
