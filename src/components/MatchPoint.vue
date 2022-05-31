<template>
  <div class="matches-container">
    <MatchFilter :matches="getSortedMatches" @filter="getFilters" />
    <div class="match-card-wrapper">
      <MatchCard
        v-for="match in getSortedMatches"
        :key="match.id"
        :match="match"
      />
    </div>
  </div>
</template>

<script>
import getMatchesList from "@/service/matches";
import MatchCard from "./MatchCard.vue";
import MatchFilter from "./MatchFilter.vue";

export default {
  name: "MatchPoint",
  data() {
    return {
      selectedFilter: {
        schedule: ["upcoming"],
        home: [],
        series: [],
      },
    };
  },
  computed: {
    getSortedMatches() {
      return this.applyFilter().sort((a, b) => a.getDate() - b.getDate());
    },
  },
  methods: {
    getFilters(selected_filters) {
      this.selectedFilter = selected_filters;
      console.log(this.selectedFilter);
    },
    applyFilter() {
      const filteredList = getMatchesList().filter((match) => {
        return (
          this.checkFilterForSchedule(match) &&
          this.checkFilterForHome(match) &&
          this.checkFilterForSeries(match)
        );
      });
      console.log(filteredList);
      return filteredList;
    },
    checkFilterForSchedule(match) {
      const { schedule } = this.selectedFilter;
      if (schedule.length > 0) {
        if (schedule.includes("upcoming")) {
          return match.getDate() > new Date();
        } else if (schedule.includes("past")) {
          return match.getDate() < new Date();
        }
      }
      return true;
    },
    checkFilterForHome(match) {
      const { home } = this.selectedFilter;
      if (home.length > 0) {
        if (home.includes("home")) {
          return match.isHomeMatch();
        } else if (home.includes("away")) {
          return !match.isHomeMatch();
        }
      }
      return true;
    },
    checkFilterForSeries(match) {
      const { series } = this.selectedFilter;
      if (series.length > 0) {
        return (series.includes(match.getSeries()));
      }
      return true;
    },
  },
  components: {
    MatchCard,
    MatchFilter,
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
