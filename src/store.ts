import { createStore } from "vuex";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./utilities/constants";

declare let window: any;
const { ethereum } = window;

export const store = createStore({
	state: {
		connected: false,
		account: "",
	},
	mutations: {
		updateConnectionStatus(state, { status, account }) {
			state.connected = status;
			state.account = account;
		},
	},
	actions: {
		async connectMetamask({ commit, dispatch }) {
			if (ethereum) {
				try {
					// This is handled by event listener
					// const accounts = await ethereum.request({
					// 	method: "eth_requestAccounts",
					// });
					// commit("updateConnectionStatus", {
					// 	status: true,
					// 	account: accounts[0],
					// });

					await ethereum.request({
						method: "eth_requestAccounts",
					});
				} catch (error) {
					console.log(error);
					alert("Could not connect to wallet");
				}

				// dispatch("activateConnection");
			} else {
				alert("Please install Metamask");
			}
		},
		async checkConnection({ commit, dispatch }) {
			if (ethereum) {
				const accounts = await ethereum.request({
					method: "eth_accounts",
				});
				if (accounts.length) {
					commit("updateConnectionStatus", {
						status: true,
						account: accounts[0],
					});
				}
				dispatch("eventListener");
			}
		},
		eventListener({ commit }) {
			window.ethereum.on("accountsChanged", function (accounts: any) {
				if (accounts.length) {
					commit("updateConnectionStatus", {
						status: true,
						account: accounts[0],
					});
				} else {
					commit("updateConnectionStatus", {
						status: false,
						account: "",
					});
				}
			});
		},
		activateConnection({ commit }) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const transactionContract = new ethers.Contract(
				contractAddress,
				contractABI,
				signer
			);

			console.log(provider, signer, transactionContract);
		},
		async change() {
			window.ethereum.request({
				method: "wallet_requestPermissions",
				params: [
					{
						eth_accounts: {},
					},
				],
			});
		},
	},
	getters: {
		connection(state) {
			return state.connected;
		},
		account(state) {
			return state.account;
		},
	},
});
