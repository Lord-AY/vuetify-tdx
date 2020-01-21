import ash from "lodash";
import UserService from "@/services/UserService";
export default {
	namespaced: true,
	state: {
		messages: null,
		errors: null,
		success: null
	},
	getters: {
		getUserMessages(state, getters, rootState) {
			// console.log(rootState);
			let filteredUserMessages = [];
			let messages = state.messages;
			// console.log(messages);
			if (messages !== null && messages !== undefined) {
				for (let message in messages) {
					// get users id loggedin user sent messages to
					if (rootState.auth.user.id == messages[message].senderId || rootState.auth.user.id == messages[message].recieverId) {
						filteredUserMessages.push(messages[message]);
					}
				}
				return filteredUserMessages;
			};
			return;
		},
	sentOfferUsers(state, getters, rootState) {
      let messages = state.messages;
      let loggedInUser = rootState.auth.user.id;
      let sentOfferUsers = [];
      for(var i = 0, length3 = messages.length; i < length3; i++){
        if(loggedInUser == messages[i].senderId) {
        	sentOfferUsers.push(messages[i]);
        }
      };
      return sentOfferUsers;
    },
    recievedOfferUsers(state, getters, rootState) {
      let messages = state.messages;
      // console.log(messages);
      let loggedInUser = rootState.auth.user.id;
      let recievedOfferUsers = [];
      for(var i = 0, length3 = messages.length; i < length3; i++){
        if(loggedInUser == messages[i].recieverId) {
        	recievedOfferUsers.push(messages[i]);
        }
      };
      return recievedOfferUsers;
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
					commit("SET_ERRORS", error.response.data);
				});
			}).catch(error => {
					commit("SET_ERRORS", error);
			});
		},
		async fetchMessages({ commit, rootState }) {
			commit("auth/SET_LOADING", true, { root: true });
			commit("SET_SUCCESS_MSG", null);
			commit("SET_ERRORS", null);
			let fetchedMessages = [];
			let users = chatDb.collection("chat").orderBy('createdAt');
				await users.onSnapshot(snapshot => {
		          snapshot.forEach(doc => {
 				  		// let doc = userDoc.doc;
 				  		// console.log(doc.data());
						fetchedMessages.push(doc.data());
				  });
		        });

			await Promise.all(fetchedMessages);
			commit("SET_MESSAGES", fetchedMessages);
			commit("auth/SET_LOADING", false, { root: true });
			commit("SET_SUCCESS_MSG", null);
			commit("SET_ERRORS", null);
			// console.log(rootState.chat.messages);
		}
	},
	mutations: {
		SET_MESSAGES(state, data) {
			state.messages = data;
		},
		SET_SUCCESS_MSG(state, success) {
			state.success = success;
		},
		SET_ERRORS(state, errors) {
			state.errors = errors;
		},
	}
};
