import ash from "lodash";
import UserService from "@/services/UserService";
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
		getMessagesUserTo(state, getters, rootState) {
			// console.log(rootState);
			let filteredSentMessageUsers = [];
			let toUsers = [];
			let messagesTo = state.messagesFrom;
			// console.log(messagesTo);
			if (messagesTo !== null && messagesTo !== undefined) {
				for (let message in messagesTo) {
					// get users id loggedin user sent messages to
					if (rootState.auth.user.id == messagesTo[message].from) {
						toUsers.push(messagesTo[message].to);
					}
				}
				// filter ids to be unique
				filteredSentMessageUsers = ash.sortedUniq(toUsers);
				console.log(filteredSentMessageUsers);
				return filteredSentMessageUsers;
			}
			return;
		},
		getMessagesUserFrom(state, getters, rootState) {
			let filteredMessagesSent = [];
			let fromUsers = [];
			let messagesTo = state.messagesTo;
			// console.log(messagesTo);
			if (messagesTo !== null && messagesTo !== undefined) {
				for (let message in messagesTo) {
					// get user id loggedin user recieved messages from
					if (rootState.auth.user.id == messagesTo[message].to) {
						fromUsers.push(messagesTo[message].from);
					}
				}
				// filter ids to be unique
				filteredMessagesSent = ash.sortedUniq(fromUsers);
				console.log(filteredMessagesSent);
				return filteredMessagesSent;
			}
			return;
		},
		userSentOffers(state) {
			if(state.sentOfferUsers !== null && state.sentOfferUsers !== undefined) {
				return state.sentOfferUsers;
			}
			return null;
		},
		userRecievedOffers(state) {
			if(state.recievedOfferUsers !== null && state.recievedOfferUsers !== undefined) {
				return state.recievedOfferUsers;
			}
			return null;
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
			// fetch the message reciever details
			UserService.user(payload.recieverId)
			.then(({data}) => {
				// add the fetched user details to the original payload
				payload.recieverName = data.firstname + " " + data.lastname;
				payload.recieverAvatar = data.pictureUrl;
				// store message to firestore database
				chatDb
				.collection("chat")
				.add({
					senderId: payload.senderId,
					senderName: payload.senderName,
					senderAvatar: payload.senderAvatar,
					recieverId: payload.recieverId,
					recieverName: payload.recieverName,
					recieverAvatar: payload.recieverAvatar,
					message: payload.message
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
					commit("SET_ERRORS", error);
				});
			}).catch(error => {
					commit("SET_ERRORS", error);
			});
		},
		async fetchUserMessagesto({ commit, rootState }) {
			commit("auth/SET_LOADING", true, { root: true });
			commit("SET_SUCCESS_MSG", null);
			commit("SET_ERRORS", null);
			let fetchedMessagesTo = [];
			let users = chatDb
				.collection("chat")
				.where("to", "==", rootState.auth.user.id)
				.orderBy("createdAt");
				await users.onSnapshot((snapshot) => {
		          snapshot.forEach((userDoc) => {
 				  		// let doc = userDoc.doc;
						fetchedMessagesTo.push(userDoc.data());
				  });
		        });

			await Promise.all(fetchedMessagesTo);
			// console.log(fetchedMessagesTo)
			commit("auth/SET_LOADING", false, { root: true });
			commit("SET_SUCCESS_MSG", null);
			commit("SET_ERRORS", null);
			commit("SET_MESSAGES_TO", fetchedMessagesTo);
		},
		// async fetchUserMessagesfrom({ commit, rootState }) {
		// 	let fetchedMessagesFrom = [];

		// 	let users = await chatDb
		// 		.collection("chat")
		// 		.where("from", "==", rootState.auth.user.id)
		// 		.orderBy("createdAt")
		// 		.get();
		// 	users.forEach(userDoc => {
		// 		fetchedMessagesFrom.push(userDoc.data());
		// 	});

		// 	await Promise.all(fetchedMessagesFrom);
		// 	// console.log(fetchedMessagesTo)
		// 	commit("SET_MESSAGES_FROM", fetchedMessagesFrom);
		// },
		async fetchUserMessagesfrom({ commit, rootState }) {
			let fetchedMessagesFrom = [];

			let users = chatDb
				.collection("chat")
				.where("from", "==", rootState.auth.user.id)
				.orderBy("createdAt");

				await users.onSnapshot((snapshot) => {
		          snapshot.forEach((userDoc) => {
 				  		// let doc = userDoc.doc;
						fetchedMessagesFrom.push(userDoc.data());
				  });
		        })

			await Promise.all(fetchedMessagesFrom);
			// console.log(fetchedMessagesTo)
			commit("SET_MESSAGES_FROM", fetchedMessagesFrom);
		},
		getSentOfferUsers({ commit, rootState }, payload) {
			commit("auth/SET_LOADING", true, { root: true });
			commit("SET_SUCCESS_MSG", null);
			commit("SET_ERRORS", null);
			console.log("got to this action");
			let fullUsersArray = [];
			// console.log(payload);
			commit("auth/SET_LOADING", true, { root: true });
			// get all user details the loggedin user sent messages to...
			for (let i = 1; payload.length < i; i++) {
				console.log(payload[i]);
				// console.log(FilteredMessageRecievers[userId]);
				UserService.user(payload[i])
					.then(({ data }) => {
						commit("auth/SET_LOADING", false, { root: true });
						fullUsersArray.push(data);
						commit("SET_SENT_OFFERS", fullUsersArray);
						// console.log(fullUsersArray);
					})
					.catch(() => {
						commit("auth/SET_LOADING", false, { root: true });
						commit("SET_ERRORS", "Network Error, Couldn connect to server");
					});
			}
		},
		getRecievedOfferUsers({ commit }, payload) {
			commit("auth/SET_LOADING", true, { root: true });
			commit("SET_SUCCESS_MSG", null);
			commit("SET_ERRORS", null);
			console.log("got to this action");
			let fullUsersArray = [];
			console.log(payload);
			commit("auth/SET_LOADING", true, { root: true });
			// get all user details the loggedin user sent messages to...
			for (let userId in payload) {
				// console.log(payload);
				// console.log(FilteredMessageRecievers[userId]);
				UserService.user(payload[userId])
					.then(({ data }) => {
						commit("auth/SET_LOADING", false, { root: true });
						fullUsersArray.push(data);
						commit("SET_RECIEVED_OFFERS", fullUsersArray);
						// console.log(fullUsersArray);
					})
					.catch(() => {
						commit("auth/SET_LOADING", false, { root: true });
						commit("SET_ERRORS", "Network Error, Couldn connect to server");
					});
			}
		}
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
