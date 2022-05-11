<template>
    <div class="matches-container">
        <MatchCard v-for="match in matches" :key="match.matchId" :match="match"/>
    </div>
</template>

<script>
import matches from '@/assets/data/matches.json'
import MatchCard from './MatchCard.vue'
export default {
    name: "Matches",
    data() {
        return {
            matches: matches
        };
    },
    components: { MatchCard }
}
</script>

<style>
.matches-container {
    display: flex;
    height: 40vh;
    width: 100%;
    overflow-x: auto;
    flex-direction: row;
}
</style>