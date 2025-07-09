<script setup>
import sales_api from '@/api/sales'
import { computed, onMounted, reactive } from 'vue'

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

//페이지 로드하기 전 실행
onMounted(async () => {
  await getFarmsList()
})
</script>

<template>
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
</template>
