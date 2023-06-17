<template>
    <div class="team">
        <TeamHero/>
        <TeamAboutUs/>
        <TeamInfo/>
        <!-- TeamHero -->
        <!-- TeamTitle -->
    </div>
</template>

<script setup>
import TeamHero from './team-hero/TeamHero.vue';
import TeamInfo from './team-info/TeamInfo.vue'
import TeamAboutUs from './team-about-us/TeamAboutUs.vue'
import { onMounted } from 'vue'

onMounted(() =>{
    window.scrollTo(0, 0)
})

</script>

<style lang="scss" scoped>
.team {
    display: flex;
    flex-direction: column;
}
</style>