<template>
  <div class="carousel">
    <img class="image"
      :src="image" />
  </div>
</template>

<script lang="ts">
import image from '@/assets/images/group1.jpg'
export default {
  name: "Carousel",
  data() {
    return { url: "",
    image: image };
  },
};
</script>

<style scoped lang="scss">
.carousel {
  margin-top: 0.1em;
  width: 100%;
  height: 60vh;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
</style>