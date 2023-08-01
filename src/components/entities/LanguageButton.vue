<template>
  <v-btn @click="switchLang" icon="$vuetify" class="select">
  </v-btn>
  <!-- <v-select
        class="select"
        v-model="select"
        :items="items"
        item-title="lang"
        label="Select"
        return-object
        single-line
    ></v-select> -->
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: 'global' })



const select = ref({ lang: localStorage.getItem('lang') } ? { lang: localStorage.getItem('lang') } : { lang: 'ru' })
const items = ref([
  { lang: 'ru' },
  { lang: 'en' },
  { lang: 'kz' },
])


const switchLang = () => {
  if (select.value.lang === 'ru') {
    select.value.lang = 'kz'
  } else if (select.value.lang === 'en') {
    select.value.lang = 'ru'
  } else if (select.value.lang === 'kz') {
    select.value.lang = 'en'
  }
  locale.value = select.value.lang
  localStorage.setItem('lang', locale.value)
}


watch(select, () => {
  switchLang()
})



</script>

<style lang="scss" scoped>
.select {
  position: fixed;
  top: 75px;
  right: 15px;
  z-index: 10000000;
}
</style>