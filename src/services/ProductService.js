import Api from "@/services/Api";

export default {
  products(token) {
    return Api().get("product/product", {
      headers: {
        "x-access-token": token
      }
    });
  },
  categories(token) {
    return Api().get("product/categories", {
      headers: {
        "x-access-token": token
      }
    });
  }
};
