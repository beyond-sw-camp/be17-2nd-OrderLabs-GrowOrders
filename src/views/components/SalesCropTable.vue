<script setup>
import { defineProps } from 'vue'

const props = defineProps(['selectedFarm', 'selectCrop'])
const crop = props.selectedFarm?.crops?.find((f) => f.name === props.selectCrop)
</script>
<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>{{ props.selectedFarm.farm_name }}의 {{ crop.name }} 판매량 조회</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">항목</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">값</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">현재 시세</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">개당 단가</th>
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
                <p class="text-sm font-weight-bold mb-0">{{ crop.salesVolume.toLocaleString() }} kg</p>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ crop.currentPrice.toLocaleString() }} 원 / kg</p>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ crop.unitPrice.toLocaleString() }} 원 / kg</p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">{{ crop.salesProgressRate }}%</span>
                  <div class="me-2">
                    <div class="progress">
                      <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
                    </div>
                  </div>
                  <span class="text-xs font-weight-bold">(판매량 / 예측 수확량)</span>
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
                <p class="text-sm font-weight-bold mb-0">{{ crop.revenue.toLocaleString() }} 원</p>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0"></p>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0"></p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">{{ crop.revenueProgressRate }}%</span>
                  <div class="me-2">
                    <div class="progress">
                      <div
                        class="progress-bar bg-gradient-info"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :style="{
                          width: crop.unsoldProgressRate + '%',
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
                    <img src="@/assets/img/orderlabs/sales/sales_count.png" class="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">미판매 수량</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ crop.unsoldAmount }} kg</p>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0"></p>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0"></p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">{{ crop.unsoldProgressRate }}%</span>
                  <div class="me-2">
                    <div class="progress">
                      <div class="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%"></div>
                    </div>
                  </div>
                  <span class="text-xs font-weight-bold">(전체 수확량 - 판매량)</span>
                </div>
              </td>
              <td class="align-middle">
                <button class="btn btn-link text-secondary mb-0">
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
