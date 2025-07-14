import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import { useUserStore } from "@/store/users/login.js";

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(createPinia())
appInstance.use(router);
appInstance.use(ArgonDashboard);

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (to.path === "/") {
        const type = userStore.userInfo?.type;

        if (type === 1) {
            next({ name: "FarmerDashboard" });
        } else if (type === 2) {
            next({ name: "BuyerDashboard" });
        } else {
            next({ name: "Signin" });
        }
    } else {
        next(); // 다른 페이지는 그대로 진행
    }
});

appInstance.mount("#app");
