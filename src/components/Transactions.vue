<template>
	<div class="wrapper">
		<div v-if="!transactions.length" class="empty">
			There are no transactions in your wallet
		</div>
		<div v-else class="transactions">
			<div v-for="transaction in transactions" class="transactions__item">
				<div class="transactions__header">
					<div class="transactions__amount">
						{{ parseInt(transaction.amount._hex) / 10 ** 18 }} ETH
					</div>
					<div class="transactions__timestamp">
						{{
							new Date(
								transaction.timestamp.toNumber() * 1000
							).toLocaleString()
						}}
					</div>
				</div>
				<div class="transactions__from">
					<span>From:</span>
					<span>
						{{ transaction.sender.slice(0, 5) }} ...
						{{
							transaction.sender.slice(
								transaction.sender.length - 5,
								transaction.sender.length
							)
						}}
					</span>
					<a
						:href="`https://ropsten.etherscan.io/address/${transaction.sender}`"
						target="__blank"
					>
						<i class="ri-external-link-line"></i>
					</a>
				</div>
				<div class="transactions__to">
					<span>To:</span>
					<span>
						{{ transaction.receiver.slice(0, 5) }} ...
						{{
							transaction.receiver.slice(
								transaction.receiver.length - 5,
								transaction.receiver.length
							)
						}}
					</span>
					<a
						:href="`https://ropsten.etherscan.io/address/${transaction.receiver}`"
						target="__blank"
					>
						<i class="ri-external-link-line"></i>
					</a>
				</div>
				<div class="transactions__message">
					Note: {{ transaction.message }}
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
	name: "Transactions",
	mounted() {
		this.$store.dispatch("loadTransactions");
	},
	computed: {
		...mapGetters({
			transactions: "transactions",
		}),
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	height: 100%;
	width: 100%;
}

.transactions {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;

	@media only screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
	}

	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}

	&__item {
		padding: 1.5rem;
		line-height: 3.4rem;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: saturate(180%) blur(10px);
		border: 1px solid #5c5c5c;
		border-radius: 10px;
	}

	&__header {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	&__amount {
		font-size: 2rem;
	}

	&__timestamp {
		justify-self: right;
	}

	&__from,
	&__to {
		display: flex;
		align-items: center;
		column-gap: 1rem;
	}
}

a {
	text-decoration: none;
}

.empty {
	height: 100%;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
}
</style>
