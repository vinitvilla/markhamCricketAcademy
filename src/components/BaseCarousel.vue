<template>
  <div class="carousel">
    <img class="image" :src="imagePath" />
  </div>
</template>

<script lang="ts">
import image from "@/assets/images/group1.jpg";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCarousel",
  data() {
    return {
      url: "",
      imagePath: image,
    };
  },
});
</script>

<style scoped lang="scss">
.carousel {
  margin-top: 0.1em;
  width: 100%;
  height: 100vh;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
