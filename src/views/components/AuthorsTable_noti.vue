<template>
    <div class="card">
      <div class="card-header pb-0">
        <h6>알림 목록</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0" style="table-layout: fixed;">
            <thead>
              <tr>
                <th style="width: 20%;" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  유형
                </th>
                <th style="width: 40%;" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  제목 / 내용
                </th>
                <th style="width: 30%;" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                  수신 시간
                </th>
                <th style="width: 10%;" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                  상태
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(noti, index) in notifications" :key="index">
                <td class="text-xs font-weight-bold mb-0 text-truncate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  {{ noti.type }}
                </td>
                <td class="text-sm">
                  <p class="text-xs font-weight-bold mb-0 text-truncate">{{ noti.title }}</p>
                  <p class="text-xs text-secondary mb-0 text-truncate">{{ noti.message }}</p>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold">
                    {{ formatDate(noti.created_at) }}
                  </span>
                </td>
                <td class="align-middle text-center text-sm">
                  <span
                    :class="['badge badge-sm', noti.read ? 'bg-gradient-secondary' : 'bg-gradient-success']">
                    {{ noti.read ? '읽음' : '안읽음' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    notifications: {
      type: Array,
      default: () => [],
    },
  })
  
  // 날짜 포맷 함수
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  </script>
  
  <style scoped>
  .text-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>
  