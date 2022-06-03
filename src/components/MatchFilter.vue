<template>
  <div class="filter-container">
    <div
      class="filter-group"
      v-for="filter_group in getFilterGroups()"
      :key="filter_group"
    >
      <div
        class="filters"
        v-for="filter in filters[filter_group]"
        :key="filter.name"
        @click="selectFilter(filter_group, filter)"
      >
        <div
          class="filter"
          :class="getSelectedClass(filter_group, filter.name)"
        >
          {{ filter.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "MatchFilter",
  props: {
    matches: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedFilter: {
        schedule: ["upcoming"],
        home: [],
        series: []
      },
      filters: {
        schedule: [
          {
            name: "upcoming",
            value: "Upcoming",
          },
          {
            name: "past",
            value: "Past",
          },
        ],
        home: [
          {
            name: "home",
            value: "Home",
          },
          {
            name: "away",
            value: "Away",
          },
        ],
        series: [],
      },
    };
  },
  methods: {
    getFilterGroups() {
      return Object.keys(this.filters);
    },
    selectFilter(filter_group, filter) {
      if (this.selectedFilter[filter_group].includes(filter.name)) {
        this.selectedFilter[filter_group] = this.selectedFilter[filter_group].filter(item => item !== filter.name);
      } else {
        this.selectedFilter[filter_group].push(filter.name);
      }
      this.$emit("filter", this.selectedFilter);
    },
    getSelectedClass(filter_group, filter) {
      if (this.selectedFilter[filter_group] === undefined) {
        return "";
      }
      return {
        selected: this.selectedFilter[filter_group].includes(filter),
      };
    },
  },
  mounted() {
    const series = [];
    this.matches.forEach((match) => {
      if (match.getSeries()) {
        if (!series.includes(match.getSeries())) {
          series.push(match.getSeries());
        }
      }
    });
    this.filters.series = series.map((series) => ({
      name: series,
      value: series,
    }));
  },
});
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.filter-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 2em;
  flex-wrap: wrap;
}
.filter {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  margin: 0 0.5em;
  font-size: 2vmin;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  color: black;
  background-color: #fff;
  cursor: pointer;
}
.selected {
  color: white;
  background-color: black;
}
</style>