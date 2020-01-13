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
			if (state.messages !== null && state.messages !== undefined) {
				return state.messages;
			}
			return;
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
			// commit("SET_MESSAGES_TO", fetchedMessagesTo);
			// commit("SET_MESSAGES_FROM", fetchedMessagesFrom);
			// console.log(fetchedMessagesFrom);
			// console.log(fetchedMessagesTo);

			// console.log(rootState.chat.messages);
		},
		getSentOfferUsers({ commit }, payload) {
			const npload = payload;
			// console.log(npload);
			for(let user in npload) {
				console.log(npload);
			}
			// payload.forEach(user => {
				// get users messages are being sent to
				// console.log(payload[user]);
				// UserService.user(payload[user].from)
				// 	.then(({ data }) => {
				// 		console.log(data);
				// 	})
				// 	.catch(error => {
				// 		console.log(error);
				// 	});
			// });
			// console.log(payload[user].to);
		},
		getRecievedOfferUsers({ commit }, payload) {
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
