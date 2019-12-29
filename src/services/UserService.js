import Api from "@/services/Api";

export default {
  update(userId, updates) {
    return Api().put("users/" + userId, updates);
  }
};
