import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
	interface State {
		connected: boolean;
		account: string;
		balance: bigint;
	}

	interface ComponentCustomProperties {
		$store: Store<State>;
	}
}
