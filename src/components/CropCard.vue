<template>
  <div class="card card-profile">
    <!-- 상단 배경 이미지 (고정 또는 필요시 props로 교체) -->
    <img
      :src="crop.image"
      alt="Crop image"
      class="card-img-top"
    />

    <!-- 버튼은 비워두거나 필요 시 수정 가능 -->
    <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
      <div class="d-flex justify-content-center">
        <span class="badge bg-gradient-success">{{ crop.name }}</span>
      </div>
    </div>

    <!-- 본문 내용 -->
    <div class="card-body pt-0">
      <div class="text-center mt-4">
        <h5>{{ crop.name }}</h5>
        <p class="text-sm">{{ crop.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  crop: {
    type: Object,
    required: true
  }
})
</script>