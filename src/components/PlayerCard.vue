<template>
  <div class="player" :style="backgroundImage">
    <div class="player-hand-wrapper">
      <label class="player-hand">{{ role }}</label>
    </div>
    <div class="player-name">{{ fullName }}</div>
  </div>
</template>

<script>
export default {
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
    backgroundImage() {
      return `background-image: url(src/assets/images/${this.imgUrl})`;
    },
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
};
</script>

<style scoped lang="scss">
.player {
  width: 20em;
  height: 24em;
  color: white;
  margin: 10px 0;

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

.player:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.player-hand-wrapper {
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
  font-size: 1.4rem;
  padding: 0.5em;
}
</style>
