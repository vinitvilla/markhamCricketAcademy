<template>
  <div class="card">
    <div class="card_title">
      <h1>{{ match.getSeries() }}</h1>
      <p id="match_type">{{ match.getType() }}</p>
    </div>
    <div class="match_info">
      <div class="team_name">
        <div class="team team1">
          <img :src="match.isHome ? teamMCA.getImgUrl(): match.getOpponentTeam().getImgUrl()" :alt="match.team1" />
          <h4>{{ match.isHome ? teamMCA.getName() : match.getOpponentTeam().getName() }}</h4>
        </div>
        <div class="team team2">
          <img :src="!match.isHome ? teamMCA.getImgUrl(): match.getOpponentTeam().getImgUrl()" :alt="match.team2" />
          <h4>{{ !match.isHome ? teamMCA.getName() : match.getOpponentTeam().getName()  }}</h4>
        </div>
      </div>

      <div class="vs">vs</div>
      <div class="date_time">
        <p>{{ getFormattedDate() }}</p>
        <p>{{ getFormattedTime() }}</p>
        <h3>{{ match.getVenue()}}</h3>
      </div>
    </div>
    <div class="result">
      {{ formattedResult() }}
    </div>
  </div>
</template>

<script>
import { TEAM_MCA } from '@/constant';
import { Team } from '@/model/teams';

export default {
  name: "MatchCard",
  components: {
  },
  props: {
    match: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      teamMCA: new Team(TEAM_MCA.name, TEAM_MCA.imgUrl),
    };
  },
  computed: {
    
  },
  methods: {
    formattedResult() {
      return this.match.getResult();
    },
    getFormattedDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return this.match.getDate().toLocaleDateString('en-US', options);
    },
    getFormattedTime() {
      const options = { hour: 'numeric', minute: 'numeric' };
      return this.match.getDate().toLocaleTimeString('en-US', options);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 0.8em;
  margin: 0.8em;
  background: white;
  h1 {
    font-size: 1.2em;
  }
}
.match_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  width: 24em;
}
.card_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
}
.team {
  display: flex;
  align-items: center;
  img {
    height: 3em;
    width: 3em;
    margin-right: 0.5em;
    border-radius: 50%;
  }
}
.vs {
  background-color: #c7c6cb;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding: 2px 5px;
    flex: 0 0;
    text-align: center;
    color: white;
  }
}
.result {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1em;
  background-color: black;
  color: white;
  border-radius: 0 0 0.8em 0.8em;
}
</style>
