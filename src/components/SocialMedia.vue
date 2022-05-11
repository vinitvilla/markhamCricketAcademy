<template>
  <div class="social-media">
    <div
      v-for="app in sm"
      class="app-img-wrapper"
      :key="app.name"
      :style="
        app.set_icon == app.icon_b
          ? { backgroundColor: app.bg }
          : { backgroundColor: '', cursor: 'pointer' }
      "
      @mouseover="app.set_icon = app.icon_c"
      @mouseleave="app.set_icon = app.icon_b"
      @click="gotoURL(app.url)"
    >
      <img class="app-img" :src="app.set_icon" />
    </div>
  </div>
</template>

<script>
import facebookWhite from "./../assets/icons/facebook-white.svg";
import facebookColor from "./../assets/icons/facebook-color.svg";
import instagramWhite from "./../assets/icons/instagram-white.svg";
import instagramColor from "./../assets/icons/instagram-color.svg";
import youtubeWhite from "./../assets/icons/youtube-white.svg";
import youtubeColor from "./../assets/icons/youtube-color.svg";

export default {
  name: "Social Media",
  components: {},
  data() {
    return {
      sm: [
        {
          name: "FaceBook",
          url: "https://www.facebook.com/MarkhamCricketAcademy/",
          bg: "#4460A0",
          icon_b: facebookWhite,
          icon_c: facebookColor,
          set_icon: facebookWhite,
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/markham_cricket/?hl=en",
          bg: "#E4405F",
          icon_b: instagramWhite,
          icon_c: instagramColor,
          set_icon: instagramWhite,
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/channel/UCHHiL9q2VdlJNGSyAhsr6Vg",
          bg: "#FF0000",
          icon_b: youtubeWhite,
          icon_c: youtubeColor,
          set_icon: youtubeWhite,
        },
      ],
    };
  },
  methods: {
    mouseOver(app) {
      app.set_icon = app.icon_c;
    },
    mouseLeave(app) {
      app.set_icon = app.icon_b;
    },
    gotoURL(url) {
        window.open(url);
    }
  },
};
</script>

<style scoped lang="scss">
.social-media {
  display: flex;
  width: 100%;
  height: 30vh;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem 0;
}
.app-img-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-img {
  height: 4rem;
  width: 4rem;
}
</style>