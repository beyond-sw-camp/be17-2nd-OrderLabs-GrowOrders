<script setup>
import { defineProps } from 'vue'
const props = defineProps(['selectedFarm', 'selectData'])

console.log('typeof' + typeof props.selectedFarm.summary.totalSalesVolume.value)
</script>

<template>
  <div class="card mb-4">
    <!-- 테이블 헤더 부분 -->
    <div class="card-header pb-0 d-flex justify-content-between">
      <h6>{{ props.selectedFarm.farm_name }}의 전체 판매량 조회</h6>
      <div>
        <small class="text-end">
          <strong>선택한 기간 : </strong> {{ props.selectData.selectedStartDate }} ~ {{ props.selectData.selectedEndDate }}<br />
          <strong>유효한 기간 : </strong> {{ props.selectedFarm.period.startDate }} ~ {{ props.selectedFarm.period.endDate }}
        </small>
      </div>
    </div>

    <!-- 테이블 본문 부분 -->
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">항목</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">값 / 단위</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">진행률</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img src="@/assets/img/orderlabs/sales/sales_count.png" class="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">총 판매량</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ props.selectedFarm.summary.totalSalesVolume.value.toLocaleString() }} kg</p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">{{ props.selectedFarm.summary.totalSalesVolume.progressRate }}%</span>
                  <div>
                    <div class="me-2 progress">
                      <div
                        class="progress-bar bg-gradient-info"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :style="{
                          width: selectedFarm.summary.totalSalesVolume.progressRate + '%',
                        }"
                      ></div>
                    </div>
                  </div>
                  <span class="text-xs font-weight-bold">(판매량 / 전체 수확량)</span>
                </div>
              </td>
              <td class="align-middle">
                <button class="btn btn-link text-secondary mb-0">
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img src="@/assets/img/orderlabs/sales/sales_amount.png" class="avatar avatar-sm rounded-circle me-2" alt="invision" />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">총 매출액</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ props.selectedFarm.summary.totalRevenue.value.toLocaleString() }} 원</p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">{{ props.selectedFarm.summary.totalRevenue.progressRate }}%</span>
                  <div>
                    <div class="me-2 progress">
                      <div
                        class="progress-bar bg-gradient-info"
                        role="progressbar"
                        :style="{
                          width: selectedFarm.summary.totalSalesVolume.progressRate + '%',
                        }"
                      ></div>
                    </div>
                  </div>
                  <span class="text-xs font-weight-bold"> (매출액 / 전체 기간 매출액)</span>
                </div>
              </td>
              <td class="align-middle">
                <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img src="@/assets/img/orderlabs/sales/transition.png" class="avatar avatar-sm rounded-circle me-2" alt="jira" />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">판매 추이</h6>
                  </div>
                </div>
              </td>
              <td>
                {{ props.selectedFarm.summary.salesTrend.changeRate }}%
                <span
                  class="text-sm font-weight-bold mb-0"
                  :class="{
                    'text-success': selectedFarm.summary.salesTrend.direction === 'up',
                    'text-danger': selectedFarm.summary.salesTrend.direction === 'down',
                  }"
                >
                  {{ selectedFarm.summary.salesTrend.direction === 'up' ? '▲ 상승' : '▼ 하락' }}
                </span>
              </td>
              <td class="align-middle text-center"></td>
              <td class="align-middle">
                <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
