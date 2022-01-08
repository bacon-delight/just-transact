import { createStore } from "vuex";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./utilities/constants";

declare let window: any;
declare let transactionHash: any;
const { ethereum } = window;

export const store = createStore({
	state: {
		connected: false,
		account: "",
		balance: 0,
		transactions: [],
	},
	mutations: {
		updateConnectionStatus(state, { status, account }) {
			state.connected = status;
			state.account = account;
		},
		updateBalance(state, balance) {
			state.balance = balance;
		},
		storeTransactions(state, transactions) {
			state.transactions = transactions;
		},
	},
	actions: {
		async connectMetamask({ commit, dispatch }) {
			if (ethereum) {
				try {
					await ethereum.request({
						method: "eth_requestAccounts",
					});
				} catch (error) {
					alert("Could not connect to wallet");
				}
			} else {
				alert("Please install Metamask");
			}
		},
		async fetchBalance({ state, commit }) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const balance = await provider.getBalance(state.account);
			commit(
				"updateBalance",
				ethers.utils.formatEther(balance.toString())
			);
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
					dispatch("fetchBalance");
				}
				dispatch("eventListener");
			}
		},
		eventListener({ commit, dispatch }) {
			window.ethereum.on("accountsChanged", function (accounts: any) {
				if (accounts.length) {
					commit("updateConnectionStatus", {
						status: true,
						account: accounts[0],
					});
					dispatch("fetchBalance");
				} else {
					commit("updateConnectionStatus", {
						status: false,
						account: "",
					});
				}
			});
		},
		async getContract({ commit }) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const transactionContract = new ethers.Contract(
				contractAddress,
				contractABI,
				signer
			);
			return { provider, signer, transactionContract };
		},
		async sendTransaction({ state, dispatch, commit }, formData) {
			const { address, amount, keyword, message } = formData;

			try {
				const { transactionContract } = await dispatch("getContract");
				await ethereum.request({
					method: "eth_sendTransaction",
					params: [
						{
							from: state.account,
							to: address,
							gas: "0x5208", // 21,000 GWEI
							value: ethers.utils.parseEther(amount.toString())
								._hex,
						},
					],
				});

				const transactionHash =
					await transactionContract.addToBlockchain(
						address,
						ethers.utils.parseEther(amount.toString())._hex,
						message,
						keyword
					);

				const transactionCount =
					await transactionContract.getTransactionCount();

				return {
					hash: transactionHash.hash,
					success: true,
				};
				// console.log(transactionHash.hash, transactionCount.toNumber());
			} catch {
				alert("Transaction could not be processed");
				return {
					hash: false,
					success: false,
				};
			}
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
		async loadTransactions({ dispatch, commit }) {
			if (ethereum) {
				const { transactionContract } = await dispatch("getContract");
				try {
					const transactions =
						await transactionContract.getAllTransactions();
					commit("storeTransactions", transactions);
				} catch {
					alert("Connect your wallet to see transactions");
				}
			}
		},
	},
	getters: {
		connection(state) {
			return state.connected;
		},
		account(state) {
			return state.account;
		},
		balance(state) {
			return state.balance;
		},
		transactions(state) {
			return state.transactions;
		},
	},
});
