<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Graduate&display=swap");
body {
  margin: 0;
  font-family: "Graduate", cursive;
}

::-webkit-scrollbar {
  width: 15px;
  height: 5px;
  color: black;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(255, 0, 0, 0.9);
}
</style>
