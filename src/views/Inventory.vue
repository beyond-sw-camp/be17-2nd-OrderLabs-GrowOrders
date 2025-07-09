<script setup>
import FarmInfoSlider from '@/views/components/FarmInfoSlider.vue'
import inventory_api from '@/api/inventory'

import { onMounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

//
const router = useRouter()
const route = useRoute()

//request Form
const inventoryForm = reactive({ id: '' }) //Cookie에 저장된 농부 쿠키 대신할 예정

//response Data 저장
const InventoryList = reactive([])
const getInventoryList = async () => {
  const data = await inventory_api.getInventoryAPI(inventoryForm)

  if (data && data.success) {
    if (data.results) {
      InventoryList.push(...data.results.farms)
      // 현재 경로가 정확히 '/inventory'일 때만 리디렉션
      if (route.path === '/inventory') {
        router.push(`/inventory/0`)
      }
    } else {
      console.log(data)
    }
  } else {
    alert('회원 전용 기능입니다. 로그인을 하세요.')
  }
}

onMounted(async () => {
  await getInventoryList()
})
</script>

<template>
  <div class="py-4 container-fluid">
    <FarmInfoSlider :sendData="InventoryList" />
    <router-view :farmData="InventoryList" :key="$route.fullPath" />
    <!-- 컴포넌트 재랜더링 필요할때 route.fullPath 씀 -->
  </div>
</template>
