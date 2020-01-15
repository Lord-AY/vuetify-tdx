import ash from "lodash";
export default {
	namespaced: true,
	state: {
		messagesTo: {},
		messagesFrom: {},
		allMessage: {},
		errors: null,
		success: null
	},
	getters: {
		getMessagesTo(state) {
			if (state.messagesTo !== null && state.messagesTo !== undefined) {
				return state.messagesTo;
			}
			return;
		},
		getMessagesFrom(state) {
			if (
				state.messagesFrom !== null &&
				state.messagesFrom !== undefined
			) {
				return state.messagesFrom;
			}
			return;
		},
		getAllMessage(state) {
			if (state.allMessage !== null && state.allMessage !== undefined) {
				return state.allMessage;
			}
			return;
		},
		getErrors(state) {
			if (state.errors !== null && state.errors !== undefined) {
				return state.errors;
			}
			return null;
		},
		getSuccess(state) {
			if (state.success !== null || state.success !== undefined) {
				return state.success;
			} else {
				return null;
			}
		}
	},
	actions: {
		sendMessage({ commit, rootState }, payload) {
			commit("auth/SET_LOADING", true, { root: true });
			commit("SET_SUCCESS_MSG", null);
			commit("SET_ERRORS", null);
			// create message in firestore
			chatDb
				.collection("chat")
				.add({
					from: payload.from,
					to: payload.to,
					message: payload.message,
					createdAt: new Date()
				})
				.then(({ data }) => {
					commit("auth/SET_LOADING", false, { root: true });
					commit(
						"SET_SUCCESS_MSG",
						"Your message has been successfully sent"
					);
				})
				.catch(error => {
					// console.log(error.response.data);
					commit("SET_ERRORS", "Network Error, please try again...");
				});
		},
		async fetchUserMessagesto({ commit, rootState }) {
			let fetchedMessagesTo = [];
			let users = await chatDb
				.collection("chat")
				.where("to", "==", rootState.auth.user.id)
				.orderBy("createdAt")
				.get();
			users.forEach(userDoc => {
				fetchedMessagesTo.push(userDoc.data());
			});

			await Promise.all(fetchedMessagesTo);
			// console.log(fetchedMessagesTo)
			commit("SET_MESSAGES_TO", fetchedMessagesTo);
		},
		async fetchUserMessagesfrom({ commit, rootState }) {
			let fetchedMessagesFrom = [];

			let users = await chatDb
				.collection("chat")
				.where("from", "==", rootState.auth.user.id)
				.orderBy("createdAt")
				.get();
			users.forEach(userDoc => {
				fetchedMessagesFrom.push(userDoc.data());
			});

			await Promise.all(fetchedMessagesFrom);
			// console.log(fetchedMessagesTo)
			commit("SET_MESSAGES_FROM", fetchedMessagesFrom);
		},
		getSentOfferUsers({ commit }, payload) {
			var parsedObj = JSON.parse(JSON.stringify(payload));
			console.log("start sent message");
			// console.log(parsedObj)

			for (let i in parsedObj) {
				// console.log(parsedObj[i])
			}
			// let keys = Object.keys(payload);
			// parsedyourElement.forEach(key => {
			//    let item = key;
			//    console.log(item);
			// })
		},
		getRecievedOfferUsers({ commit }, payload) {
			var parsedObj = JSON.parse(JSON.stringify(payload));
			console.log("start received message");

			for (let i in parsedObj) {
				// console.log(parsedObj[i])
			}
		},
		getAll({ commit }, fromMessagePayload, toMessagePayload) {
			var fromMessagePayload = JSON.parse(
				JSON.stringify(fromMessagePayload)
			);
			var toMessagePayload = JSON.parse(JSON.stringify(toMessagePayload));
			const allMessage = Object.assign(
				fromMessagePayload,
				toMessagePayload
			);
			console.log(allMessage);
			commit("SET_MESSAGES_ALL", allMessage);
		}
	},
	mutations: {
		SET_MESSAGES_ALL(state, allmessage) {
			state.allMessage = allmessage;
		},
		SET_MESSAGES_TO(state, to) {
			state.messagesTo = to;
		},
		SET_MESSAGES_FROM(state, from) {
			state.messagesFrom = from;
		},
		SET_SUCCESS_MSG(state, success) {
			state.success = success;
		},
		SET_ERRORS(state, errors) {
			state.errors = errors;
		}
	}
};
