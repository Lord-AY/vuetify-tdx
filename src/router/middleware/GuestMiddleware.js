import store from "@/store";
export default ({ next }) => {
  if (store.getters["auth/isLoggedIn"]) {
    return next({
      name: "home"
    });
  }
  return next();
};
