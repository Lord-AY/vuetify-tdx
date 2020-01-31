import Api from "@/services/Api";

export default {
    getWallet(userId) {
        return Api().get(`users/${userId}/wallet`);
    },
    getWalletHistory(userId) {
        return Api().get(`users/${userId}/wallet/transactionslog`);
    },
    createWallet(userId) {
        return Api().post(`users/${userId}/wallet`);
    },
    postPayment(payload) {
        return Api().post("webpay/payment", payload);
    }
};
