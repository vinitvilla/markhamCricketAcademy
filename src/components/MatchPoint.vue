<template>
  <div class="matches-container">
    <MatchFilter :matches="matches" @filter="getFilters"/>
    <div class="match-card-wrapper">
      <MatchCard v-for="match in matches" :key="match.id" :match="match" />
    </div>
  </div>
</template>

<script>
import getMatchesList from '@/service/matches';
import MatchCard from "./MatchCard.vue";
import MatchFilter from "./MatchFilter.vue";

export default {
  name: "MatchPoint",
  data() {
    return {
      selectedFilter: {}
    };
  },
  computed: {
    matches() {
      return getMatchesList().sort((a, b) => a.getDate() - b.getDate());
    },
  },
  methods: {
    getFilters(selected_filters){
      this.selectedFilter = selected_filters;
    },
  },
  components: { 
    MatchCard, 
    MatchFilter 
  },
};
</script>

<style>
.matches-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.match-card-wrapper {
  display: flex;
  overflow-x: auto;
  flex-direction: row;
}
.filters {
  width: 100%;
  height: 8vh;
  margin: 1em 1em 0 1em;
}
</style>
