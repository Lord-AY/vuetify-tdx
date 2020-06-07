import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
// import middlewarePipeline from "./middlewarePipeline";
import Home from "../views/Home.vue";
import activation from "../views/activation.vue";
import userRegister from "../views/Register.vue";
import p404 from "../views/404.vue";
import sample from '@/views/sample.vue';
import ProductDetails from "../views/ProductDetails.vue";
import signin from "../views/Signin.vue";
import reset from "../views/Resetpass.vue";
import maindashboard from "../views/dashboard-carspot.vue";
// import gridlist from "../views/Gridlist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/activation-successful",
    component: activation,
    name: "activation"
  },
    {
    path: "/sample",
    component: sample,
    name: "sample"
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/register/:referal?",
    name: "register",
    // component: () => import("../views/Register.vue"),
    component: userRegister,
   beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      // header: 1
    }
  },
  {
    path: "/login",
    name: "login",
    component: signin,
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (auth) {
        next({ name: "home" });
      }
      next();
    },
    meta: {
      // header: 1
    }
  },
  {
    path: "/reset",
    name: "reset",
    component: reset,
  beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 0
    }
  },
  {
    path: "/valueadded",
    name: "valAdd",
    component: () => import("../views/val-add.vue"),
    meta: {
      header: 1
    }
  },
  {
    path: "/valueind",
    name: "valind",
    component: () => import("../views/val-ind.vue"),
    meta: {
      header: 1
    }
  },
   {
    path: "/search/:keyword",
    name: "search",
    component: () => import("../views/search.vue"),
    meta: {
      header: 1
    }
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
     beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 1
    }
  },
  {
    path: "/overview",
    name: "productoverview",
    component: () => import("../views/ProductOverview.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/referal",
    name: "referalll",
    component: () => import("../views/ref.vue"),
      beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 1
    }
  },
  {
    path: "/productDetails",
    name: "productDetails",
    component: () => import("../views/ProductDetails.vue"),
    meta: {
      header: 1
    },
    beforeEnter: (to, from, next) => {
      if (to === from) {
        window.location.reload();
        return next();
      } else {
        next();
      }
    }
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/Categories.vue"),
    meta: {
      header: 1
    }
  },
  {
    path: "/listbillers",
    name: "listbillers",
    component: () => import("../views/listbillers.vue"),
    meta: {
      header: 1
    },
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
  },
  {
    path: "/billercategory/:category",
    name: "billercategory",
    component: () => import("../views/billersCategory.vue"),
    meta: {
      header: 1
    },
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
  },
  {
    path: "/paymentitem",
    name: "paymentitem",
    component: () => import("../views/billerspaymentitem.vue"),
    meta: {
      header: 1
    },
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
  },
  {
    path: "/comparison",
    name: "comparison",
    component: () => import("../views/Comparison.vue"),
    meta: {
      header: 1
    },
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      header: 3
    },
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      header: 1
    }
  },
  {
    path: "/maindashboard",
    name: "maindashboard",
    component: () => import("../views/dashboard-carspot.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/editProfile",
    name: "EditProfile",
    component: () => import("../views/edit-profile-carspot.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/messaging",
    name: "messaging",
    component: () => import("../views/messaging.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/publishedInventory",
    name: "publishedinventory",
    component: () => import("../views/published-inventory.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/expired",
    name: "expired",
    component: () => import("../views/expired.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/sold",
    name: "sold",
    component: () => import("../views/sold.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/pending",
    name: "pending",
    component: () => import("../views/pending.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/saved",
    name: "saved",
    component: () => import("../views/saved.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/ordersInventory",
    name: "ordersInventory",
    component: () => import("../views/ordersInventory.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/wallet",
    name: "wallet",
    component: () => import("../views/wallet.vue"),
    meta: {
      header: 5
    }
  },
  {
    path: "/wallet-deposit",
    name: "wallet-deposit",
    component: () => import("../views/wallet-deposit.vue"),
    meta: {
      header: 5
    }
  },
  {
    path: "/refferal",
    name: "referals",
    component: () => import("../views/refferal.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("../views/Favorite.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("../views/Orders.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 5
    }
  },
  {
    path: "/postad",
    name: "postad",
    component: () => import("../views/PostAd.vue"),
    beforeEnter: (to, from, next) => {
      let auth = store.getters["auth/isLoggedIn"];
      if (!auth) {
        next({ name: "login" });
      }
      next();
    },
    meta: {
      header: 1
    }
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue"),
    meta: {
      header: 5
    }
  },
  {
    path: "/mainsettings",
    name: "mainsettings",
    component: () => import("../views/settings-carspot.vue"),
    meta: {
      header: 5
    }
  },
  {
    path: "/gridlist",
    name: "gridlist",
    component: () => import("../views/Gridlist.vue"),
    meta: {
      header: 1,
    }
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/List.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/rating",
    name: "rating",
    component: () => import("../views/Rating.vue"),
    meta: {
      header: 5
    }
  },
  {
    path: "*",
    component: p404,
    meta: {
      header: 2
    }
  }
];
// mode: "history",
// mode: "hash",
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
