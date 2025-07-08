<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useUserStore } from '@/store/users/login.js';

import SidenavItem from "./SidenavItem.vue";

const store = useStore();
const isRTL = computed(() => store.state.isRTL);
const userStore = useUserStore();

let type = ref(1);

// 로그인 타입 확인
const checkType = async () => {
  if (!userStore.userInfo || typeof userStore.userInfo.type === 'undefined') {
    console.warn("userInfo가 아직 로드되지 않았습니다.");
    type.value = null;
    return;
  }

  type.value = userStore.userInfo.type;
  console.log("로그인 타입:", type.value);
};


const getRoute = () => {
  const route = useRoute();
  const routeArr = route.path.split("/");
  return routeArr[1];
};

onMounted(() => {
  userStore.checkLogin();
  checkType();
});

</script>
<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item" v-if="type === 1">
        <sidenav-item
          to="/dashboard-default"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="isRTL ? 'لوحة القيادة' : '농부 메인 화면'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item" v-if="type === 2">
        <sidenav-item
          to="/billing"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="isRTL ? 'لوحة القيادة' : '주문자 메인 화면'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item
          to="/buyerlist"
          :class="getRoute() === 'tables' ? 'active' : ''"
          :navText="isRTL ? 'الجداول' : '주문관리'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item
          to="/farmlist"
          :class="getRoute() === 'tables' ? 'active' : ''"
          :navText="isRTL ? 'الجداول' : '상품 검색'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-basket text-success text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item"  v-if="type === 1">
        <sidenav-item
          to="/tables"
          :class="getRoute() === 'tables' ? 'active' : ''"
          :navText="isRTL ? 'الجداول' : '재고관리'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item" v-if="type === 1">
        <sidenav-item
          to="/billing"
          :class="getRoute() === 'billing' ? 'active' : ''"
          :navText="isRTL ? 'الفواتیر' : '농장등록'"
        >
          <template v-slot:icon>
            <i class="ni ni-credit-card text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <!--생물등록 to 수정-->
      <li class="nav-item" v-if="type === 1">
        <sidenav-item
          to="/crop-register"
          :class="getRoute() === 'virtual-reality' ? 'active' : ''"
          :navText="isRTL ? 'الواقع الافتراضي' : '생물등록'"
        >
          <template v-slot:icon>
            <i class="ni ni-app text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item
          to="/rtl-page"
          :class="getRoute() === 'rtl-page' ? 'active' : ''"
          navText="배송관리"
        >
          <template v-slot:icon>
            <i class="ni ni-world-2 text-danger text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="mt-3 nav-item">
        <h6
          v-if="isRTL"
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="isRTL ? 'me-4' : 'ms-2'"
        >
          صفحات المرافق
        </h6>

        <h6
          v-else
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="isRTL ? 'me-4' : 'ms-2'"
        >
          ACCOUNT PAGES
        </h6>
      </li>

      <li class="nav-item">
        <sidenav-item
          to="/profile"
          :class="getRoute() === 'profile' ? 'active' : ''"
          :navText="isRTL ? 'حساب تعريفي' : 'Profile'"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>
</template>
