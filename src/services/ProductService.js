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
  singleCategory(payload) {
    return Api().get(`product/categories/${payload.cid}`);
  },
  subcategory(payload) {
    return Api().get(`product/subcategory/${payload.cid}`);
  },
  similar(product) {
    return Api().get(`product/similar/${product.cid}/${product.id}`);
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
  },
  singleProductcomments(pid) {
    return Api().get(`product/comments/${pid}`);
  }
};
