<script setup>
import PageNation from '@/views/components/PageNation.vue'
import Modal from '@/views/components/Modal.vue'
import { defineProps, ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps(['farmData']) //api 로 전달받은 농장 데이터
const route = useRoute()

// const selectedInventory = reactive({
//   id: '',
//   crop_type: '',
//   crop_state: '',
//   order_count: '',
//   inventory_count: '',
//   max_inventory_count: '',
//   date: '',
// })

//선택된 재고 (행)
const selectedInventory = ref(null)
//편집 버튼 눌렀을때 실행할 함수
const inventory_edit = (inventory) => {
  selectedInventory.value = inventory
}

const farmIndex = Number(route.params.farm_index) //uri에서 farmIndex 추출
const selectedFarm = props.farmData[farmIndex] //선택된 농장 정보 가져오기

//페이지
const pageCount = Math.ceil(selectedFarm?.inventory.length / 5) //페이지 개수
const currentPage = ref(1)
const rowsPerPage = 5 //페이지당 보여줄 행의 개수
const currentPageList = ref([])

//보여줄 데이터 자르기
const pageSlice = (cp) => {
  const start = (cp.value - 1) * rowsPerPage
  const end = start + rowsPerPage
  currentPageList.value = selectedFarm?.inventory.slice(start, end) || []
}
const currentPageChange = (page) => {
  currentPage.value = page
  pageSlice(currentPage) //클릭시마다 새로 반영
}

pageSlice(currentPage) //초기 한번 실행
</script>

<template>
  <div class="mt-4 row">
    <div class="col-12">
      <!-- Modal / 모달 창 -->
      <modal :data="selectedInventory" />

      <!-- 재고 관리 테이블 컴포넌트-->
      <div class="card">
        <div class="card-header pb-0">
          <h6>재고 관리</h6>
        </div>

        <div class="card-body px-0 pt-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">재고 ID</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">작물 종류</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">작물 상태</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">총 주문 요청량</th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">예측 산출량</th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">최대 산출량</th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">예측 수확일</th>
                  <th class="text-secondary opacity-7"></th>
                </tr>
              </thead>
              <tbody v-if="selectedFarm && selectedFarm?.inventory">
                <tr v-for="inventory in currentPageList" :key="inventory.id">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <p class="text-xs font-weight-bold mb-0">{{ inventory.id }}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">{{ inventory.crop_type }}</p>
                  </td>
                  <td class="text-sm">
                    <span
                      :class="{
                        'badge badge-sm bg-gradient-secondary-green': inventory.crop_state === '양호',
                        'badge badge-sm bg-gradient-secondary-yellow': inventory.crop_state === '보통',
                        'badge badge-sm bg-gradient-secondary-red': inventory.crop_state === '불량',
                      }"
                      >{{ inventory.crop_state }}</span
                    >
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">{{ inventory.order_count }} /㎡</p>
                  </td>
                  <td class="align-middle text-center text-xs font-weight-bold">
                    <span>{{ inventory.inventory_count }} /㎡</span>
                  </td>
                  <td class="align-middle text-center text-xs font-weight-bold">
                    <span>{{ inventory.max_inventory_count }} /㎡</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">{{ inventory.date }}</span>
                  </td>
                  <td class="align-middle">
                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square edit_btn" viewBox="0 0 16 16" @click="inventory_edit(inventory)">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-4 row">
    <page-nation :pageCount="pageCount" @currentPageChange="currentPageChange" />
  </div>
</template>

<style scope>
.bg-gradient-secondary-red {
  background-image: linear-gradient(310deg, #ff0000 0%, #ffa07a 100%);
}

.bg-gradient-secondary-green {
  background-image: linear-gradient(310deg, #228b22 0%, #32cd32 100%);
}

.bg-gradient-secondary-pink {
  background-image: linear-gradient(310deg, #ff69b4 0%, #ffc0cb 100%);
}

.bg-gradient-secondary-yellow {
  background-image: linear-gradient(310deg, #ffd700 0%, #ffff00 100%);
}
</style>
