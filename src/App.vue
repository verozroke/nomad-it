<script setup>
import NavbarVue from './components/NavbarVue.vue';
import FooterVue from './components/FooterVue.vue'
import LanguageButton from './components/entities/LanguageButton.vue';
import MediasButton from './components/entities/MediasButton.vue';

</script>

<template>
	<div class="test">
		<MediasButton/>
		<LanguageButton/>
		<NavbarVue/>
		<div class="wrapper">
			<div class="main">
				<router-view  v-slot="{ Component }">
					<transition name="routering" mode="out-in">
						<component :is="Component"></component>
					</transition>
				</router-view>
			</div>
			<FooterVue />
		</div>
	</div>
</template>

<style lang="scss">
@import url('@styles/clearStyles.scss');
@import url('@styles/fontStyles.scss');

.main {
  	flex: 1 1 auto;
}
.wrapper {
    display: flex;
    flex-direction: column;
    overflow: clip;
    min-height: 100vh;
    background-color: #fff;
}

[class*="__container"] {
    max-width: 1360px;
    margin: 0 auto;
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-style: normal;   
}

.routering {
	&-enter-from {
		opacity: 0;
		transform: translateX(1000px);
	}
	&-enter-active {
		transition: all 0.3s ease-out;
	}
	&-leave-to {
		opacity: 0;
		transform: translateX(-1000px);
	}
	&-leave-active {
		transition: all 0.3s ease-in;
	}
}


::-webkit-scrollbar {
	width: 13px;
	background-color: transparent;
	&-track {
		background-color: transparent;
		margin-block: .5em;
	}
	&-thumb {
		background-color: rgba(47, 47, 47, 0.836);
		border-radius: 100vw;
		transition: .4s;
		border: 4px solid rgba(0, 0, 0, 0);
		background-clip: padding-box;
		&:hover {
			background-color: rgb(28, 28, 28);
			transition: .4s;
		}
	}
}

</style>
