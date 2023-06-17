<template>
    <v-parallax src="https://images.unsplash.com/photo-1661193133821-aad6ceb21fab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80" class="hero">
        <div class="hero-overlay">
            <div class="hero__container">
                <div class="hero__main">
                    <div class="">
                        <div class="hero__title">IT NOMADS <img src="/icons/urta.svg" style="height: 120px; filter: invert(100%) " alt=""></div>
                        <div class="d-flex" style="gap: .5em">
                            <div class="hero__subtitle" style=""><RouterLink :to="{name: 'Team'}"><v-btn variant="outlined" color="#fff">{{ $t('home.hero.about_us') }}</v-btn></RouterLink></div>
                            <div class="hero__subtitle" style=""><RouterLink :to="{name: 'Workshops'}"><v-btn variant="outlined" color="#fff">{{ $t('home.hero.workshops') }}</v-btn></RouterLink></div>
                        </div>
                    </div>

                    <ul class="hero__cards">
                        <li class="hero__card" @mouseover="cardMouseOver('1')" @mouseleave="cardMouseLeave('1')">
                            <RouterLink :to="{name: 'Design'}">
                                <v-card class="mx-auto" width="280">
                                    <div class="hero__card-overlay"></div>
                                    <div class="hero__card-overlay-text">{{ $t('home.hero.go_to') }}</div>
                                    
                                    <v-carousel cycle interval="3500" hide-delimiters :show-arrows="false" height="375px">
                                        <v-carousel-item
                                            v-for="(item,i) in items1"
                                            :key="i"
                                            :src="item.src"
                                            cover
                                        ></v-carousel-item>
                                    </v-carousel>
                                    <v-card-title class="text-center hero__card-title">{{ $t('home.hero.cards.design') }}</v-card-title>
                                </v-card>
                            </RouterLink>
                        </li>
                        <li class="hero__card"  @mouseover="cardMouseOver('2')" @mouseleave="cardMouseLeave('2')">
                            <RouterLink :to="{name: 'Smm'}">
                                <v-card class="mx-auto" width="280">
                                    <div class="hero__card-overlay"></div>
                                    <div class="hero__card-overlay-text">{{ $t('home.hero.go_to') }}</div>
                                    <v-carousel cycle interval="2000" hide-delimiters :show-arrows="false" height="375px">
                                        <v-carousel-item
                                            v-for="(item,i) in items2"
                                            :key="i"
                                            :src="item.src"
                                            cover
                                        ></v-carousel-item>
                                    </v-carousel>
                                    <v-card-title class="text-center hero__card-title">{{ $t('home.hero.cards.SMM') }}</v-card-title>

                                </v-card>
                            </RouterLink>
                        </li>
                        <li class="hero__card" @mouseover="cardMouseOver('3')" @mouseleave="cardMouseLeave('3')">
                            <RouterLink :to="{name: 'Development'}">
                                <v-card class="mx-auto" width="280">
                                    <div class="hero__card-overlay"></div>
                                    <div class="hero__card-overlay-text">{{ $t('home.hero.go_to') }}</div>

                                    <v-carousel reverse cycle interval="5000" hide-delimiters :show-arrows="false" height="375px">
                                        <v-carousel-item
                                            v-for="(item,i) in items3"
                                            :key="i"
                                            :src="item.src"
                                            cover
                                        ></v-carousel-item>
                                    </v-carousel>
                                    <v-card-title class="text-center hero__card-title">{{ $t('home.hero.cards.development') }}</v-card-title>

                                </v-card>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <ul class="hero__slogan">
                    <ul class="hero__info-list">
                        <li class="hero__info-item">
                            <div class="hero__info-item-icon"><img src="/icons/location.svg" alt=""></div>
                            <div class="hero__info-item-text">{{ $t('home.hero.location_text') }}</div>
                        </li>
                        <li class="hero__info-item">
                            <div class="hero__info-item-icon"><img src="/icons/clock.svg" alt=""></div>
                            <div class="hero__info-item-text">{{ $t('home.hero.graphic') }}</div>
                        </li>
                    </ul>
                    <div class="hero__slogan-servs">
                        <li class="hero__slogan-serv" id="serve-title-1" style="margin-bottom: 28px;">UIUX</li> 
                        <li class="hero__slogan-serv" id="serve-title-2" style="margin-bottom: 28px;">SMM</li> 
                        <li class="hero__slogan-serv" id="serve-title-3">DEV</li> 
                    </div>
                </ul>
            </div>
        </div>
    </v-parallax>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue'
