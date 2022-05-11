<template>
  <div class="nav">
    <div class="logo_group" @click="routeToHome">
      <img
        class="logo-img"
        src="https://cricclubs.com/documentsRep/teamLogos/751e1d28-460e-4403-99cc-415b98e2819a.jpeg"
      />
    </div>
    <div class="links_group">
      <router-link class="router-link" to="/about">About US</router-link>
      <router-link class="router-link" to="/news">Latest News</router-link>
      <router-link class="router-link" to="/team">Team</router-link>
      <router-link class="router-link" to="/join-club"
        >Join the Club</router-link
      >
      <router-link class="router-link" to="/contact">Contact</router-link>
    </div>
    <div class="profile_group">Profile</div>
  </div>
</template>

<script>
// import router from "@/router";
export default {
  name: "NavBar",
  methods: {
    routeToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Graduate&display=swap");

.logo-img {
  width: 60px;
  height: 60px;
}
.nav {
  position: sticky;
  top: 0.4em;
  width: 100%;
  height: 6em;
  color: silver;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  z-index: 2;
}
.nav > * {
  height: 100%;
  padding: 0.8rem;
  display: flex;
  align-content: center;
  align-items: center;
}
.router-link {
  height: 100%;
  display: flex;
  align-items: center;
  color: red;
  text-decoration: none;
  margin: 0 0.3em;
}
.router-link:after {
  content: "";
  border-right: 3px solid silver;
}
.router-link:hover {
  font-weight: bolder;
  color: silver;
}
.logo_group {
  width: 30%;
}

.links_group {
  width: 50%;
}

.profile_group {
  justify-content: flex-end;
  width: 20%;
}
</style>
