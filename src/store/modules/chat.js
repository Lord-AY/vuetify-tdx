import ash from "lodash";
export default {
	namespaced: true,
	state: {
		messages: {},
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
			let userMessages = {};
			chatDb
				.collection("chat")
				.where("to", "==", rootState.auth.user.id)
				.orderBy("createdAt")
				.onSnapshot(querySnapshot => {
					querySnapshot.forEach(doc => {
						// statements
						// console.log(doc.data())
						// commit("SET_MESSAGES_TO", doc.data());
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
						// commit("SET_MESSAGES_FROM", doc.data());
					});
				});
			// console.log(fetchedMessagesTo);
			userMessages.to = fetchedMessagesTo;
			userMessages.from = fetchedMessagesFrom;
			// console.log(userMessages);
			commit("SET_MESSAGES", {
				to: fetchedMessagesTo,
				from: fetchedMessagesFrom
			});
			// const temp = userMessages.concat(fetchedMessagesFrom, fetchedMessagesTo);
			// console.log(userMessages);
			commit("SET_MESSAGES_TO", fetchedMessagesTo);
			commit("SET_MESSAGES_FROM", fetchedMessagesFrom);
			// console.log(fetchedMessagesFrom);
			// console.log(fetchedMessagesTo);

			// console.log(rootState.chat.messages);
		},
		getSentOfferUsers({ commit }, payload) {
			console.log(payload)
			// for (let user in payload) {
			// 	// get users messages are being sent to
			// 	User;
			// 	console.log(payload[user].to);
			// }
		},
		getRecievedOfferUsers({ commit }, payload) {
			console.log(payload)
			for (let user in payload) {
				// get users messages are being sent from
				console.log(payload[user].from);
			}
		}
	},
	mutations: {
		SET_MESSAGES(state, { to, from }) {
			state.messages.to = to;
			state.messages.from = from;
		}
	}
};
