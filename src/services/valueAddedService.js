import Api from "@/services/Api";

export default {
    billers() {
        return Api().get("qtell/getbillers");
    },
    payment(payload) {
        return Api().get(`qtell/getbillerpaymentitem/${payload.payId}`);
    },
    paymentOption(payload) {
        return Api().post("qtell/customers/validations", payload);
    },
    advice(payload) {
        return Api().post("qtell/payments/advices", payload);
    }
};
