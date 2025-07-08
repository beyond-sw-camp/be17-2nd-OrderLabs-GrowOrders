<script setup>
import { ref } from 'vue';

const picked = ref('One'); // 기본 선택값 설정
</script>

<template>
  <div>
    <div class="radio-group">
        <label>
        <input type="radio" value="농부" v-model="picked" />
        <span class="small-text">농부</span>
      </label>

      <label>
        <input type="radio" value="구매자" v-model="picked" />
        <span class="small-text">구매자</span>
      </label>

    </div>
    <!-- <div class="picked-text">Picked: {{ picked }}</div> -->
  </div>
</template>

<style scoped>
.radio-group {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 8px;
}

.radio-group input[type="radio"] {
  width: 14px;   /* 기본 18px보다 작게 */
  height: 14px;
  margin-right: 6px;
  cursor: pointer;
}


.radio-group label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  user-select: none;
}

.radio-group input[type="radio"] {
  margin-right: 8px;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.picked-text {
  font-size: 14px;
  color: #555;
}

.small-text {
  font-size: 12px;
  color: #888;
}
</style>