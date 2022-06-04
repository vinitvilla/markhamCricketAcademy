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
    },
    applyFilter() {
      const filteredList = getMatchesList().filter((match) => {
        return (
          this.checkFilterForSchedule(match) &&
          this.checkFilterForHome(match) &&
          this.checkFilterForSeries(match)
        );
      });
      return filteredList;
    },
    checkFilterForSchedule(match) {
      const { schedule } = this.selectedFilter;
      if (schedule.length > 0) {
        if (match.getDate() > Date.now() && schedule.includes("upcoming")) {
          return true;
        } else if (match.getDate() < Date.now() && schedule.includes("past")) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    },
    checkFilterForHome(match) {
      const { home } = this.selectedFilter;
      if (home.length > 0) {
        if (match.isHomeMatch() && home.includes("home")) {
          return true;
        } else if (!match.isHomeMatch() && home.includes("away")) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    },
    checkFilterForSeries(match) {
      const { series } = this.selectedFilter;
      if (series.length > 0) {
        return series.includes(match.getSeries());
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
    height: 8vh;
    margin: 0.5em 0 0.5em 0;
}
</style>
