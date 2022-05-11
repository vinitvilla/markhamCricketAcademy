<template>
  <div class="home">
    <Carousel />
    <Matches />
    <div class="container">
      <player-card
        v-for="playerId in Object.keys(players)"
        :key="playerId"
        :name="players[playerId].name"
        :imgUrl="players[playerId].imgUrl"
      />
    </div>
    <SocialMedia />
    <Footer />
  </div>
</template>

<script lang="ts">
import Carousel from "@/components/Carousel.vue";
import PlayerCard from "@/components/PlayerCard.vue";
import Footer from "@/components/Footer.vue"
import SocialMedia from "../components/SocialMedia.vue";

import players from "@/assets/data/players.json";
import Matches from "../components/Matches.vue";
export default {
  name: "Home",
  components: {
    Carousel,
    PlayerCard,
    Footer,
    SocialMedia,
    Matches
},
  data() {
    return {
      players: players,
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  flex-direction: row;
}
</style>