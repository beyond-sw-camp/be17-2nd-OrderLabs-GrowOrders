<script setup>
import { defineProps } from 'vue'
const props = defineProps(['pageCount'])
const emits = defineEmits(['currentPageChange'])

const currentPageChange = (page) => {
  emits('currentPageChange', page)
}
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="(n, index) in props.pageCount" :key="index" class="page-item">
        <a class="page-link" href="#" @click.prevent="currentPageChange(n)">{{ index + 1 }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
