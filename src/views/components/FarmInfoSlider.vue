<script setup>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['sendData'])
const router = useRouter()
const currentIndex = ref(0) //props로 받은 sendData에서 현재 농장 인덱스 번호

const changeFarm = (farm_index) => {
  //마지막에서 다음 버튼 누르면 처음으로, 처음에서 이전 버튼 누르면 마지막으로
  const total = props.sendData.length
  if (total === 0) return //농장이 없으면 return

  currentIndex.value = (farm_index + total) % total
  const selectedFarm = props.sendData[currentIndex.value]
  if (selectedFarm) {
    router.push(`/inventory/${currentIndex.value}`)
    console.log(selectedFarm.farm_name)
  }
}
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="carousel-wrapper">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button v-for="(farm, farm_index) in props.sendData" :key="farm.farm_id" type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="farm_index" :class="{ active: farm_index === 0 }" :aria-label="`Slide ${farm_index + 1}`"></button>
          </div>

          <div class="carousel-inner">
            <div v-for="(farm, farm_index) in props.sendData" :key="farm.farm_id" :class="['carousel-item', { active: farm_index === 0 }]">
              <img :src="require(`@/assets/img/orderlabs/${farm.farm_img}`)" class="d-block w-100" alt="" />
              <!-- 동적 이미지 가져오기 위해 require 사용-->
              <div class="carousel-caption d-none d-md-block">
                <h5>{{ farm.farm_name }}</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" @click.prevent="changeFarm(currentIndex - 1)">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" @click.prevent="changeFarm(currentIndex + 1)">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  width: 60%;
  margin: 0 auto;
}

.carousel img {
  max-height: 500px;
  object-fit: cover;
  border-radius: 1rem;
}

.carousel-inner h5 {
  font-size: 36px;
  color: #ffff00;
}
</style>
