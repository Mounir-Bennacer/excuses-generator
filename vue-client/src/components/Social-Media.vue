<template>
  <social-media-card title="facebook" />
  <social-media-card title="twitter" />
  <social-media-card title="github" />
</template>

<script>
import SocialMediaCard from '@/components/SocialMediaCard.vue';

export default {
  name: 'SocialMedia',
  components: {
    SocialMediaCard
  }
};
</script>
