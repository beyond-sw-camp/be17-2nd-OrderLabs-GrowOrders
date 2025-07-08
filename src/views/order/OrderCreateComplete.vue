<!-- <script setup> -->
// import { onBeforeMount, onMounted, onBeforeUnmount } from "vue";
// import { useStore } from "vuex";

// import setNavPills from "@/assets/js/nav-pills.js";
// import setTooltip from "@/assets/js/tooltip.js";
// import ProfileCard from "./components/ProfileCard.vue";
// // import ArgonInput from "@/components/ArgonInput.vue";
// // import ArgonButton from "@/components/ArgonButton.vue";

// const body = document.getElementsByTagName("body")[0];

// const store = useStore();

// onMounted(() => {
//   store.state.isAbsolute = true;
//   setNavPills();
//   setTooltip();
// });
// onBeforeMount(() => {
//   store.state.imageLayout = "profile-overview";
//   store.state.showNavbar = false;
//   store.state.showFooter = true;
//   store.state.hideConfigButton = true;
//   body.classList.add("profile-overview");
// });
// onBeforeUnmount(() => {
//   store.state.isAbsolute = false;
//   store.state.imageLayout = "default";
//   store.state.showNavbar = true;
//   store.state.showFooter = true;
//   store.state.hideConfigButton = false;
//   body.classList.remove("profile-overview");
// });
// <!-- </script> -->
<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: url(&quot;https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80&quot;);
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
      <div class="card shadow-lg mt-n6">
        <div class="card-body p-3">
        <div class="row gx-4">
          <!-- <div class="col-auto">
                <div class="avatar avatar-xl position-relative">
                </div>
              </div> -->
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">
                주문 취소되었습니다.
              </h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-1">
            <div class="nav-wrapper position-relative end-0">
              <ul class="nav nav-pills nav-fill p-1" role="tablist">
                <li class="nav-item">
                  <a class="nav-link mb-0 px-0 py-1 active d-flex align-items-center justify-content-center "
                    data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="true">
                    <span class="ms-2">내정보</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center " data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
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
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">주문정보</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">주문자 성명</label>
                    <input class="form-control" type="text" value="심시경">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="crop-select" class="form-control-label">품목명</label>

                    <!-- 선택 드롭다운 -->
                    <select class="form-control" id="crop-select" onchange="handleCropChange()" style="display: block;">
                      <option value="">-- 품목 선택 --</option>
                      <option value="토마토">토마토</option>
                      <option value="딸기">딸기</option>
                      <option value="배추">파프리카</option>
                    </select>

                    <!-- 직접입력 input -->
                    <input class="form-control mt-2" id="crop-input" type="text" placeholder="품목을 입력하세요" style="display: none;">
                  </div>
                </div>

                <!-- <script>
                  function handleCropChange() {
                    const select = document.getElementById('crop-select');
                    const input = document.getElementById('crop-input');

                    if (select.value === '직접입력') {
                      select.style.display = 'none';
                      input.style.display = 'block';
                      input.focus();
                    }
                  }

                  document.getElementById('crop-input').addEventListener('blur', () => {
                    const input = document.getElementById('crop-input');
                    const select = document.getElementById('crop-select');

                    if (input.value.trim() === '') {
                      input.style.display = 'none';
                      select.style.display = 'block';
                      select.value = '';
                    }
                  });
                </script> -->
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">단가</label>
                    <input class="form-control" type="text" value="5000원/kg">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">수량</label>
                    <input class="form-control" type="text" value="4kg">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">총합</label>
                    <input class="form-control" type="text" value="20000원">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">주소</label>
                    <input class="form-control" type="text" value="경상북도 구미시 도봉로 5길 21-높은유통">
                  </div>
                </div>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
                <label class="form-check-label" for="radioDefault1">
                  환불요청
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked>
                <label class="form-check-label" for="radioDefault2">
                  교환요청
                </label>
              </div>
              <hr class="horizontal dark">
              <p class="text-uppercase text-sm">요구사항</p>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">주문 요청사항</label>
                    <input class="form-control" type="text" value="내용물 안터지게 포장해주세요">
                  </div>
                </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="example-text-input" class="form-control-label">배달 요청사항</label>
                      <input class="form-control" type="text" value="개조심, 아기가 자고 있어요 초인종 누르지 말아주세요">
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-profile">
            <img src="../assets/img/bg-profile.jpg" alt="Image placeholder" class="card-img-top">
            <div class="row justify-content-center">
              <div class="col-4 col-lg-4 order-lg-2">
                <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                  <a href="javascript:;">
                    <img src="../assets/img/team-2.jpg" class="rounded-circle img-fluid border border-2 border-white">
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
              <div class="d-flex justify-content-between">
                <a href="javascript:;" class="btn btn-sm btn-info mb-0 d-none d-lg-block">전화번호</a>
                <a href="javascript:;" class="btn btn-sm btn-info mb-0 d-block d-lg-none"><i class="ni ni-collection"></i></a>
                <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block">메세지</a>
                <a href="javascript:;" class="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"><i class="ni ni-email-83"></i></a>
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
              <div class="text-center mt-4">
                <h5>
                  김농사
                </h5>
                <div class="h6 font-weight-300">
                  <i class="ni location_pin mr-2"></i>우리아기들농장
                </div>
                <div class="h6 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>충청북도 증평군 증평읍 사곡리 1434
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>사랑으로 열정으로 보답하겠습니다
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
