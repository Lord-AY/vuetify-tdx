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
  },
  similarProducts(product, token) {
    return Api().get(`product/similar/${product.cid}/${product.id}`, {
      headers: {
        "x-access-token": token
      }
    });
  }
};
