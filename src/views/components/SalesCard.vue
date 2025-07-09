<script setup>
import SalesCropTable from '@/views/components/SalesCropTable.vue'

import { defineProps, defineEmits, reactive } from 'vue'

const props = defineProps(['selectedFarm', 'selectData', 'selectCropIndex'])
const emits = defineEmits(['clickCrop', 'isDateRangeInPeriod'])

const cardSales = reactive({
  tomato: '',
  strawberry: '',
  piplica: '',
})

const clickCrop = (dataSlickIndex) => {
  emits('clickCrop', dataSlickIndex)
}

const isDateRangeInPeriod = () => {
  emits('isDateRangeInPeriod')
}
</script>

<template>
  <div class="mb-4">
    <div class="container">
      <ul class="slideItem overflow-h slick-initialized slick-slider">
        <div class="slick-list draggable">
          <div class="slick-track" style="opacity: 1">
            <li class="quickMenu item1 slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false">
              <!-- <a href=""> -->
              <div class="contFrame border-radius-lg" @click.prevent="clickCrop(0)">
                <img src="@/assets/img/orderlabs/sales/icon_tomato_white.png" alt="" />
                <h3 class="txt-tomato">토마토</h3>
                <div>
                  <h2>{{ cardSales.tomato }}</h2>
                </div>
                <button type="button" onclick="">바로가기</button>
              </div>
              <!-- </a> -->
            </li>
            <li class="quickMenu item2 slick-slide slick-active" data-slick-index="1" aria-hidden="false">
              <a href="">
                <div class="contFrame border-radius-lg">
                  <img src="@/assets/img/orderlabs/sales/icon_strawberry_white.png" alt="" />
                  <h3 class="txt-strawberry">딸기</h3>
                  <div>
                    <h2>{{ cardSales.strawberry }}</h2>
                  </div>
                  <button type="button" onclick="">바로가기</button>
                </div>
              </a>
            </li>
            <li class="quickMenu item3 slick-slide slick-active" data-slick-index="2" aria-hidden="false">
              <a href="">
                <div class="contFrame border-radius-lg">
                  <img src="@/assets/img/orderlabs/sales/icon_paprika_white.png" alt="" />
                  <h3 class="txt-paprika">파프리카</h3>
                  <div>
                    <h2>{{ cardSales.piplica }}</h2>
                  </div>

                  <button type="button" onclick="">바로가기</button>
                </div>
              </a>
            </li>
          </div>
        </div>
      </ul>
    </div>
    <sales-crop-table v-if="props.selectedFarm && isDateRangeInPeriod && props.selectCropIndex" />
  </div>
</template>

<style scoped>
/* .slideItem {
  touch-action: auto;
  -ms-touch-action: auto;
  margin-top: 38px;
} */
.slideItem {
  /* display: flex; */
  flex-wrap: nowrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  touch-action: auto;
  -ms-touch-action: auto;
}

.overflow-h {
  overflow: hidden;
}

.slick-list {
  background: #fff url('@/assets/img/orderlabs/sales/ajax-loader.gif') center center no-repeat;
}

.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}

.txt-tomato {
  color: #ff9000;
}
.txt-strawberry {
  color: #ff063b;
}
.txt-paprika {
  color: #59db3b;
}

/**/
ul {
  display: block;
  list-style-type: disc;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
}

div {
  display: block;
  unicode-bidi: isolate;
}

.quickMenu {
  float: left;
  margin: 10px 10px 0 0;
  /* font-size: 36px; */
  /* margin-top: 18px; */
}
/* .quickMenu .contFrame {
  background-color: rgba(27, 27, 27, 0.6);
  text-align: center;
  line-height: 1;
  width: 380px;
  height: 310px;
} */
.quickMenu button {
  width: 135px;
  height: 35px;
  margin-top: 5px;
  /* margin-bottom: 16px; */
  font-size: 17px;
  color: #e5e5e5;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
button {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  /* margin-bottom: 16rem; */
  overflow: visible;
  font: inherit;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}

.quickMenu p {
  font-size: 15px;
  margin-top: 10px;
  color: #e5e5e5;
}

h2 {
  display: block;
  /* font-size: 1.17em; */
  font-size: 30px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 18px;
  margin-bottom: 10px;
  /* font-weight: bold; */
  font-weight: 500;
  unicode-bidi: isolate;
  font-family: inherit;
  line-height: 1.1;
  color: #e5e5e5;
}
h3 {
  display: block;
  /* font-size: 1.17em; */
  font-size: 36px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 18px;
  margin-bottom: 10px;
  /* font-weight: bold; */
  font-weight: 500;
  unicode-bidi: isolate;
  font-family: inherit;
  line-height: 1.1;
  color: inherit;
}

img {
  vertical-align: middle;
  border: 0;
  display: inline-block;
  overflow-clip-margin: content-box;
  overflow: clip;
}

/**/
.container {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding: 8px;
}
.container ul {
  flex: 0 0 auto; /* 고정 너비 */
}

.quickMenu .contFrame {
  background-color: rgba(27, 27, 27, 0.6);
  text-align: center;
  width: 380px;
  height: 310px;
  padding: 20px;
  /* border-radius: 8px; */
}
</style>
