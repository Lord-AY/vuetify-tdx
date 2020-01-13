import ash from "lodash";
export default {
	namespaced: true,
	state: {
		messagesTo: [],
		messagesFrom: [],
		sentUsers: null,
		recievedUsers: null
	},
	getters: {
		getMessages(state) {
			let fullMessages = [];
			fullMessages.push(state.messagesTo);
			fullMessages.push(state.messagesFrom);
			return fullMessages;
		}
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
			// console.log(fetchedMessagesTo);
			// userMessages.to = fetchedMessagesTo;
			// userMessages.from = fetchedMessagesFrom;
			// const temp = userMessages.concat(fetchedMessagesFrom, fetchedMessagesTo);
			// console.log(userMessages);
			commit("SET_MESSAGES_TO", fetchedMessagesTo);
			commit("SET_MESSAGES_FROM", fetchedMessagesFrom);
		},
		getSentOfferUsers({ commit }, payload) {
			for (let user in payload) {
				// get users messages are being sent to
			User
			console.log(payload[user].to);
			}
		},
		getRecievedOfferUsers({ commit }, payload) {
			for (let user in payload) {
				// get users messages are being sent from
				console.log(payload[user].from);
			}
		}
	},
	mutations: {
		SET_MESSAGES_TO(state, data) {
			state.messagesTo = data;
		},
		SET_MESSAGES_FROM(state, data) {
			state.messagesFrom = data;
		}
	}
};
