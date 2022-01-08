<template>
	<div class="form">
		<div class="form__card">
			<div class="card">
				<div class="card__logo">
					<img src="../../public/eth.png" alt="" class="card__img" />
					<div class="card__balance">
						{{ parseFloat(balance).toFixed(5) }}
					</div>
				</div>

				<h5>Connected</h5>
				<h6>{{ account }}</h6>
				<h3>Ethereum</h3>
			</div>
			<div @click="change" class="change">Switch Wallet</div>
		</div>
		<div v-if="!loading" class="form__inputs">
			<h6>Receiver Address</h6>
			<input v-model="address" type="text" placeholder="Address" />
			<h6>Transaction Amount</h6>
			<input v-model="amount" type="number" placeholder="Amount" />
			<h6>Note</h6>
			<input v-model="message" type="text" placeholder="Note" />
			<button @click="submit">Send Transaction</button>
		</div>
		<Loading v-else />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Loading from "./Loading.vue";

export default defineComponent({
	name: "Form",
	data() {
		return {
			address: "",
			amount: 0,
			keyword: "",
			message: "",
			loading: false,
		};
	},
	computed: {
		...mapGetters({
			account: "account",
			balance: "balance",
		}),
	},
	methods: {
		async submit() {
			this.loading = true;
			if (!this.address || !this.message || !this.amount) {
				alert(
					"All fields are mandatory and amount needs to be greater than 0"
				);
			} else {
				const result = await this.$store.dispatch("sendTransaction", {
					address: this.address,
					amount: this.amount,
					keyword: this.keyword,
					message: this.message,
				});
				if (result.hash) {
					this.$router.push("/success");
				}
			}
			this.loading = false;
		},
		change() {
			this.$store.dispatch("change");
		},
	},
	components: {
		Loading,
	},
});
</script>

<style lang="scss" scoped>
.form {
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 800px;
	max-width: 100%;
	margin: 0 auto;
	grid-column-gap: 4rem;
	grid-row-gap: 4rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}

	&__card {
		place-self: center;
	}

	&__inputs {
		* {
			width: 100%;
		}

		h6 {
			margin: 1.2rem 0 0.8rem;
			font-size: 1.6rem;
			font-weight: 300;
		}

		input {
			color: #fefefe;
			letter-spacing: 0.1rem;
			font-family: "Courier New", sans-serif;
			padding: 1rem;
			background: transparent;
			text-decoration: inherit;
			border: 10px solid;
			border-image-slice: 1;
			border-width: 1px;
			border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
		}

		button {
			margin-top: 2rem;
		}
	}
}

.card {
	width: 350px;
	max-width: 100%;
	margin: 0 auto;
	padding: 1.5rem;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: saturate(180%) blur(10px);
	display: grid;
	grid-template-rows: min-content 1fr min-content min-content;
	border: 1px solid #5c5c5c;
	border-radius: 10px;

	&__logo {
		display: flex;
		align-items: center;
		column-gap: 1rem;
	}

	&__img {
		height: 4rem;
		filter: sepia(50%);
	}

	h5 {
		margin: 80px 0 1rem;
		font-weight: 100;
		text-transform: uppercase;
		font-size: 1.2rem;
		color: #58ed80;
	}

	h6 {
		font-weight: 400;
		margin: 0.5rem 0 0.8rem;
	}

	h3 {
		margin: 0;
		font-weight: 100;
	}
}

.change {
	display: block;
	text-align: center;
	margin-top: 0.8rem;
	font-size: 1.2rem;
	color: #d53a9d;
	cursor: pointer;
}
</style>
