<template>
  <div class="home">
    <Carousel />
    <Matches />
    <div class="container">
      <player-card
        v-for="[playerId, playerObj] in Object.entries(players)"
        :key="playerId"
        :name="playerObj.name"
        :imgUrl="playerObj.imgUrl"
      />
    </div>
    <SocialMedia />
    <Footer />
  </div>
</template>

<script lang="ts">
import Carousel from "@/components/PlayerCarousel.vue";
import PlayerCard from "@/components/PlayerCard.vue";
import Footer from "@/components/BaseFooter.vue";
import SocialMedia from "../components/SocialMedia.vue";

import players from "@/assets/data/players.json";
import Matches from "../components/MatchPoint.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeComponent",
  components: {
    Carousel,
    PlayerCard,
    Footer,
    SocialMedia,
    Matches,
  },
  data() {
    return {
      players: players,
    };
  },
});
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
