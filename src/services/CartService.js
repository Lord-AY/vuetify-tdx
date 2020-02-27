import Api from "@/services/Api";

export default {
    cartAdd(payload) {
        return Api().post('carts/carts', payload);
    },
    getCart(userId) {
        return Api().get(`carts/carts/${userId}`);
    }
}