import Api from "@/services/Api";

export default {
    cartAdd(payload) {
        return Api().post('carts/carts', payload);
    }
}