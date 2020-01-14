import Api from "@/services/Api";

export default {
  billers() {
    return Api().get("qtell/getbillers");
  },
};
