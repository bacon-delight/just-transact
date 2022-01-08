<template>
	<div class="intro">
		<h1 class="intro__header">Make your first ETH transaction</h1>
		<h3 class="intro__subheader">
			Take the first step into Web 3.0 and make your first Etherium
			transaction. Your transcation will be public, permanent and will
			last forever.
		</h3>
		<button @click="connect">Connect Wallet</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Intro",
	methods: {
		connect() {
			this.$store.dispatch("connectMetamask");
		},
	},
	mounted() {
		this.$store.dispatch("checkConnection");
	},
});
</script>

<style lang="scss" scoped>
.intro {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 450px;
	max-width: 100%;

	&__header {
		font-size: 3rem;
		line-height: 3.8rem;
	}

	&__subheader {
		font-size: 1.8rem;
		font-weight: 300;
		margin: 2rem 0;
		line-height: 2.8rem;
	}
}
</style>
