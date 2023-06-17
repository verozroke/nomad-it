<template>
    <div class="home">
        <HomeHero/>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import HomeHero from './home-hero/HomeHero.vue';
import { onMounted } from 'vue' 

const { t, locale } = useI18n({useScope: 'global'})

const switchLang = () => {
    locale.value = locale.value === 'ru' ? 'en' : 'ru'
    localStorage.setItem('lang', locale.value)
}


onMounted(() =>{
    window.scrollTo(0, 0)
})

// {{ $t('home') }}
//             <button @click="switchLang">{{ $t('button') }}</button>


</script>

<style lang="scss" scoped>

.home {
    display: flex;
    flex-direction: column;
}

</style>