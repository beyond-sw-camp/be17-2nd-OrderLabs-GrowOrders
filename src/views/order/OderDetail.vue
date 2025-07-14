<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/api/order'
import api2 from '@/api/order/userlist.js'

const data = ref([])
const data2 = ref([])
const item = ref(null)
const farm = ref(null)
const route = useRoute()
const orderId = route.params.orderId

const cropDirectInput = ref(false)
const cropValue = ref('')

onMounted(async () => {
  try {
    const orderResponse = await api.orderList()
    const farmResponse = await api2.farmList()
    data.value = orderResponse
    data2.value = farmResponse
    item.value = data.value.find(obj => obj.orderId == orderId)
    farm.value = data2.value.find(obj => obj.farmId == item.value.farmId)

    if (!item.value) {
      console.warn('해당 orderId의 주문 정보가 없습니다.')
    } else {
      cropValue.value = item.value.crop
    }
  } catch (err) {
    console.error('orderList 호출 실패:', err)
  }
})

function handleCropChange(event) {
  if (event.target.value === '직접입력') {
    cropDirectInput.value = true
    cropValue.value = ''
  } else {
    cropDirectInput.value = false
    cropValue.value = event.target.value
    if (item.value) {
      item.value.crop = event.target.value
    }
  }
}

function handleCropInputBlur() {
  if (!cropValue.value.trim()) {
    cropDirectInput.value = false
    if (item.value) {
      cropValue.value = item.value.crop
    }
  } else {
    if (item.value) {
      item.value.crop = cropValue.value
    }
  }
}
</script>

<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
      <div class="card shadow-lg mt-n6">
        <div class="card-body p-3">
          <div class="row gx-4">
            <div class="col-auto">
              <div class="avatar avatar-xl position-relative">
                <img
                  src="@/assets/img/team-1.jpg"
                  alt="profile_image"
                  class="w-100 border-radius-lg shadow-sm"
                />
              </div>
            </div>
            <div class="col-auto my-auto">
              <div class="h-100">
                <h5 class="mb-1" v-if="item">{{ item.name }}</h5>
                <p class="mb-0 font-weight-bold text-sm">SSG1999@gmail.com</p>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-1"
            >
              <div class="nav-wrapper position-relative end-0">
                <ul class="nav nav-pills nav-fill p-1" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link mb-0 px-0 py-1 active d-flex align-items-center justify-content-center"
                      data-bs-toggle="tab"
                      href="javascript:;"
                      role="tab"
                      aria-selected="true"
                    >
                      <span class="ms-2">내정보</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center"
                      data-bs-toggle="tab"
                      href="javascript:;"
                      role="tab"
                      aria-selected="false"
                    >
                      <span class="ms-2">주문목록</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">주문상세</p>
                <button class="btn btn-primary btn-sm ms-auto">주문수정</button>
              </div>
            </div>

            <div class="card-body" v-if="item">
              <p class="text-uppercase text-sm">주문정보</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-control-label">주문자 성명</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="item.name"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-control-label">품목명</label>
                    <select
                      v-if="!cropDirectInput"
                      class="form-control"
                      :value="cropValue"
                      @change="handleCropChange"
                    >
                      <option value="">-- 품목 선택 --</option>
                      <option value="토마토">토마토</option>
                      <option value="딸기">딸기</option>
                      <option value="파프리카">파프리카</option>
                      <option value="직접입력">직접입력</option>
                    </select>
                    <input
                      v-else
                      class="form-control mt-2"
                      type="text"
                      v-model="cropValue"
                      placeholder="품목을 입력하세요"
                      @blur="handleCropInputBlur"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-control-label">단가</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="item.price"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-control-label">수량</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="item.quantity"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-control-label">총합</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="item.total"
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-control-label">주소</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="item.address"
                    />
                  </div>
                </div>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="cancelRequest"
                  id="refund"
                  value="환불요청"
                  v-model="item.cancel"
                />
                <label class="form-check-label" for="refund">환불요청</label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="cancelRequest"
                  id="exchange"
                  value="교환요청"
                  v-model="item.cancel"
                />
                <label class="form-check-label" for="exchange">교환요청</label>
              </div>

              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">요구사항</p>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-control-label">주문 요청사항</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="item.order_request"
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-control-label">배달 요청사항</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="item.delivery_request"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div v-else>
              <p>주문 정보를 불러오는 중이거나, 해당 주문이 없습니다.</p>
            </div>
          </div>
        </div>

        <!-- 우측 프로필 카드 -->
        <div class="col-md-4">
          <div class="card card-profile">
            <img
              src="@/assets/img/bg-profile.jpg"
              alt="Image placeholder"
              class="card-img-top"
            />
            <div class="row justify-content-center">
              <div class="col-4 col-lg-4 order-lg-2">
                <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                  <a href="javascript:;">
                    <img
                      src="@/assets/img/team-2.jpg"
                      class="rounded-circle img-fluid border border-2 border-white"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
              <div class="d-flex justify-content-between">
                <a
                  href="javascript:;"
                  class="btn btn-sm btn-info mb-0 d-none d-lg-block"
                  >전화번호</a
                >
                <a
                  href="javascript:;"
                  class="btn btn-sm btn-info mb-0 d-block d-lg-none"
                  ><i class="ni ni-collection"></i
                ></a>
                <a
                  href="javascript:;"
                  class="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block"
                  >메세지</a
                >
                <a
                  href="javascript:;"
                  class="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"
                  ><i class="ni ni-email-83"></i
                ></a>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="row">
                <div class="col">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid text-center">
                      <span class="text-lg font-weight-bolder">12562</span>
                      <span class="text-sm opacity-8">판매수</span>
                    </div>
                    <div class="d-grid text-center mx-4">
                      <span class="text-lg font-weight-bolder"></span>
                      <span class="text-sm opacity-8"></span>
                    </div>
                    <div class="d-grid text-center">
                      <span class="text-lg font-weight-bolder">1142</span>
                      <span class="text-sm opacity-8">리뷰수</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-4" v-if="farm">
                <h5>{{ farm.farm_name }}</h5>
                <div class="h6 font-weight-300">
                  <i class="ni location_pin mr-2"></i>{{ farm.phone }}
                </div>
                <div class="h6 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>
                  {{ item.address }}
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>{{ farm.cultivationMethod }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