import { RouterLink } from 'vue-router';


const { t } = useI18n({useScope: 'global'})


const items1 = ref([
        {
            src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
            src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
        },
        {
            src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
        },

])
const items3 = ref([
        {
            src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
            src: 'https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
        },
        {
            src: 'https://images.unsplash.com/photo-1613068687893-5e85b4638b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        }
])
const items2 = ref([
{
            src: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
            src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
            src: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        },
        {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
])



const cardMouseOver = (id) => {
    document.querySelector(`#serve-title-${id}`).style.transform = 'translateX(-50px)'
}


const cardMouseLeave = (id) => {
    document.querySelector(`#serve-title-${id}`).style.transform = 'translateX(0)'
}

</script>

<style lang="scss" scoped>

.hero {
    height: calc(100vh - 50px);
    &-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #00000066;
        backdrop-filter: blur(5px);
    }
    width: 100%;
    &__container {
        height: 100%;
        display: flex;  
        font-family: 'FuturaDemiC';
        width: 100%;
    }
    &__main {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        gap: 1em;
        height: 100%;
        justify-content: center;
        width: 70%;
        // background-color: rgba(0, 0, 255, 0.193);
    }

    &__title {
        font-family: 'FuturaDemiC';
        font-size: 120px;
        color: transparent;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #fff;
    }
    &__subtitle {
        padding-left: 7px;
        color: #000;
        font-size: 28px;
        font-family: 'FuturaDemiC';
        & a {
            color: #000;
            text-decoration: underline;
            &:visited {
                color: #000;    
            }
        }
        
    }
    &__info-list {
        width: 280px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        color: #fff;
        gap: 1em;
    }
    &__info-item {
        display: flex;
        gap: 10px;
        align-items: center;
        &-icon {
            height: 50px;
            width: 50px;
            object-fit: cover;
            & img {
                filter: invert(100%);
                height: 50px;
                width: 50px;
            }
        }
        &-text {
            font-size: 20px;
            font-family: 'FuturaDemiC';
            font-weight: 500;
        }
    }
    &__slogan {

        display: flex;
        padding: 60px 0 0 0;
        flex-direction: column;
        align-items: flex-end;
        
        width: 30%;
        // background-color: rgba(255, 255, 0, 0.195);
        &-servs {
            color: transparent;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: #fff;
            height: 423px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &-serv {    
            
            text-align: center;
            font-size: 123px;
            transition: .2s;
            font-family: 'FuturaDemiC';
            text-transform: uppercase;
            width: 100%;
        }
    }
    &__cards {
        display: flex;
        gap: 2em;
    }
    &__card {
        transition: .4s;
        &-overlay {
            &-text {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                top: 0px;
                text-align: center;
                font-size: 20px;
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                transform: translateY(200px);
                z-index: 999;
                opacity: 0;
                bottom: 48px;
                left: 0;
                right: 0;
                transition: .4s;
            }
            opacity: 0;
            background-color: #00000094;
            position: absolute;
            top: 0;
            z-index: 999;
            bottom: 48px;
            left: 0;
            right: 0;
            transition: .4s;
        }
        &:hover  {
            transform: scale(1.02);
            transition: .4s;
            .hero__card-overlay {
                transition: .4s;
                opacity: 1;
                &-text {
                    transition: .4s;
                    opacity: 1;
                    transform: translateY(0);
                }
            }

        }
        &-title {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
        }
    }
}



</style>