<script setup>
import sales_api from '@/api/sales'
import { computed, onMounted, ref, reactive } from 'vue'
import ArgonAlert from '@/components/ArgonAlert.vue'
import SalesFarmTotalTable from '@/views/components/SalesFarmTotalTable.vue'
// import SalesCropTable from '@/views/components/SalesCropTable.vue'
import SalesCard from '@/views/components/SalesCard.vue'

//select box 선택 값
const selectData = reactive({
  selectedFarmId: '',
  selectedStartDate: '',
  selectedEndDate: '',
})

//farms Data 받아오기
const farmsList = reactive([])
const getFarmsList = async () => {
  const data = await sales_api.getTotalSalesAPI(selectData)
  if (data && data.success) {
    if (data.results) {
      farmsList.push(...data.results.farms)
    } else {
      console.log('data.results 없음')
    }
  } else {
    alert('데이터가 없습니다.')
  }
}

// 선택한 농장 데이터
const selectedFarm = computed(() => {
  return farmsList.find((f) => f.farm_id === +selectData.selectedFarmId)
})

// 선택된 시작/종료 날짜가 해당 농장의 기간 안에 있는지 확인
const isDateRangeInPeriod = computed(() => {
  if (!selectedFarm.value || !selectData.selectedStartDate || !selectData.selectedEndDate) return false
  const start = new Date(selectData.selectedStartDate)
  const end = new Date(selectData.selectedEndDate)
  const periodStart = new Date(selectedFarm.value.period.startDate)
  const periodEnd = new Date(selectedFarm.value.period.endDate)

  return start >= periodStart && end <= periodEnd && start <= end
})

//작물 선택 값
const selectCrop = ref('')

//작물 선택시 선택 값 변경 함수
const clickCrop = (dataSlickName) => {
  selectCrop.value = dataSlickName
}

//페이지 로드하기 전 실행
onMounted(async () => {
  await getFarmsList()
})
</script>

<template>
  <div class="py-4 container-fluid">
    <!-- 선택 컴포넌트 -->
    <div class="row">
      <div class="col-12">
        <div class="d-flex gap-2 mb-3 flex-wrap justify-content-end">
          <select v-model="selectData.selectedFarmId" class="form-select" style="width: 200px">
            <option value="">농장 선택</option>
            <option v-for="farm in farmsList" :key="farm.farm_id" :value="farm.farm_id">
              {{ farm.farm_name }}
            </option>
          </select>

          <input type="date" v-model="selectData.selectedStartDate" class="form-control" style="width: 150px" />
          <input type="date" v-model="selectData.selectedEndDate" class="form-control" style="width: 150px" />
        </div>
      </div>
    </div>

    <!-- 데이터 확인 컴포넌트 -->
    <!-- 작물 별 판매량 -->
    <div class="row">
      <div class="col-12">
        <sales-card v-if="selectedFarm && isDateRangeInPeriod" :selectedFarm="selectedFarm" :selectCrop="selectCrop" @clickCrop="clickCrop" @isDateRangeInPeriod="isDateRangeInPeriod" />
        <!-- <sales-crop-table v-if="selectedFarm && isDateRangeInPeriod && selectCrop" /> -->
      </div>
    </div>

    <!-- 농장별 전체 판매량 -->
    <div class="row">
      <div class="col-12">
        <sales-farm-total-table v-if="selectedFarm && isDateRangeInPeriod" :selectedFarm="selectedFarm" :selectData="selectData" />

        <argon-alert v-else-if="selectedFarm && !isDateRangeInPeriod" class="alert alert-primary mt-3 text-center custom-alert">
          선택한 기간이 유효하지 않습니다. <br />
          (농장의 기간: {{ selectedFarm.period.startDate }} ~ {{ selectedFarm.period.endDate }})
        </argon-alert>
        <argon-alert v-else class="alert alert-primary mt-3 text-center custom-alert" icon="ni ni-settings ni-lg"> 선택한 기간이 유효하지 않습니다. <br /> </argon-alert>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-alert {
  padding-top: 10rem;
  padding-bottom: 10rem;
}
</style>
