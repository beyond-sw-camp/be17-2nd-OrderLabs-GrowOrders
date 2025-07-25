<script setup>
// import { useRouter } from 'vue-router'

import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
// import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import Carousel from "./components/Carousel.vue";
import CategoriesList from "./components/CategoriesList.vue";

// import US from "@/assets/img/orderlabs/girl.png";
// import DE from "@/assets/img/orderlabs/boy.png";
// import GB from "@/assets/img/orderlabs/man.png";
// import BR from "@/assets/img/orderlabs/woman.png";

import ProjectCard from "./components/ProjectCard.vue";

import logoXD from "@/assets/img/orderlabs/sun.png";
import logoAtlassian from "@/assets/img/orderlabs/icon-sun-cloud.png";
import logoSlack from "@/assets/img/orderlabs/temperature.png";
import logoSpotify from "@/assets/img/orderlabs/product.png";
import logoJira from "@/assets/img/orderlabs/humidity.png";
import logoInvision from "@/assets/img/orderlabs/co2.png";

import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";

const defaultLogos = [
  logoXD, logoAtlassian, logoSlack, logoSpotify, logoJira, logoInvision,
];

const defaultTeams = [
  [team1, team2, team3, team4],
  [team1, team2],
  [team2, team4],
  [team1, team2, team3, team4],
  [team1],
  [team1, team4],
];

const rows = computed(() => {
  if (!state.farmMonitoringData.farm_monitoring) return [];

  return state.farmMonitoringData.farm_monitoring.map((item, idx) => ({
    logo: defaultLogos[idx] || logoXD, // 기본로고 할당
    tool: `${item.indicator} (${item.unit})`,
    teamMembers: defaultTeams[idx] || [team1, team2],
    price: item.value.toString(),
    progress: parseInt(item.status.replace('%', ''), 10),
  }));
});

const cardDescription = computed(() => {
  const date = state.farmMonitoringData.date || '';
  return `<i class="fa fa-check text-info" aria-hidden="true"></i>
          <span class="font-weight-bold ms-1">농장 지표</span> ${date}`;
});

import api from '@/api/dashboard'
import { onMounted, computed, reactive } from 'vue';

const state = reactive({
  summaryData: [],
  farmMonitoringData: [],
  chartData: [],
  farmStatus: {},
  orderList: []
});

const getData = async () => {

  const getSummary = await api.dashboardNav() ?? {};
  const getFarmstatus = await api.farmStatus() ?? {};
  const getChart = await api.chartData() ?? {};
  const getStatus = await api.farmStatus() ?? {};

  state.summaryData = getSummary.summary ?? [];
  state.farmMonitoringData = getFarmstatus;
  state.chartData = getChart;
  state.farmStatus = getStatus;
};

const getOrderList = async () => {
  state.orderList = await api.orderList();
}

// 이미지 동적 로드를 위한 함수
const getImageUrl = (imgName) => {
  try {
    return require(`@/assets/img/orderlabs/${imgName}`);
  } catch (e) {
    console.error('이미지 로드 실패:', imgName);
    return require('@/assets/img/orderlabs/boy.png'); // 기본 이미지
  }
};

const top4Orders = computed(() => {
  const list = state.orderList || [];
  return [...list.slice(-4)].reverse();
});

onMounted(async () => {
  await getOrderList();
  await getData();
});

// const router = useRouter()

// function goToPage() {
//   router.push('/tables')  // 이동할 경로 입력
// }

