import ash from "lodash";
export default {
	namespaced: true,
	state: {
		messagesTo: {},
		messagesFrom: {},
		sentOfferUsers: null,
		recievedOfferUsers: null,
		errors: null,
		success: null
	},
	getters: {
		getMessagesTo(state) {
			let FilteredMessageSenders = [];
			let fromUsers = [];
			let messagesTo = state.messagesTo;
			console.log(messagesTo);
			if (messagesTo !== null && messagesTo !== undefined) {
				for (let message in messagesTo) {
					fromUsers.push(messagesTo[message].from);
				}
				FilteredMessageSenders = ash.sortedUniq(fromUsers);
				// console.log(FilteredMessageSenders);
				return FilteredMessageSenders;
			}
			return;
		},
		getMessagesFrom(state) {
			if (
				state.messagesFrom !== null &&
				state.messagesFrom !== undefined
			) {
				// ash
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
					commit("auth/SET_LOADING", false, { root: true });
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
		getSentOfferUsers({ commit, state }, payload) {
			console.log("got to this action");
			console.log(payload);
			commit("auth/SET_LOADING", true, { root: true });
			// get all user details loggedin user sent messages to...
			let FilteredMessageSenders = [];
			let fromUsers = [];
			let fullUsersArray = [];
			// variable for state messages where userId is the from
			let messagesFrom = state.messagesFrom;
			// console.log(messagesFrom);
			if (messagesFrom !== null && messagesFrom !== undefined) {
				// loop through messages and get all userid in messagesFrom
				for (let message in messagesFrom) {
					// push each userid from message where loggedin user is from
					// into a new array
					fromUsers.push(messagesFrom[message].from);
				}
				// remove duplicate ids from array
				FilteredMessageSenders = ash.sortedUniq(fromUsers);
				// console.log(FilteredMessageSenders);
				// fetch users from db
				for (let userId in FilteredMessageSenders) {
					console.log(userId);
					return UserService.user(FilteredMessageSenders[userId])
						.then(({ data }) => {
							commit("auth/SET_LOADING", false, { root: true });
							fullUsersArray.push(data);
							// console.log(data)
						})
						.catch(error => {
							commit("auth/SET_LOADING", false, { root: true });
							console.log(error.response.data);
						});
					commit("SET_SENT_OFFERS", fullUsersArray);
				}
			}
		},
		getRecievedOfferUsers({ commit }, payload) {
			var parsedObj = JSON.parse(JSON.stringify(payload));
			// console.log("start received message");

			for (let i in parsedObj) {
				// console.log(parsedObj[i])
			}
		},
	},
	mutations: {
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
		},
		SET_SENT_OFFERS(state, data) {
			state.sentOfferUsers = data;
		},
		SET_RECIEVED_OFFERS(state, data) {
			state.recievedOfferUsers = data;
		}
	}
};
