export default function AuthMiddleware({ next, store }) {
  //   console.log(store.getters["auth/isLoggedIn"]);
  if (!store.getters["auth/isLoggedIn"]) {
    return next({
      name: "login"
    });
  }

  return next();
}
