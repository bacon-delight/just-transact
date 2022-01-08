<template>
	<nav class="navigation">
		<i class="ri-flashlight-line navigation__icon"></i>
		<router-link to="/" class="navigation__text">JustTransact</router-link>
		<router-link
			class="navigation__link navigation__link--first"
			to="/transactions"
			>Transactions</router-link
		>
	</nav>
</template>

<script lang="ts">
export default {
	name: "Navigation",

	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.navigation {
	padding: 1rem;
	font-size: 2rem;
	letter-spacing: 0.1rem;
	display: flex;
	align-items: center;

	&__icon,
	&__text {
		text-decoration: none;
		background: linear-gradient(to right bottom, #743ad5, #d53a9d);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	&__link {
		text-decoration: none;
		font-size: 1.4rem;
		color: #dedede;

		&--first {
			margin-left: auto;
		}
	}
}
</style>
