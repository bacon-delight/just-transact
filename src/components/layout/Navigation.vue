<template>
	<nav class="navigation">
		<i class="ri-flashlight-line navigation__icon"></i>
		<router-link to="/" class="navigation__text">JustTransact</router-link>
		<span class="network">@Ropsten</span>
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
};
</script>

<style lang="scss" scoped>
.navigation {
	padding: 1rem;
	font-size: 2rem;
	letter-spacing: 0.1rem;
	display: flex;
	align-items: center;
	column-gap: 1rem;

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

.network {
	font-size: 1.2rem;
	color: #743ad5;
}
</style>
