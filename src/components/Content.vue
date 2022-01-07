<template>
	<div class="content">
		<Intro v-if="!connected" />
		<Form v-else />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Intro from "./Intro.vue";
import Form from "./Form.vue";

export default defineComponent({
	name: "Content",
	components: {
		Intro,
		Form,
	},
	computed: {
		...mapGetters({
			connected: "connection",
		}),
	},
});
</script>

<style lang="scss" scoped>
.content {
	position: relative;
	height: 100%;
	width: 100%;
}
</style>
