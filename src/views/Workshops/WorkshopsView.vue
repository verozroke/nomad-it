<template>
  <div class="workshop">
    <WorkshopBanner />
    <WorkshopList />
  </div>
</template>

<script setup>
import WorkshopBanner from './banner/WorkshopBanner.vue'
import WorkshopList from './list/WorkshopList.vue'

</script>

<style lang="scss" scoped>
.workshop {
  display: flex;
  flex-direction: column;
}
</style>