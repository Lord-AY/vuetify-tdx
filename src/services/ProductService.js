import Api from "@/services/Api";

export default {
  products() {
    return Api().get("product/product");
  },
  product(credentials) {
    return Api().get(`product/${credentials.id}`);
  },
  categories() {
    return Api().get("product/categories");
  },
  similarProducts(product, token) {
    return Api().get(`product/similar/${product.cid}/${product.id}`, {
      headers: {
        "x-access-token": token
      }
    });
  },
  createProduct(credentials, token) {
    return Api().post("product/product", credentials, {
      headers: {
        "x-access-token": token
      }
    });
  },
  comments() {
    return Api().get("product/comments/allcomment");
  }
};
