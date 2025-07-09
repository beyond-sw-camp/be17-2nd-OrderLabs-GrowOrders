<script setup>
import { ref, computed, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import CropCard from "@/components/CropCard.vue";
import { useUserStore } from '@/store/users/login.js';
import { useRoute } from 'vue-router'
import api from '@/api/order'


const isReadOnly = computed(() => mode.value !== 'register')


const selectedLocation = ref('')


// 이미지 추가
// .1 이미지 파일과 미리보기 URL을 상태로 관리
const previewUrl = ref(null)

// .2 파일 선택 시 호출되는 함수
function onImageChange(event) {
  const file = event.target.files[0]
  if (file) {
    previewUrl.value = URL.createObjectURL(file)
  } else {
    previewUrl.value = null
  }
}
const body = document.getElementsByTagName("body")[0];
const store = useStore();



// 2. isSubmitted → isReadOnly로 명확하게 관리하기
// const isReadOnly = computed(() => mode.value === 'detail')


const farmName = ref('')
const addressDetail = ref('')
const area = ref('')
const description = ref('')



onMounted(() => {
  store.state.isAbsolute = true;
  setNavPills();
  setTooltip();
});
onBeforeMount(() => {
  store.state.imageLayout = "profile-overview";
  store.state.showNavbar = false;
  store.state.showFooter = true;
  store.state.hideConfigButton = true;
  body.classList.add("profile-overview");
});
onBeforeUnmount(() => {
  store.state.isAbsolute = false;
  store.state.imageLayout = "default";
  store.state.showNavbar = true;
  store.state.showFooter = true;
  store.state.hideConfigButton = false;
  body.classList.remove("profile-overview");
});
</script>



<template>
  <main>
    <!-- 페이지 전체 너비를 가득 채우는 컨테이너 -->
    <div class="container-fluid">
          <!--상단 배경 이미지-->
          <div
        class="page-header min-height-300"
        :style="{
          backgroundImage: `url(${require('@/assets/img/farm_register.jpg')})`,
          marginRight: '-24px',
          marginLeft: '-25%'
        }"
      >
      <!--반투명한 오버레이 효과--> 
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
      <!--카드 그림자 효과-->
      <div class="card shadow-lg mt-n6">
      </div>
    </div>


    <!--메인 컨테이너-->
    <div class="py-4 container-fluid">
      <!-- 그리드에서 열들을 한 줄(row)로 배치하는 용도, 왼쪽카드랑 오른쪽 카드 수평유지-->
      <div class="row">
       
        <!--왼쪽 카드(등록 폼) 너비-->
        <div class="col-md-8">
          <!--왼쪽 카드(등록 폼)-->
          <div class="card">
            <!--왼쪽 카드 헤더-->
            <div class="card-header pb-0">
              <!--가로방향에 따라 유연하게 레이아웃 정렬-->
              <div class="d-flex align-items-center">
                <!--아래쪽 마진 0, 타이틀-->
                <p class="mb-0" v-if="mode == 'register'">농장 등록</p>
                <p class="mb-0" v-if="mode == 'detail'">농장 상세</p>
                <!--등록버튼-->
                <argon-button
                v-if="mode === 'register'"
                color="success"
                size="sm"
                class="ms-auto"
                @click="handleSubmit"
              >
                등록
              </argon-button>
            

              <!--수정 버튼-->
              <!-- 농장 주인만 수정 버튼 표시 -->
              <argon-button
                  v-if="mode == 'detail' && role == '1'"
                  color="warning"
                  size="sm"
                  class="ms-auto"
                  @click="enterEditMode"
                >
                  수정
                </argon-button>
            </div>
          </div>


          <!--농부 시점-->
            <!--왼쪽  카드 바디-->
            <div class="card-body" v-if="role == '1'">
              <!--1층 : 입력폼 묶어서 수평으로 정렬 -->
              <div class="row">
                <!--1.농장아이디(자동입력, 수정불가, 회색처리)-->
                <!--디비 연결후에 접속한 유저의 농장 id 끌고오기-->
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">사용자 아이디</label>
                  <argon-input :model-value="'15561613'" readonly class="bg-light text-muted" />
                </div>
              </div>


                <!--2층-->
                <div class="row mb-3">
                <!--3. 농장 이름-->
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">농장 이름</label>
                  <input
                    v-model="farmName"
                    type="text"
                    class="form-control"
                    placeholder="농장 이름을 입력하세요"
                    :readonly="isReadOnly"
                    :class="isReadOnly ? 'bg-light text-muted' : ''"
                  />
                </div>
                </div>

                

                <!--3층-->
                <div class="row mb-3">
                <!--4. 농장 주소(도)-->
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">농장 소재 지역</label>
                  <select
                    id="location-select"
                    class="form-control"
  v-model="selectedLocation"
  :disabled="isReadOnly"
  :class="isReadOnly ? 'bg-light text-muted' : ''"
                    >
                    <option value="">-- 소재 지역 선택 --</option>
                    <option value="경기도">경기도</option>
                    <option value="강원도">강원도</option>
                    <option value="충청북도">충청북도</option>
                    <option value="충청남도">충청남도</option>
                    <option value="전라북도">전라북도</option >
                    <option value="전라남도">전라남도</option>
                    <option value="경상북도">경상북도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="제주특별자치도">제주특별자치도</option>
                  </select>
                </div>
              </div>

              <div class="row mb-3">
                <!--5. 상세 주소-->
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">농장 상세 주소</label>
                    <input v-model="addressDetail" type="text" class="form-control" placeholder="농장 상세 주소를 입력하세요" :readonly="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''">
                </div>
              </div>
              
                 <!--4층-->
                 <div class="row mb-3">
                 <!--7. 농장 면적-->
                 <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">농장 면적</label>
                  <!--단위 고정시키기-->
                  <div class="input-group">
                    <input v-model="area" type="number" class="form-control" id="cultivation-area" placeholder="면적을 입력하세요" :readonly="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''">
                    <span class="input-group-text">㎡</span>
                  </div>
                  </div>
                </div>
                
                <div class="row mb-3">
                <!--4. 농장 소개글-->
                  <div class="col-md-12">
                    <label for="farm-description" class="form-control-label">농장 소개</label>
                    <textarea  v-model="description" id="farm-description" class="form-control" placeholder="농장 소개글을 입력하세요" rows="4" :readonly="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''"></textarea>
                  </div>
                </div>


                <!--6층-->
                <div class="row">
                  <!--11.사진 등록-->
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="profile-image" class="form-control-label">농장 사진 등록</label>
                      <!-- 이미지 업로드 -->
                      <input type="file" class="form-control" id="profile-image" accept="image/*" @change="onImageChange"  :disabled="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''"/>
                      <!-- 미리보기 -->
                      <img v-if="previewUrl" :src="previewUrl" class="profile-preview-box mt-3" alt="미리보기" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          </div>
        </div>
        <!-- 오른쪽: 품목 프로필 카드 -->
        <div class="col-md-4" v-if="selectedCropInfo">
      <CropCard :crop="selectedCropInfo" />
    </div>
      
  
    </div>

  </main>
</template>

<style scoped>
.profile-preview-box {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>



