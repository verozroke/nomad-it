<template>
    <v-parallax id="team-about-us" src="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" class="about-us">
        <div class="about-us__overlay">
            <div class="about-us__container">
                <div class="about-us__title">О нас:</div>
                <div class="about-us__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam odit labore excepturi harum soluta mollitia tenetur impedit libero exercitationem.</div>
                <v-btn  @click="scrollDown('team-info')" variant="outlined">ПОЗНАКОМИТЬСЯ С НАШЕЙ КОМАНДОЙ</v-btn>
            </div>
        </div>
    </v-parallax>
</template>

<script setup>

function scrollDown(blockID) {
    const $block = document.getElementById(blockID)
    $block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

</script>

<style lang="scss" scoped>


.about-us {
    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #00000091;
        backdrop-filter: blur(5px);
    }
    height: 100vh;
    position: relative;


    &__container {
        font-family: 'FuturaBookC';
        color:#fff;
        height: 100%;
        width: 100%;
        gap: 2em;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    &__title {
        display: flex;
        gap: .5em;
        align-items: center;
        font-size: 58px;
    }
    &__text {
        width: 60%;
        font-size: 24px;
    }
    .v-btn {
        width: 40%;
    }
}

</style>