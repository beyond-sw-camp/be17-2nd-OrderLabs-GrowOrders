<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
// 라우터 기능 추가 
import { useRoute } from "vue-router";
import ArgonAvatar from "@/components/ArgonAvatar.vue";
import img1 from "../../assets/img/logos/mastercard.png";
import team from "../../assets/img/orderlabs/boy.png"
// 알림 추가
import alarm from "../../assets/img/orderlabs/alarm_plus.png";

const store = useStore();
const isRTL = computed(() => store.state.isRTL);
defineProps({
  card: {
    type: Object,
    number: String,
    holderName: String,
    expiryDate: String,
    holderText: String,
    expiryText: String,
    background: String,
    default: () => ({
      number: "4562 1122 4594 7852",
      holderName: "심준보",
      expiryDate: "11/22",
      holderText: "카드 소유자",
      expiryText: "만기일",
      background: "dark",
    }),
  },
});

// 라우터 기능 추가
const getRoute = () => {
  const route = useRoute();
  const routeArr = route.path.split("/");
  return routeArr[1];
};

</script>
<template>
  <div class="card bg-transparent shadow-xl">
    <div
      class="overflow-hidden position-relative border-radius-xl"
      :style="{
        backgroundImage: 'url(' + require('@/assets/img/card-visa.jpg') + ')',
      }"
    >
      <span class="mask" :class="`bg-gradient-${card.background}`"></span>
      <div class="card-body position-relative z-index-1 p-3">
        <argon-avatar class="w-20 mt-3" :image="team" alt="logo" />
        <!-- <i class="fas fa-wifi text-white p-2" aria-hidden="true"></i> -->
        <h5 class="text-white mt-4 pb-2">
          {{ card.number }}
        </h5>
        

          <!--알림버튼 추가-->
          <router-link to="/notification">
          <div
            class="w-20 d-flex align-items-end justify-content-end">
            <argon-avatar 
            :class="getRoute() === 'notification' ? 'active' : ''"
            class="w-15 position-absolute" :style="{ top: '+30px', right: '+20px' }" :image="alarm" alt="logo" />
          </div>
        </router-link>
        

          <div class="d-flex">
            <div :class="isRTL ? 'ms-4' : 'me-4'">
              <p class="text-white text-sm opacity-8 mb-0">
                {{ card.holderText }}
              </p>
              <h6 class="text-white mb-0">{{ card.holderName }}</h6>
            </div>
            <div>
              <p class="text-white text-sm opacity-8 mb-0">
                {{ card.expiryText }}
              </p>
              <h6 class="text-white mb-0">{{ card.expiryDate }}</h6>
            </div>
          </div>
          <div
            class="w-20 d-flex align-items-end justify-content-end"
            :class="isRTL ? 'me-auto' : 'ms-auto'"
          >
            <argon-avatar class="w-60 mt-2" :image="img1" alt="logo" />
          </div>
        </div>
      </div>
    </div>
</template>
