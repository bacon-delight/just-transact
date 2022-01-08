import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
	interface State {
		connected: boolean;
		account: string;
		balance: bigint;
		transactions: any;
	}

	interface ComponentCustomProperties {
		$store: Store<State>;
	}
}
