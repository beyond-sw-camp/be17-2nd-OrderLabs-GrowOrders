<script setup>
// import ArgonButton from "@/components/ArgonButton.vue";
import TimelineList from "@/examples/Cards/TimelineList.vue";
import TimelineItem from "@/examples/Cards/TimelineItem.vue";
</script>
<template>
  <div class="card h-100 mb-4">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">최근 거래 배송 조회</h6>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-items-center">
          <i class="far fa-calendar-alt me-2" aria-hidden="true"></i>
          <small>23 - 30 August 2025</small>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3">
        <timeline-list
          class="h-100"
          description="화요일 도착 확률 <i class='fa fa-arrow-up text-success' aria-hidden='true'></i>
        <span class='font-weight-bold'>24%</span>"
        >
          <timeline-item
            :icon="{ component: 'ni ni-credit-card', color: 'success' }"
            title="결제 완료, 24000₩"
            date-time="6월 22일 7:20"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-bell-55', color: 'danger' }"
            title="주문접수, #1832412 "
            date-time="6월 22일 15:32"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-shop', color: 'info' }"
            title="출고 완료"
            date-time="6월 23일 08:23"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-app', color: 'warning' }"
            title="택배 접수, No.4395133 "
            date-time="6월 23일 14:20"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-spaceship', color: 'primary' }"
            title="배송 출발"
            date-time="6월 23일 16:48"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-square-pin', color: 'dark' }"
            title="도착 완료"
            date-time="6월 24일 07:23"
          />
        </timeline-list>
      </div>
    <!-- <div class="card-body pt-4 p-3">
      <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">
        Newest
      </h6>
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="danger"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-down" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Netflix</h6>
              <span class="text-xs">27 March 2020, at 12:30 PM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold"
          >
            - $ 2,500
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Apple</h6>
              <span class="text-xs">27 March 2020, at 04:30 AM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 2,000
          </div>
        </li>
      </ul>
      <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">
        Yesterday
      </h6>
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Stripe</h6>
              <span class="text-xs">26 March 2020, at 13:45 PM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 750
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">HubSpot</h6>
              <span class="text-xs">26 March 2020, at 12:30 PM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 1,000
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Creative Tim</h6>
              <span class="text-xs">26 March 2020, at 08:30 AM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 2,500
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="dark"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-exclamation" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Webflow</h6>
              <span class="text-xs">26 March 2020, at 05:00 AM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-dark text-sm font-weight-bold"
          >
            Pending
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>
