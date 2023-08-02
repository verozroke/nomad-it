<template>
  <div class="list" id="workshop-list">
    <div class="list__container">
      <div class="list__title">Доступные мастер классы</div>
      <div class="list__workshops">
        <WorkshopCard v-for="card in cards" :key="card.id" :title="card.title" :price="card.price"
          :old-price="card.oldPrice" :duration="card.duration" :difficulty="card.difficulty" :banner-src="card.bannerSrc"
          :plan-src="card.planSrc" :forms-link="card.formsLink" :whatsapp-link="card.whatsappLink" />
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref } from 'vue';
import WorkshopCard from './item/WorkshopCard.vue';



const cards = ref([
  {
    id: 1,
    title: 'HTML & CSS',
    price: '19 990',
    oldPrice: '32 500',
    duration: '2-4 часа',
    difficulty: 'Лёгкий',
    bannerSrc: 'https://miro.medium.com/v2/resize:fit:1400/1*esOa9npMi79rC50Ds3nR1g.png',
    planSrc: '/nomad-it/storage/program.pdf',
    formsLink: 'https://forms.gle/bNNASPDkQjUqMyE19',
    whatsappLink: 'https://api.whatsapp.com/send/?phone=77053505988'
  }
])

</script>

<style lang="scss" scoped>
.list {
  padding: 80px 0;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5em;
  }

  &__title {
    text-align: center;
    font-family: 'FuturaDemiC';
    font-size: 50px;
    color: #000;
    margin-bottom: 80px;
  }
}
</style>