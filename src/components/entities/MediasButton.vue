<template>



    <v-dialog
        v-model="dialog"
        width="auto"
        >
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" size="x-large" icon="$vuetify" class="medias-button">
        
                </v-btn>
            </template>

        <v-card class="card">
            <div class="card-title">{{ $t('medias_button.contact_us') }}</div>
            <v-btn size="large" rounded="lg" prepend-icon="$vuetify" color="#E1306C" class="text-white" stacked>
                {{ $t('medias_button.instagram') }}
            </v-btn>            
            <v-btn size="large" rounded="lg" prepend-icon="$vuetify" color="#0088cc" class="text-white" stacked>
                {{ $t('medias_button.telegram') }}
            </v-btn>            
            <v-btn size="large" rounded="lg"  prepend-icon="$vuetify" color="#25D366" class="text-white"  stacked>
                {{ $t('medias_button.whatsapp') }}
            </v-btn>
            <v-card-actions>
                <v-btn color="black" @click="dialog = false">{{ $t('medias_button.close') }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

const dialog = ref(false)


const { t } = useI18n({useScope: 'global'})

</script>

<style lang="scss" scoped>
.medias-button {
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 10000000;
}



.card {
    font-family: 'FuturaDemiC';
    gap: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px 0 20px;
    width: 500px;
    &-title {
        font-size: 40px;
    }
}

.text-white {
    width: 100%;
}
</style>