import { createRouter, createWebHistory } from "vue-router";
import FarmerDashboard from "../views/Dashboard.vue";
import BuyerDashboard from "../views/BuyerDashboard.vue";
import Tables from "../views/Tables.vue";
import VirtualReality from "../views/VirtualReality.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import BuyerList from "../views/order/BuyerList.vue";
import FarmList from "../views/order/FarmList.vue";
import FarmerList from "../views/order/FarmerList.vue";
import OrderDetail from "../views/order/OderDetail.vue";
import OrderCreate from "../views/order/OrderCreate.vue";
import Error from "../views/Error.vue";

// 알림 추가
import Notification from "../views/Notification.vue";
// 생물 등록
import Crop_register from "../views/Crop_register.vue";
// 농장 등록
import Farm_register from "../views/Farm_register.vue";
// 판매량 조회
import Sales from "@/views/Sales.vue";
// 재고 관리
import Inventory from "@/views/Inventory.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: Signin
  },
  {
    path: "/farmer/dashboard",
    name: "FarmerDashboard",
    component: FarmerDashboard
  },
  {
    path: "/buyer/dashboard",
    name: "BuyerDashboard",
    component: BuyerDashboard
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality
  },
  {
    path: "/error",
    name: "Error",
    component: Error
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/buyerlist",
    name: "BuyerList",
    component: BuyerList
  },
  {
    path: "/orders/:orderId",
    name: "OrderDetail",
    component: OrderDetail,
    props: true,
  },
  {
    path: "/Farms/:FarmId",
    name: "OrderCreate",
    component: OrderCreate,
    props: true,
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
    path: "/sales",
    name: "Sales",
    component: Sales
  },
  // 재고 관리
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory,
    children: [
      {
        path: ":farm_index",
        name: "InventorysTable",
        component: () => import("@/views/components/InventorysTable.vue"),
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
