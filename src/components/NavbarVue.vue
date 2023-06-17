<template>
    <div class="navbar">
        <div class="navbar__ticker">
            <Ticker :texts="texts"/>
        </div>
    </div>
</template>

<script setup>
import Ticker from './entities/Ticker.vue';
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'


const { t } = useI18n({ useScope: 'global'})


const texts = computed(() => [
    t('navbar.agency'),
    t('navbar.design'),
    t('navbar.SMM'),
    t('navbar.development'),
])


</script>

<style lang="scss" scoped>

.navbar {
    top: 0;
    position: sticky; 
    display: flex;
    width: 100%;
    z-index: 100000;
    height: 50px;
    background-color: #fff;
    filter: drop-shadow(0 1px 5px #000);

}

</style>