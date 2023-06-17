import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

// i18n
import { languages, defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

// vietify

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

// i18n


const localStoreLang = localStorage.getItem('lang')

// if(!localStoreLang) {
//     localStorage.setItem('lang', 'ru')
// }

const messages = Object.assign(languages)

const i18n = createI18n({
    legacy: false,
    locale: localStoreLang || defaultLocale,
    fallbackLocale: 'ru',
    messages,
})




createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
}).use(i18n).use(vuetify).use(router).mount('#app')
