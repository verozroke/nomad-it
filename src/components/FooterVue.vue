<template>
    <footer class="footer">
        <div class="footer__container">
                <div class="row">
                    <RouterLink :to="{name: link.page}" v-for="link in links" :key="link.text">
                        <v-btn
                            width="150px"
                            color="white"
                            variant="text"
                            class="mx-2"
                        >
                            {{ link.text }}
                        </v-btn>
                    </RouterLink>
                </div>
                <div class="footer__media-row">
                    <strong>&copy; {{ t('footer.rights') }}. {{ new Date().getFullYear() }} — IT NOMADS</strong>

                    <ul>
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            :icon="icon.path"
                            :color="icon.color"
                            variant="flat"
                            size="small"
                        ></v-btn>
                    </ul>
                </div>

        </div>
    </footer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n';




const { t } = useI18n({useScope: 'global'})

const links =  computed(() => 
    [
        {text: t('footer.links.home'), page: 'Home'},
        {text: t('footer.links.team'), page: 'Team'},
        {text: t('footer.links.design'), page: 'Design'},
        {text: t('footer.links.SMM'), page: 'Smm'},
        {text: t('footer.links.development'), page: 'Development'},
        {text: t('footer.links.workshops'), page: 'Workshops'},
    ]
)

    
const icons =  ref([
        { path: '', color: '#E1306C'},
        { path: '', color: '#0088cc'},
        { path: '', color: '#25D366'},
])  


</script>

<style lang="scss" scoped>

.footer {
    height: 150px;
    background-color: #000;
    &__container {
        justify-content: space-between;
        height: 100%;
        font-family: 'FuturaDemiC';
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__media-row {
        font-family: 'Montserrat', sans-serif;
        height: 75px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ul {
        display: flex;
        gap:  .5em;
    }
}

.row {
    display: flex;
}


</style>