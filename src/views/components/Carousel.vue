<script setup>
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";

const props = defineProps({
  chartsData: {
    type: Object,
    required: true,
    default: () => ({
      charts: []
    })
  }
});

</script>

<template>
  <div class="card card-carousel overflow-hidden h-100 p-0">
    <div
      id="carouselExampleCaptions"
      class="carousel slide h-100"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner border-radius-lg h-100">
        <div
          v-for="(chart, index) in props.chartsData.charts"
          :key="chart.id"
          class="carousel-item h-100"
          :class="{ active: index === 0 }"
        >
          <div class="card z-index-2 h-100">
            <gradient-line-chart
              :id="`chart-${chart.id}`"
              :title="chart.title"
              :description="`<i class='fa fa-arrow-up text-success'></i> <span class='font-weight-bold'>${index + 4}% more</span> in 2021`"
              :chart="chart.chart"
            />
          </div>
        </div>
        <!-- <div class="carousel-item h-100 active">
          <div class="card z-index-2 h-100">
            <gradient-line-chart
              id="chart-line1"
              title="Sales Overview"
              description="<i class='fa fa-arrow-up text-success'></i> <span class='font-weight-bold'>4% more</span> in 2021"
              :chart="{
                labels: ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                datasets: [
                  {
                    label: 'Mobile Apps',
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                  },
                ],
              }"
            />
          </div>
        </div>
        <div class="carousel-item h-100">
          <div class="card z-index-2 h-100">
            <gradient-line-chart
              id="chart-line2"
              title="Sales Overview"
              description="<i class='fa fa-arrow-up text-success'></i> <span class='font-weight-bold'>5% more</span> in 2021"
              :chart="{
                labels: ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                datasets: [
                  {
                    label: 'Mobile Apps',
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                  },
                ],
              }"
            />
          </div>
        </div>

        <div class="carousel-item h-100">
          <div class="card z-index-2 h-100">
            <gradient-line-chart
              id="chart-line3"
              title="Sales Overview"
              description="<i class='fa fa-arrow-up text-success'></i> <span class='font-weight-bold'>6% more</span> in 2021"
              :chart="{
                labels: ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                datasets: [
                  {
                    label: 'Mobile Apps',
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                  },
                ],
              }"
            />
          </div>
        </div> -->

        
        <!-- <div
          class="carousel-item h-100"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/img/carousel-2.jpg') + ')',
            backgroundSize: 'cover',
          }"
        >
          <div
            class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5"
          >
            <div
              class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3"
            >
              <i class="ni ni-bulb-61 text-dark opacity-10"></i>
            </div>
            <h5 class="text-white mb-1">Faster way to create web pages</h5>
            <p>
              That’s my skill. I’m not really specifically talented at anything
              except for the ability to learn.
            </p>
          </div>
        </div>
        <div
          class="carousel-item h-100"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/img/carousel-3.jpg') + ')',
            backgroundSize: 'cover',
          }"
        >
          <div
            class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5"
          >
            <div
              class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3"
            >
              <i class="ni ni-trophy text-dark opacity-10"></i>
            </div>
            <h5 class="text-white mb-1">Share with us your design tips!</h5>
            <p>
              Don’t be afraid to be wrong because you can’t learn anything from
              a compliment.
            </p>
          </div>
        </div> -->
      </div>
      <button
        class="carousel-control-prev w-5 me-3"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next w-5 me-3"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
