<template>
	<div class="form">
		<div class="form__card">
			<div class="card">
				<img src="eth.png" alt="" class="card__img" />
				<h5>Connected</h5>
				<h6>{{ account }}</h6>
				<h3>Ethereum</h3>
			</div>
			<div @click="change" class="change">Switch Wallet</div>
		</div>
		<div class="form__inputs">
			<h6>Receiver Address</h6>
			<input v-model="address" type="text" placeholder="Address" />
			<h6>Transaction Amount</h6>
			<input v-model="amount" type="number" placeholder="Amount" />
			<h6>Keyword</h6>
			<input v-model="keyword" type="text" placeholder="Keyword" />
			<h6>Message</h6>
			<input v-model="message" type="text" placeholder="Message" />
			<button @click="submit">Send Transaction</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
	name: "Form",
	data() {
		return {
			address: "",
			amount: 0,
			keyword: "",
			message: "",
		};
	},
	computed: {
		...mapGetters({
			account: "account",
		}),
	},
	methods: {
		submit() {
			console.log(this.address, this.amount, this.keyword, this.message);
		},
		change() {
			this.$store.dispatch("change");
		},
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
