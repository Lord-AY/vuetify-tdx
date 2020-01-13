import Api from "@/services/Api";

export default {
  service() {
    return Api().get("qtell/getbillers");
  },
};
