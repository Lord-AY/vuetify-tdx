import ash from "lodash";
export default {
	namespaced: true,
	state: {
		messagesTo: {
			to: [
				{
					to: 2,
					message: "Send you an invite",
					from: 1
				},
				{
					to: 2,
					message: "Added the link now",
					from: 1
				}
			]
		},
		messagesFrom: {
			from: [
				{
					to: 1,
					message: "Did you see my mail",
					from: 2
				},
				{
					to: 1,
					message: "I sent you a link to join",
					from: 2
				}
			]
		},
		sentUsers: null,
		recievedUsers: null
	},
	getters: {
		getMessages(state) {
			// if (state.messages !== null && state.messages !== undefined) {
			// 	return state.messages;
			// }
			let fullMessages = {...state.messagesTo, ...state.messagesFrom };
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
			console.log(fetchedMessagesTo);
			userMessages.to = fetchedMessagesTo;
			userMessages.from = fetchedMessagesFrom;
			// const temp = userMessages.concat(fetchedMessagesFrom, fetchedMessagesTo);
			console.log(userMessages);
			commit("SET_MESSAGES", userMessages);
		},
		getSentOfferUsers({ commit }, payload) {
			console.log(payload);
			for (let user in payload) {
				// get users messages are being sent to
			}
		},
		getRecievedOfferUsers({ commit }, payload) {
			for (let user in payload) {
				// get users sending to messages
				console.log(payload[user].from);
			}
		}
	},
	mutations: {
		SET_MESSAGES(state, data) {
			state.messages = data;
		}
	}
};
