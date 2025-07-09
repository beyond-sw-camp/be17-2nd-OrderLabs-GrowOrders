import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import BuyerList from "../views/order/BuyerList.vue";
import FarmList from "../views/order/FarmList.vue";
import FarmerList from "../views/order/FarmerList.vue";
import OrderDetail from "../views/order/OderDetail.vue";

// 알림 추가
import Notification from "../views/Notification.vue";
// 생물 등록
import Crop_register from "../views/Crop_register.vue";
// 농장 등록
import Farm_register from "../views/Farm_register.vue";
// 판매량 조회
import Sales from '@/views/Sales.vue'

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/buyerlist",
    name: "BuyerList",
    component: BuyerList,
  },
  {
    path: '/orders/:orderId',
    name: 'OrderDetail',
    component: OrderDetail,
    props: true
  },
  {
    path: "/farmlist",
    name: "FarmList",
    component: FarmList
  },
  {
    path: "/farmerlist",
    name: "FarmerList",
    component: FarmerList
  },
  // 알림 추가
  {
    path: "/notification",
    name: "Notification",
    component: Notification
  },
  // 생물 추가
  {
    path: "/crop-register",
    name: "Crop Register",
    component: Crop_register
  },
  // 농장 추가
  {
    path: "/farm-register",
    name: "Farm Register",
    component: Farm_register
  },
  // 판매량 조회
  {
    path: '/sales',
    name: 'Sales',
    component: Sales,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
