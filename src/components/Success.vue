<template>
	<div class="success">
		<div class="success__content">
			<h3 class="success__header">Your transaction was successful</h3>
			<h6>
				Transactions will be reflected once they're fully processed.
				This may take a while depending upon the network.
			</h6>
			<div class="success__links">
				<router-link class="success__link" to="/transactions"
					>View Transactions</router-link
				>
				<router-link class="success__link" to="/"
					>Return to Wallet</router-link
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "Success",
};
</script>

<style lang="scss" scoped>
.success {
	height: 100%;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;

	&__content {
		text-align: center;
	}

	&__header {
		font-weight: 400;
		letter-spacing: 0.1rem;
	}

	&__links {
		display: flex;
		column-gap: 2rem;
		justify-content: center;
	}

	&__link {
		text-decoration: none;
		color: #d53a9d;
	}
}

h3,
h6 {
	margin: 0;
}

h6 {
	font-weight: 100;
	margin: 1.5rem 0 4rem;
}
</style>
