import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import userRegister from "../views/Register.vue";
import p404 from "../views/404.vue";
// import productoverview from "../views/ProductOverview.vue";
// import signin from "../views/Signin.vue";
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
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/register",
    name: "register",
    // component: () => import("../views/Register.vue"),
    component: userRegister,
    meta: {
      header: 1
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Signin.vue"),
    meta: {
      header: 1
    }
  },
  {
    path: "/valueadded",
    name: "valAdd",
    component: () => import("../views/val-add.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/valueind",
    name: "valind",
    component: () => import("../views/val-ind.vue"),
    meta: {
      header: 3
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
    name: "referal",
    component: () => import("../views/ref.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/productDetails/:id/:cid",
    name: "productDetails",
    component: () => import("../views/ProductDetails.vue"),
    meta: {
      header: 1
    }
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/Categories.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/comparison",
    name: "comparison",
    component: () => import("../views/Comparison.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      header: 3
    }
  },
  // {
  //   path: "/dashboard",
  //   name: "dashboard",
  //   component: () => import("../views/Dashboard.vue"),
  //   meta: {
  //     header: 3
  //   }
  // },
  {
    path: "/maindashboard",
    name: "dashboard",
    component: () => import("../views/dashboard-carspot.vue"),
    meta: {
      header: 2
    }
  },
  {
    path: "/editProfile",
    name: "Edit Profile",
    component: () => import("../views/edit-profile-carspot.vue"),
    meta: {
      header: 2
    }
  },
  {
    path: "/messaging",
    name: "messaging",
    component: () => import("../views/messaging.vue"),
    meta: {
      header: 2
    }
  },
  {
    path: "/publishedInventory",
    name: "publishedinventory",
    component: () => import("../views/published-inventory.vue"),
    meta: {
      header: 2
    }
  },
  {
    path: "/ordersInventory",
    name: "ordersInventory",
    component: () => import("../views/ordersInventory.vue"),
    meta: {
      header: 2
    }
  },
  {
    path: "/refferal",
    name: "refferal",
    component: () => import("../views/refferal.vue"),
    meta: {
      header: 2
    }
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("../views/Favorite.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("../views/Orders.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/postad",
    name: "postad",
    component: () => import("../views/PostAd.vue"),
    meta: {
      header: 1
    }
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue"),
    meta: {
      header: 3
    }
  },
  {
    path: "/mainsettings",
    name: "settings",
    component: () => import("../views/settings-carspot.vue"),
    meta: {
      header: 2
    }
  },
  {
    path: "/gridlist",
    name: "gridlist",
    component: () => import("../views/Gridlist.vue"),
    meta: {
      header: 1
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
      header: 2
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

const router = new VueRouter({
  mode: "history",
  base: './',
  routes
});
// base: process.env.BASE_URL,
export default router;
