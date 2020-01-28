import Api from "@/services/Api";

export default {
  update(userId, updates) {
    return Api().put("users/" + userId, updates);
  },
  user(userId) {
    return Api().get(`users/${userId}`);
  },
  createWallet(userId) {
    return Api().post(`users/${userId}/wallet`);
  },
  getWallet(userId) {
    return Api().get(`users/${userId}/wallet`);
  }
};
