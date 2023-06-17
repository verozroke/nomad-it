<template>
    <div >
        <div class="card__title">{{ title }}</div>
        <div class="team-info__card">
            <CoworkerCard 
                v-for="(coworker, i) in coworkers"
                :key="i" 
                :title="coworker.title" 
                :jobPosition="coworker.jobPosition" 
                :text="coworker.text"
                :link="coworker.link"
                :imagePath="coworker.imagePath"
                class="coworker"
            />
        </div>
    </div>
</template>

<script setup>
import CoworkerCard from './coworker/CoworkerCard.vue';

const props = defineProps({
    title: String,
    coworkers: Array,
})

</script>

<style lang="scss" scoped>

.card {
    &__title {
        font-family: 'FuturaDemiC';
        color:#000;
        text-align: center;
        font-size: 30px;
        margin-bottom: 30px;
    }
}


.team-info__card {
    display: flex;
    gap: 2em;
}


.coworker {
    margin-bottom: 30px;
}

</style>