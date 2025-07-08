<script setup>
import { ref, onMounted } from 'vue';
import api from '../../api/order/userlist.js';

const farmerData = ref([]);

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
  <div class="card">
    <div class="card-header pb-0">
      <h6>주문관리 / 생산자</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th>주문자 이름</th>
              <th>작물 이름</th>
              <th>주문량</th>
              <th>금액</th>
              <th class="text-center">주문 상태</th>
              <th class="text-center">취소 상태</th>
              <th class="text-center">주문 날짜</th>
              <th class="text-center">배송 상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in farmerData" :key="index">
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ item.name }}</h6>
                    <p class="text-xs text-secondary mb-0">{{ item.user_id }}</p>
                  </div>
                </div>
              </td>
              <td><p class="text-xs font-weight-bold mb-0">{{ item.crop }}</p></td>
              <td><p class="text-xs font-weight-bold mb-0">{{ item.quantity }}</p></td>
              <td><p class="text-xs font-weight-bold mb-0">{{ item.total }}</p></td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">{{ item.order_status }}</span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-secondary">
                  {{ item.cancel_staus || '-' }}
                </span>
              </td>
              <td class="align-middle text-center text-sm">
                {{ item.order_Date }}
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-info">
                  {{ item.delivery_status || '-' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
