import ash from "lodash";
export default {
	namespaced: true,
	state: {
		messagesTo: {},
		messagesFrom: {}
	},
	getters: {
		getMessagesTo(state) {
			if (state.messagesTo !== null && state.messagesTo !== undefined) {
				return state.messagesTo;
			}
			return;
		},
		getMessagesFrom(state) {
			if (state.messagesFrom !== null && state.messagesFrom !== undefined) {
				return state.messagesFrom;
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
		async fetchUserMessagesto({ commit, rootState }) {
				let fetchedMessagesTo = [];
				let users = await chatDb.collection("chat").where("to", "==", rootState.auth.user.id).orderBy("createdAt").get();
				users.forEach((userDoc) => {
				    fetchedMessagesTo.push(userDoc.data());
				});

				await Promise.all(fetchedMessagesTo);
				// console.log(fetchedMessagesTo)
				commit("SET_MESSAGES_TO",
					fetchedMessagesTo
				);
		},
		async fetchUserMessagesfrom({ commit, rootState }) {
				let fetchedMessagesFrom = [];

				let users = await chatDb.collection("chat").where("from", "==", rootState.auth.user.id).orderBy("createdAt").get();
				users.forEach((userDoc) => {
				    fetchedMessagesFrom.push(userDoc.data());
				});

				await Promise.all(fetchedMessagesFrom);
				// console.log(fetchedMessagesTo)
				commit("SET_MESSAGES_FROM",
					fetchedMessagesFrom
				);
		},
		getSentOfferUsers({ commit }, payload) {
			var parsedObj = JSON.parse(JSON.stringify(payload))
			console.log("start sent message")
			// console.log(parsedObj)

			for(let i in parsedObj){
				console.log(parsedObj[i])
			}
			// let keys = Object.keys(payload);
			// parsedyourElement.forEach(key => {
			//    let item = key;
			//    console.log(item);
			// })
		},
		getRecievedOfferUsers({ commit }, payload) {
			var parsedObj = JSON.parse(JSON.stringify(payload))
			console.log("start received message")

			for(let i in parsedObj){
				console.log(parsedObj[i])
			}
		}
	},
	mutations: {
		SET_MESSAGES_TO(state, to ) {
			state.messagesTo = to;
		},
		SET_MESSAGES_FROM(state, from ) {
			state.messagesFrom = from;
		}
	}
};