// const sales = {
//   us: {
//     country: "United States",
//     sales: 2500,
//     value: "$230,900",
//     bounce: "29.9%",
//     flag: US,
//   },
//   germany: {
//     country: "Germany",
//     sales: "3.900",
//     value: "$440,000",
//     bounce: "40.22%",
//     flag: DE,
//   },
//   britain: {
//     country: "Great Britain",
//     sales: "1.400",
//     value: "$190,700",
//     bounce: "23.44%",
//     flag: GB,
//   },
//   brasil: {
//     country: "Brasil",
//     sales: "562",
//     value: "$143,960",
//     bounce: "32.14%",
//     flag: BR,
//   },
// };
</script>
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div
            v-for="(data, index) in state.summaryData"
            :key="index"
            class="col-lg-3 col-md-6 col-12"
          >
            <mini-statistics-card
              :title="data.title"
              :value="data.value"
              :description="`
                <span
                  class='text-sm font-weight-bolder ${
                    data.change.trend === 'up' ? 'text-success' : 'text-danger'
                  }'>
                  ${data.change.trend === 'up' ? '+' : '-'}${data.change.percentage}%
                </span> ${data.change.text}
              `"
              :icon="data.icon"
            />
          </div>
          <!-- <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="예상 수익금"
              value="$53,000"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+55%</span> since yesterday"
              :icon="{
                component: 'ni ni-money-coins',
                background: 'bg-gradient-primary',
                shape: 'rounded-circle',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="예상 생산량"
              value="2,300"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+3%</span> since last week"
              :icon="{
                component: 'ni ni-world',
                background: 'bg-gradient-danger',
                shape: 'rounded-circle',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="요청 생산량"
              value="+3,462"
              description="<span
                class='text-sm font-weight-bolder text-danger'
                >-2%</span> since last quarter"
              :icon="{
                component: 'ni ni-paper-diploma',
                background: 'bg-gradient-success',
                shape: 'rounded-circle',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="판매량"
              value="$103,430"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+5%</span> than last month"
              :icon="{
                component: 'ni ni-cart',
                background: 'bg-gradient-warning',
                shape: 'rounded-circle',
              }"
            />
          </div> -->
        </div>
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <!-- line chart -->
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-2">최근 주문자 정보</h6>
                </div>
              </div>
              <div class="p-3 pb-0 table-responsive">
                <table class="table align-items-center">
                  <tbody>
                    <tr v-for="(order, index) in top4Orders" :key="index">
                      <td class="w-30">
                        <div class="px-2 py-1 d-flex align-items-center">
                          <div>
                            <img
                              :src="getImageUrl(order.img)"
                              alt="Profile Img"
                              style="width: 40px; height: 40px; object-fit: cover;"
                            />
                          </div>
                          <div class="ms-4">
                            <p class="mb-0 text-xs font-weight-bold">구매자:</p>
                            <h6 class="mb-0 text-sm">{{ order.name }}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">판매품목:</p>
                          <h6 class="mb-0 text-sm">{{ order.crop }}</h6>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">총 주문금액:</p>
                          <h6 class="mb-0 text-sm">{{ order.total }}</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-center col">
                          <p class="mb-0 text-xs font-weight-bold">주문량:</p>
                          <h6 class="mb-0 text-sm">{{ order.quantity }}</h6>
                        </div>
                      </td>
                      <!-- 버튼용 td 추가 -->
                      <td class="text-end">
                        <router-link
                          :to="{ name: 'OrderDetail', params: { orderId: order.orderId } }"
                          class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"
                          style="text-decoration: none;"
                        >
                          <i
                            :class="`ni ${isRTL ? 'ni-bold-left' : 'ni-bold-right'}`"
                            aria-hidden="true"
                          ></i>
                        </router-link>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
            <!-- <div class="card z-index-2">
              <gradient-line-chart
                id="chart-line"
                title="Sales Overview"
                description="<i class='fa fa-arrow-up text-success'></i> <span class='font-weight-bold'>4% more</span> in 2021"
                :chart="{
                  labels: [
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                  ],
                  datasets: [
                    {
                      label: 'Mobile Apps',
                      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                    },
                  ],
                }"
              />
            </div> -->
          </div>
          <div class="col-lg-5">
            <categories-list
              :categories="[
                {
                  icon: {
                    component: 'ni ni-mobile-button',
                    background: 'dark',
                  },
                  label: '판매량 내역',
                  description: '250 in stock <strong>346+ sold</strong>',
                },
                {
                  icon: {
                    component: 'ni ni-tag',
                    background: 'dark',
                  },
                  label: '이벤트',
                  description: '123 closed <strong>15 open</strong>',
                },
                {
                  icon: { component: 'ni ni-box-2', background: 'dark' },
                  label: '배송 현황',
                  description: '1 is active <strong>40 closed</strong>',
                },
                {
                  icon: { component: 'ni ni-satisfied', background: 'dark' },
                  label: '새로운 알림',
                  description: '+ 430',
                },
              ]"
            />
            <!-- <carousel /> -->
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <project-card
              title="농장 모니터링"
              :description="cardDescription"
              :headings="['상태', '관리자', '지표', '상태']"
              :rows="rows"
            />
            <!-- <project-card
          title="농장 모니터링"
          description='<i class="fa fa-check text-info" aria-hidden="true"></i>
            <span class="font-weight-bold ms-1">농장 지표</span>
            2025-07-02'
          :headings="['상태', '관리자', '지표', '상태']"
          :rows="[
            {
              logo: logoXD,
              tool: '일사량  (J/㎠/day)',
              teamMembers: [team1, team2, team3, team4],
              price: `1,540`,
              progress: 60,
            },
            {
              logo: logoAtlassian,
              tool: '외기 기온 (℃)',
              teamMembers: [team1, team2],
              price: `22.8`,
              progress: 10,
            },
            {
              logo: logoSlack,
              tool: '일일 평균 온도 (℃)',
              teamMembers: [team2, team4],
              price: '25.2',
              progress: 100,
            },
            {
              logo: logoSpotify,
              tool: '예상 생산량',
              teamMembers: [team1, team2, team3, team4],
              price: '0.6',
              progress: 60,
            },
            {
              logo: logoJira,
              tool: '주간 푱균 습도 (%)',
              teamMembers: [team1],
              price: '77.4',
              progress: 25,
            },
            {
              logo: logoInvision,
              tool: '잔존 Co2 (ppm)',
              teamMembers: [team1, team4],
              price: '1.10',
              progress: 40,
            },
          ]"
          :action="[
            {
              route: 'javascript:;',
              label: 'عمل',
            },
            {
              route: 'javascript:;',
              label: 'عمل اخر',
            },
            {
              route: 'javascript:;',
              label: 'شی اخر هنا',
            },
          ]"
        /> -->
          </div>
          <div class="col-lg-5">
            <carousel :chartsData="state.chartData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
