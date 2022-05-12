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
      <router-link class="router-link" to="/join-club">Join the Club</router-link>
      <router-link class="router-link" to="/contact">Contact</router-link>
    </div>
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
	width: 50px;
	height: 50px;
}
.nav {
	position: sticky;
	width: 100%;
  top: 0;
	height: 4em;
	color: silver;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #ee7752, #e73c7e);
  background-size: 400% 400%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	display: flex;
	flex-direction: row;
	align-items: center;
	text-transform: uppercase;
	z-index: 2;
	>* {
		height: 100%;
		padding: 0.8rem;
		display: flex;
		align-content: center;
		align-items: center;
		font-size: 2vmin;
	}
}
.router-link {
	height: 100%;
	display: flex;
	align-items: center;
	color: white;
	text-decoration: none;
	padding: 0 0.3em;
  transition: all 0.5s;
	&:after {
		content: "";
		border-right: 3px solid silver;
	}
	&:hover {
    border-radius: 10%;
    height: 75%;
    background: black;
    color:  white;
	}
}
.logo_group {
	width: 10%;
  cursor: pointer;
}
.links_group {
	justify-content: flex-end;
	width: 90%;
}

</style>
