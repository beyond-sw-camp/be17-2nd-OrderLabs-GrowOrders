<script setup>
import { ref, watch } from 'vue';
// import ArgonButton from '../components/ArgonButton.vue'
const emit = defineEmits(['update:modelValue', 'submit']);

const props = defineProps({
  size: { type: String, default: 'default' },
  success: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  isRequired: { type: Boolean, default: false },
  modelValue: { type: String, default: '' },
});

const prefixes = ['010', '011', '016', '017', '018', '019'];

const { size, success, error, isRequired } = props;

const prefix = ref('');
const middle = ref('');
const last = ref('');

watch(() => props.modelValue, (val) => {
  if (val) {
    const parts = val.split('-');
    if (parts.length === 3) {
      prefix.value = parts[0];
      middle.value = parts[1];
      last.value = parts[2];
    } else {
      prefix.value = '';
      middle.value = '';
      last.value = '';
    }
  } else {
    prefix.value = '';
    middle.value = '';
    last.value = '';
  }
}, { immediate: true });

watch([prefix, middle, last], () => {
  if (prefix.value && middle.value.length >= 3 && last.value.length === 4) {
    emit('update:modelValue', `${prefix.value}-${middle.value}-${last.value}`);
  } else {
    emit('update:modelValue', '');
  }
});

function onInputMiddle(e) {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
  middle.value = e.target.value;
}
function onInputLast(e) {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
  last.value = e.target.value;
}

function getClasses(size, success, error) {
  const sizeClass = size === 'sm' ? 'form-control-sm' : size === 'lg' ? 'form-control-lg' : '';
  const stateClass = error ? 'is-invalid' : success ? 'is-valid' : '';
  return `${sizeClass} ${stateClass}`.trim();
}

// 전송 버튼 활성화 조건 (간단 유효성)
const canSubmit = () => {
  return prefix.value && middle.value.length >= 3 && middle.value.length <=4 && last.value.length === 4;
}

function onSubmit() {
  if (canSubmit()) {
    emit('submit', `${prefix.value}-${middle.value}-${last.value}`);
  }
}
</script>

<template>
    <div class="d-flex gap-2 align-items-center">
      <select
        class="form-select"
        :class="getClasses(size, success, error)"
        v-model="prefix"
        :required="isRequired"
        aria-label="휴대폰 앞자리"
      >
        <option value="" disabled>선택</option>
        <option v-for="p in prefixes" :key="p" :value="p">{{ p }}</option>
      </select>
  
      <input
        type="text"
        class="form-control"
        :class="getClasses(size, success, error)"
        v-model="middle"
        maxlength="4"
        placeholder="1234"
        @input="onInputMiddle"
        :required="isRequired"
        aria-label="휴대폰 중간자리"
        autocomplete="off"
      />
  
      <input
        type="text"
        class="form-control"
        :class="getClasses(size, success, error)"
        v-model="last"
        maxlength="4"
        placeholder="5678"
        @input="onInputLast"
        :required="isRequired"
        aria-label="휴대폰 뒷자리"
        autocomplete="off"
      />
  
      <div class="send-button send-button:hover"
        type="button"
        :disabled="!canSubmit()"
        @click="onSubmit"
      >
        전송
      </div>
    </div>
  </template>
  
  <style scoped>
  .custom-phone-submit-button {
    height: 38px;
    padding: 0 12px;
    font-size: 0.875rem;
    border-radius: 4px;
    background-color: #2dce89;
    box-shadow: none;
    line-height: 1.5;
    border: none;
  }
  
  .custom-phone-submit-button:disabled {
    background-color: #a3d8c9;
    cursor: not-allowed;
  }

  .send-button {
  height: 40px;
  line-height: 40px; /* 높이와 맞추기 */
  padding: 0 16px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #4a90e2;
  color: white;
  border: none;
  cursor: pointer;

  white-space: nowrap;
  text-align: center;
}

.send-button:hover {
  background-color: #357ab8;
}

  </style>
  