<template>
    <div class="sponsors-footer">
        <div class="sponsor" v-for="sponsor in sponsors" :key="sponsor.id">
            <div class="sponsor-footer__logo">
                <img :src="sponsor.logo" :alt="sponsor.name">
            </div>
            <div class="sponsor-footer__text">
                <p>{{ sponsor.text }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'SponsorFooter',
    props: {
        sponsors: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
.sponsors-footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}

.sponsor {
 margin: 0 3rem;
}

.sponsor-footer__logo {
    width: 200px;
    height: 200px;
    margin: 0 20px;
}

.sponsor-footer__logo img {
    width: 100%;
    height: 100%;
}

.sponsor-footer__text {
    width: 200px;
    margin: 0 20px;
}

</style>