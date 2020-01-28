import Api from "@/services/Api";

export default {
    getWallet(userId) {
        return Api().get(`users/${userId}/wallet`);
    },
    createWallet(userId) {
        return Api().post(`users/${userId}/wallet`);
    },
    postPayment(payload) {
        return Api().post('webpay/payment', payload);
    }
};
