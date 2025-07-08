<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: { type: [String, Number], default: 1 }
});

const emit = defineEmits(['update:modelValue']);

const picked = ref(props.modelValue);

watch(picked, (newVal) => {
  emit('update:modelValue', newVal);
});
</script>

<template>
  <div>
    <div class="radio-group">
      <label>
        <input type="radio" :value="1" v-model="picked" />
        <span class="small-text">농부</span>
      </label>

      <label>
        <input type="radio" :value="2" v-model="picked" />
        <span class="small-text">구매자</span>
      </label>
    </div>
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
  width: 14px;
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

.picked-text {
  font-size: 14px;
  color: #555;
}

.small-text {
  font-size: 12px;
  color: #888;
}
</style>
