<template>
	<nav class="navigation">
		<i class="ri-flashlight-line navigation__icon"></i>
		<span class="navigation__text">JustTransact</span>
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
	background: linear-gradient(to right bottom, #743ad5, #d53a9d);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
