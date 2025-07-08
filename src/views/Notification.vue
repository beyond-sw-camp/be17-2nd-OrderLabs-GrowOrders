<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import NotificationTable from '@/views/components/AuthorsTable_noti.vue'
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";


const notifications = ref([])
const activeType = ref('전체')

// 알림 종류
const notificationTypes = [
  '이상 기후 알림',
  '수확 예정 알림',
  '주문 등록 알림',
  '주문 상태 변경 알림'
]

// 알림 유형 선택 시
const selectType = (type) => {
  activeType.value = type
}

// 서버에서 알림 불러오기
const fetchNotifications = async () => {
  try {
    const res = await axios.get('http://192.168.133.160/notification.json')
    notifications.value = res.data
  } catch (err) {
    console.error('알림 불러오기 실패:', err)
  }
}

onMounted(() => {
  fetchNotifications()
})

const filteredNotifications = computed(() => {
  if (!notifications.value.data) return []
  return activeType.value === '전체'
    ? notifications.value.data
    : notifications.value.data.filter(n => n.type === activeType.value)
})

// 선택된 알림 유형만 필터링
// const filteredNotifications = computed(() =>
//   activeType.value === '전체'
//     ? notifications.value
//     : notifications.value.filter(n => n.type === activeType.value)
// )

//  여기에 날짜 포맷 함수 추가
// const formatDate = (str) => {
//   if (!str) return ''
//   return new Date(str).toLocaleString('ko-KR')
// }

</script>


<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-3 col-sm-6 mb-lg-0 mb-4 " v-for="type in notificationTypes" :key="type" >
        <mini-statistics-card
          class="p-0 bg-whit shadow-sm"
          :title="{ text: type, color: 'text-dark opacity-7' }"
          :value="{ text: null, color: 'text-dark' }" 
          :icon="{
            component: 'text-white ni ni-world',
            background: 'bg-gradient-success'
          }"
          @click="selectType(type)" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <notification-table :notifications="filteredNotifications" />
      </div>
    </div>
  </div>
</template>
