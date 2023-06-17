<template>
    <div class="info" id="team-info">
        <div class="info__container">
            <div class="info__title">Команда</div>
            <TeamInfoCards />
        </div>
    </div>
</template>

<script setup>
import TeamInfoCards from './cards/TeamInfoCards.vue';
</script>

<style lang="scss" scoped>

.info {
    padding: 20px 0;
    &__container {
        padding-top: 50px;
        align-items: center;
        font-family: 'FuturaDemiC';
        color:#000;
        gap: 2em;
        display: flex;
        flex-direction: column;
    }
    &__title {
        text-align: center;
        font-size: 50px;
    }
}

</style>