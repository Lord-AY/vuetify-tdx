import ash from "lodash";
export default {
	namespaced: true,
	state: {
		messages: null,
		sentUsers: null,
		recievedUsers: null
	},
	getters: {
		getMessages(state) {
			if (state.messages !== null && state.messages !== undefined) {
				return state.messages;
			}
			return;
		},
	},
	actions: {
		sendMessage({ commit, rootState }, payload) {
			// create message in firestore
			chatDb.collection("chat").add({
				from: rootState.auth.user.id,
				to: 1,
				message: payload.message,
				createdAt: new Date()
			});
		},
		fetchUserMessages({ commit, rootState }) {
			let fetchedMessagesTo = [];
			let fetchedMessagesFrom = [];
			let userMessages = {};
			chatDb
				.collection("chat")
				.where("to", "==", rootState.auth.user.id)
				.orderBy("createdAt")
				.onSnapshot(querySnapshot => {
					querySnapshot.forEach(doc => {
						// statements
						// console.log(doc.data())
						fetchedMessagesTo.push(doc.data());
					});
				});
			chatDb
				.collection("chat")
				.where("from", "==", rootState.auth.user.id)
				.orderBy("createdAt")
				.onSnapshot(querySnapshot => {
					querySnapshot.forEach(doc => {
						// statements
						// console.log(doc.data())
						fetchedMessagesFrom.push(doc.data());
					});
				});
			userMessages.to = fetchedMessagesTo;
			userMessages.from = fetchedMessagesFrom;
			console.log(userMessages);
			commit("SET_MESSAGES", userMessages);
		},
		// getSentOfferUsers({ commit }, payload) {
		// 		console.log(payload);
		// 	for (let user in payload) {
		// 		// get users messages are being sent to
		// 	}
		// },
		// getRecievedOfferUsers({ commit }, payload) {
		// 	for (let user in payload) {
		// 		// get users sending to messages
		// 		console.log(payload[user].from);
		// 	}
		// }
	},
	mutations: {
		SET_MESSAGES(state, data) {
			state.messages = data;
		}
	}
};
