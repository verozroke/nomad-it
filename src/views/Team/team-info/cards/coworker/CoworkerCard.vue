<template>
    <v-card color="#000" theme="dark" class="coworker-card">
        <v-avatar   class="m-0" size="312" rounded="0">
            <v-img
                src="https://pbs.twimg.com/profile_images/1457446625308299270/I9zCbM6S_400x400.jpg"
            ></v-img>
        </v-avatar>
        <div class="coworker-card__info">
            <h2>{{ title }}</h2>
            <div class="coworker-card__subtitle">{{ jobPosition }}</div>
            <div class="coworker-card__text">
                {{ text }}
            </div>
        </div>
    </v-card>
</template>

<script setup>

const props = defineProps({
    title: String,
    jobPosition: String,
    text: String,
    link: String,
    imagePath: String,
})

</script>

<style lang="scss" scoped>


.coworker-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px 30px 30px;
    width: 312px;
    &__info {
        width: 100%;
        padding: 10px 0;
        font-family: 'FuturaBookC';
        display: flex;
        flex-direction: column;
        & h2{
            font-size: 32px;
            line-height: 1.2em;
        }

    }
    &__subtitle {
        font-size: 28px;
        color: #ffffff90;
        margin: 0 0 1em 0;
    }
    &__text {
        font-size: 18px;
    }
}

</style>