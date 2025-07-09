<script setup>
import { ref, onMounted } from 'vue';
import api from '../../api/order/userlist.js';
import ArgonBadge from '../../components/ArgonBadge.vue';

const farmerData = ref([]);

function getBadgeColor(status) {
  if (status === '주문완료') return 'success'
  else if (status === '주문취소') return 'warning'
  else if (status === '배송완료') return 'info'
  else if (status === '환불') return 'danger'
  else if (status === '배송중') return 'primary'
  return 'info'
}


// API 호출 후 data 배열에서 .data만 추출
onMounted(async () => {
  try {
    const res = await api.farmerList();
    farmerData.value = res.map(item => item.data);
    console.log(farmerData.value);
  } catch (error) {
    console.error('API 호출 오류:', error);
  }
});
</script>

<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <h6 class="mb-0 me-3" style="white-space: nowrap;">주문관리님의 주문관리 기록</h6>
          <div class="input-group input-group-sm ms-3" style="max-width: 250px;">
            <span class="input-group-text text-body px-2">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" class="form-control" placeholder="Type here...">
          </div>
        </div>
        <label class="position-absolute end-2 top-5 mt-1 me-3 text-xs">
          정렬 기준:
          <select id="sortOption" onchange="sortTable()"
            class="form-select form-select-sm d-inline w-auto ms-1"
            style="width: 160px !important; height: 40px !important; font-size: 14px;">
            <option value="year">주문자 이름</option>
            <option value="crop">작물 이름</option>
            <option value="status">주문 상태</option>
          </select>
        </label>
      </div>
      <div class="card-body px-5 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0" id="predictionTable">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">주문자 이름 / ID</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-5 ps-2">작물 이름
                </th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-5 ps-2">주문량
                </th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-5 ps-2">금액
                </th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-3 ps-2">주문 상태
                  </th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-3 ps-2">주문 날짜
                </th>
                <th class="text-secondary opacity-7 pe-4 ps-2"></th>
              </tr>
            </thead>
          <tbody>
            <tr v-for="(item, index) in farmerData" :key="index">
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                      <img
                      :src="`https://api.dicebear.com/8.x/pixel-art/svg?seed=${Math.random().toString(36).substring(2, 10)}`"
                      class="avatar avatar-sm me-3"
                      alt="user"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ item.name }}</h6>
                    <p class="text-xs text-secondary mb-0">{{ item.user_id }}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ item.crop }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ item.quantity }}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ item.total }}</p>
              </td>
              <td>
                <argon-badge
                    variant="gradient"
                    :color="getBadgeColor(item.order_status)"
                >
                  {{ item.order_status }}
                </argon-badge>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ item.order_Date }}</p>
              </td>
              <td class="align-middle text-center text-sm">
                    <router-link
                    :to="{ name: 'OrderDetail', params: { orderId: item.orderId } }"
                    class="badge text-xs badge-sm bg-gradient-success text-white"
                    style="text-decoration: none;"
                  >
                <a href="/order-page" class="badge text-xs badge-sm bg-gradient-success text-white"
                    style="text-decoration: none;">
                    상세보기
                </a>
                 </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
</template>


