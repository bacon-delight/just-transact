<template>
	<div class="app">
		<Navigation />
		<div class="app__content">
			<Content />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "./components/Content.vue";
import Navigation from "./components/layout/Navigation.vue";

export default defineComponent({
	name: "App",
	components: {
		Content,
		Navigation,
	},
});
</script>

<style lang="scss">
@import "./assets/main.scss";
@import "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css";

.app {
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-rows: min-content 1fr;
	background: linear-gradient(-45deg, #200122, #000046);
	animation: gradient 15s ease infinite;
	background-size: 400% 400%;
	color: #ebebeb;

	&__content {
		overflow-y: auto;
		padding: 1rem;
	}
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
