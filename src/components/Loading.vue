<template>
	<div class="loading">
		<div class="example">
			<div class="block">
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
			</div>
		</div>
		<h3>Prosessing Transaction</h3>
		<h6>Please wait a few seconds for us to process the transaction</h6>
	</div>
</template>

<script>
export default {
	name: "Loading",
};
</script>

<style lang="scss" scoped>
.loading {
	text-align: center;
	align-self: center;
	position: relative;

	* {
		margin: 0;
	}

	h3 {
		margin-bottom: 1rem;
	}
}

$duration: 0.5s;
$size: 2rem;

.example {
	height: $size;
	width: $size;
	margin: 0 auto 4.5rem;
	position: relative;
}

.block {
	position: absolute;
	top: 0;
	left: 0;
	height: $size;
	width: $size;

	> .item {
		position: absolute;
		height: $size;
		width: $size;
		background: #fff;
		animation: move $duration linear infinite;

		&:nth-of-type(1) {
			top: -$size;
			left: -$size;
			animation-delay: 0s;
		}

		&:nth-of-type(2) {
			top: -$size;
			left: 0;
			animation-delay: calc(-1 * $duration / 8);
		}

		&:nth-of-type(3) {
			top: -$size;
			left: $size;
			animation-delay: calc(-2 * $duration / 8);
		}

		&:nth-of-type(4) {
			top: 0;
			left: $size;
			animation-delay: calc(-3 * $duration / 8);
		}

		&:nth-of-type(5) {
			top: $size;
			left: $size;
			animation-delay: calc(-4 * $duration / 8);
		}

		&:nth-of-type(6) {
			top: $size;
			left: 0;
			animation-delay: calc(-5 * $duration / 8);
		}

		&:nth-of-type(7) {
			top: $size;
			left: -$size;
			animation-delay: calc(-6 * $duration / 8);
		}

		&:nth-of-type(8) {
			top: 0;
			left: -$size;
			animation-delay: calc(-7 * $duration / 8);
		}
	}
}

@keyframes move {
	0% {
		opacity: 0;
	}
	10% {
		opacity: 1;
	}
	70% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}
</style>
