<template>
  <div class="ticker-wrap">
      <div class="ticker">
          <div class="ticker__item">
            <img src="/icons/logo.png" alt="">
          </div>
          <div v-for="(text, i) in texts" :key="i" class="ticker__item">
            {{ text }}
          </div>
          <div class="ticker__item">
            <img src="/icons/logo.png" alt="">
          </div>
          <div v-for="(text, i) in texts" :key="i" class="ticker__item">
            {{ text }}
          </div>
          <div class="ticker__item">
            <img src="/icons/logo.png" alt="">
          </div>
      </div>
  </div>
</template>

<script setup>


const props = defineProps({
    texts: Array
})

</script>

<style lang="scss" scoped>
* { box-sizing: border-box; }
$duration: 10s;

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker-wrap {
  
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 100%;
  background-color: #fff; 
  padding-left: 100%;
  box-sizing: content-box;

  .ticker {
    font-family: 'FuturaDemiC'; 
    & img {
      height: 50%;

    }

    display: inline-flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    -webkit-animation-iteration-count: infinite; 
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
   -webkit-animation-name: ticker;
           animation-name: ticker;
    -webkit-animation-duration: $duration;
            animation-duration: $duration;

    &__item {

    display: inline-flex;
    height: 100%;
    align-items: center;
    padding: 0 2rem;
    font-size: 24px;
    color: #000;   
    }

  }

}



body { padding-bottom: 5rem; }
h1,h2,p {padding: 0 5%;}

</style>