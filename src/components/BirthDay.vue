<script setup>
import { ref, computed, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  size: {
    type: String,
    default: 'default',
  },
  success: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
});

// props에서 필요한 값 구조분해 할당 (템플릿에서도 바로 쓸 수 있게)
const { size, success, error, isRequired } = props;

const year = ref('');
const month = ref('');
const day = ref('');

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);

const daysInMonth = (y, m) => {
  return new Date(y, m, 0).getDate();
};

const days = computed(() => {
  if (!year.value || !month.value) return [];
  const dayCount = daysInMonth(year.value, month.value);
  return Array.from({ length: dayCount }, (_, i) => i + 1);
});

// 생년월일을 "YYYY-MM-DD" 형태로 합침
watch([year, month, day], () => {
  if (year.value && month.value && day.value) {
    const mm = month.value.toString().padStart(2, '0');
    const dd = day.value.toString().padStart(2, '0');
    emit('update:modelValue', `${year.value}-${mm}-${dd}`);
  } else {
    emit('update:modelValue', '');
  }
});

// modelValue가 변경되면 내부 값 맞춰주기 (양방향 바인딩)
watch(() => props.modelValue, (val) => {
  if (val) {
    const parts = val.split('-');
    if (parts.length === 3) {
      year.value = parts[0];
      month.value = Number(parts[1]);
      day.value = Number(parts[2]);
    }
  } else {
    year.value = '';
    month.value = '';
    day.value = '';
  }
}, { immediate: true });

function getClasses(size, success, error) {
  const sizeClass = size ? `form-control-${size}` : '';
  const stateClass = error
    ? 'is-invalid'
    : success
      ? 'is-valid'
      : '';
  return `${sizeClass} ${stateClass}`.trim();
}
</script>

<template>
  <div class="form-group">
    <div class="d-flex gap-2" :class="getClasses(size, success, error)">
      <select
        id="birth-year"
        class="form-select"
        v-model="year"
        :required="isRequired"
        aria-label="연도"
      >
        <option value="" disabled>연도</option>
        <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
      </select>

      <select
        id="birth-month"
        class="form-select"
        v-model="month"
        :required="isRequired"
        aria-label="월"
      >
        <option value="" disabled>월</option>
        <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
      </select>

      <select
        id="birth-day"
        class="form-select"
        v-model="day"
        :required="isRequired"
        aria-label="일"
        :disabled="!month || !year"
      >
        <option value="" disabled>일</option>
        <option v-for="d in days" :key="d" :value="d">{{ d }}</option>
      </select>
    </div>
  </div>
</template>
