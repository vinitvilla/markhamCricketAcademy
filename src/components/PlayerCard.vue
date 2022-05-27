<template>
  <div class="player">
    <img class="player-img" :src="getImageUrl" />
    <span class="player-hand-wrapper">
      <label class="player-hand">{{ role }}</label>
    </span>
    <div class="player-name">{{ fullName }}</div>
  </div> 
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "PlayerCard",
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "Right hand batsman",
    },
    imgUrl: {
      type: String,
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    getImageUrl() {
      const img = this.imgUrl ? this.imgUrl : 'default.jpg';
      return new URL(`../assets/images/${img}`, import.meta.url).href
    }
  },
});
</script>

<style scoped lang="scss">
.player {
  position: relative;
  width: 20em;
  height: 24em;
  color: white;
  margin: 10px 0;
  cursor: pointer;

  /* flex box */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  flex: none;

  /* Background */
  background-color: rgba(249, 97, 103, 1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1);
}

.player-img {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 90%;
  object-fit: cover;
}

.player-hand-wrapper {
  z-index: 2;
  height: 4em;
  visibility: hidden;
  transition: 0.1s;
  transform: translateY(-100%);
  font-size: 18px;
  width: 100%;
}

.player:hover .player-hand-wrapper {
  visibility: visible;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
  transform: translateY(0);
}

.player:hover .player-hand {
  padding: 0.5em;
}

.player-name {
  z-index: 3;
  font-size: 1.4rem;
  padding: 0.5em;
  font-weight: bolder;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #ee7752, #e73c7e);
}
</style>
