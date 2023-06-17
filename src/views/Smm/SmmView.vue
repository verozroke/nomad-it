<template>
    <div class="cases">
        <div class="cases__container">
            <div class="cases__box">
                <div class="cases__title">
                    {{ $t('SMM.title') }}
                </div>

                <v-dialog v-model="dialog" width="auto">
                    <template v-slot:activator="{ props }">
                        <div class="cases__joke-button" v-bind="props"><v-btn size="large">{{ $t('SMM.price') }}</v-btn></div>
                    </template>

                    <v-card>
                        <v-card-text>
                            {{ $t('SMM.joke') }}


                            <!-- TODO: whatsapp, telegram, instagram links component -->
                        </v-card-text>
                        <v-card-actions>
                        <v-btn  block @click="dialog = false"
                            >{{ $t('SMM.close') }}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </div>
        <div class="cases__table">
            <div class="cases__cell" v-for="(cell, i) in cases" :key="i">
                <div class="cases__cell-overlay">
                    <div class="overlay-title">{{ cell.title }}</div>
                    <a :href="cell.link" class="cell-link" target="_blank"><v-btn variant="outlined" color="#fff" class="overlay-button">{{ $t('SMM.view') }}</v-btn></a>
                </div>
                <a >
                    <img :src="cell.imageURL" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const dialog = ref(false)

onMounted(() =>{
    window.scrollTo(0, 0)
})


const cases = ref([
    {
        imageURL: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1053&q=80',
        title: 'Аккаунт Марьяны Ро',
        link: 'https://shikimori.me/verozroke'

    },
    {
        imageURL: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1053&q=80',
        title: 'Аккаунт Ивана Рудского',
        link: 'https://shikimori.me/verozroke'

    },
    {
        imageURL: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1053&q=80',
        title: 'Аккаунт Руслана Усачева',
        link: 'https://shikimori.me/verozroke'

    },
    {
        imageURL: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1053&q=80',
        title: 'Аккаунт Володимира Зеленского',
        link: 'https://shikimori.me/verozroke'

    },
])

</script>

<style lang="scss" scoped>
.cases {
    display: flex;
    flex-direction: column;
    &__container {
        padding: 0 0 20px 0;
        height: 50vh;
        width: 100%;
        font-family: 'FuturaDemiC';
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
    }
    &__box {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1em;
    }
    &__title {
        font-size: 100px;
    }

    &__table {
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
    }
    &__cell {
        height: 100%;
        max-width: 50%;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        & a {
            object-fit: cover;
            max-width: 100%;
            max-height: 100%;
        } 
        & a img {
            max-width: 100%;
            max-height: 100%;
        }
        &:hover {
            .cases__cell-overlay {
                opacity: 1;
                transition: .4s;
            }
        }
        &-overlay {

            flex-direction: column;
            gap:1em;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 1px;
            font-weight: 400;
            opacity: 0;
            position: absolute;
            transition: .4s;
            background-color: rgba(0, 0, 0, 0.5);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
}

a {
    color: #fff !important;
}

</style>