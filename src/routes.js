import Index from "./views/Index";
import Orders from "./views/orders";
import OrderDetails from "./views/Orders/OrderDetails";
import Settings from "./views/settings";
import Register from "./views/Auth/Register";
import Login from "./views/Auth/Login";
import Users from "./views/Users";
import Ingredients from "./views/ingridients";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    showInSidebar: true,
  },

  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-tv-2 text-primary",
    component: Orders,
    layout: "/admin",
    showInSidebar: true,
  },
  {
    path: "/order/:orderid",
    name: "OrdersDetails",
    icon: "ni ni-tv-2 text-primary",
    component: OrderDetails,
    layout: "/admin",
    showInSidebar: false,
  },
  {
    path: "/admin-settings",
    name: "Setup",
    icon: "ni ni-tv-2 text-primary",
    component: Settings,
    layout: "/admin",
    showInSidebar: true,
  },
  {
    path: "/users",
    name: "Users/Customers",
    icon: "ni ni-tv-2 text-primary",
    component: Users,
    layout: "/admin",
    showInSidebar: true,
  },
  {
    path: "/ingredients",
    name: "Ingredients",
    icon: "ni ni-tv-2 text-primary",
    component: Ingredients,
    layout: "/admin",
    showInSidebar: true,
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin",
  // showInSidebar: true,
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin",
  // showInSidebar: true,
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // showInSidebar: true,
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  // showInSidebar: true,
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
