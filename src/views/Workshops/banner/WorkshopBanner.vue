<template>
  <v-parallax
    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    class="banner">
    <div class="banner__overlay">
      <div class="banner__container">
        <div class="banner__title">Мастер-классы</div>
        <v-btn class="banner__button" @click="scrollDown('workshop-list')" variant="outlined" width="500px" size="large"
          style=" font-weight: 500;">Узнать о
          наших доступных
          курсах</v-btn>
      </div>
    </div>
  </v-parallax>
</template>

<script setup >
function scrollDown(blockID) {
  const $block = document.getElementById(blockID)
  $block.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

</script>

<style lang="scss" scoped>
.banner {
  height: 100vh;

  &__title {
    font-size: 100px;
    text-align: left;
    width: 100%;
    font-family: 'FuturaDemiC';
  }

  &__overlay {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.585);
    backdrop-filter: blur(5px);
  }

  &__container {
    color: #fff;
    height: 100%;
    display: flex;
    gap: 3em;
    flex-direction: column;
    padding: 0 20px 80px 20px;
    justify-content: end;
  }
}


@media only screen and (max-width: 780px) {
  .banner {
    &__title {
      font-size: 40px;
      text-align: center;
    }

    &__container {
      align-items: center;
    }

    &__button {
      font-size: 9px !important;
    }
  }
}
</style>