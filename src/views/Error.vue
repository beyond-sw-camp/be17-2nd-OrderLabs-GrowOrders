<script setup>
import imageUrl from '../assets/img/error.jpg';
</script>

<template>
  <div class="fullscreen-image">
    <img :src="imageUrl" alt="404 Error" />
  </div>
</template>

<style scoped>
.fullscreen-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-image img {
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
}

</style>