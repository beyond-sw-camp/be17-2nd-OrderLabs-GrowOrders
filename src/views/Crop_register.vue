<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import CropCard from "@/components/CropCard.vue";
import axios from 'axios'; 

// 드롭다운 목록
import { ref, computed, watch } from 'vue'
// 01. 품목 드롭다운
const selectedCrop = ref('')
// 02. 재배지역 드롭다운
const selectedLocation = ref('')
// 03. 재배방식 드롭다운
const selectedMethod = ref('')
// 04. 관수방식 드롭다운
const selectedIrrigation = ref('')
// 05. 비료 사용 여부 드롭다운
const fertilizerUsage = ref('')
// 06. 농약 사용 여부 드롭다운
const pesticideUsage = ref('')
const sowingDate = ref('')
const cultivationArea = ref('')
const mode = ref('register')

const selectedCropInfo = computed(() => cropInfoMap[selectedCrop.value] || null)
const body = document.getElementsByTagName("body")[0];
const store = useStore();

// 등록 완료하면 인풋값 수정 못하게 리드온리 처리
const isReadOnly = computed(() => mode.value == 'detail')

function handleSubmit() {
  mode.value = 'detail'
  // 등록하면 등록 완료 알러트창 띄움
  if (mode.value !== 'register') {
    alert("물량이 등록되었습니다.");
    return;
  }
}

function enterEditMode() {
  mode.value = 'register'

}


// 프론트 제이슨 서버에 전송 
const onSubmit = async () => {
  try {
    const payload = {
      selectedCrop: selectedCrop.value,
      selectedMethod: selectedMethod.value,
      sowingDate: sowingDate.value,
      selectedLocation: selectedLocation.value,
      cultivationArea: cultivationArea.value,
      selectedIrrigation: selectedIrrigation.value,
      fertilizerUsage: fertilizerUsage.value,
      pesticideUsage: pesticideUsage.value
    };

    const response = await axios.post('http://localhost:3001/crops', payload);
    console.log('서버 응답:', response.data);
  } catch (error) {
    console.error('등록 실패:', error);
  }

};


// 품목별 재배 방식 정의
const cropMethods = {
  토마토: ['수경재배', '토양재배'],
  딸기: ['고설베드재배', '양액재배'],
  파프리카: ['양액재배']
}

// 선택한 품목에 따른 재배 방식 목록 계산
const availableMethods = computed(() => {
  return cropMethods[selectedCrop.value] || []
})

// 품목이 바뀌면 재배 방식 초기화
watch(selectedCrop, () => {
  selectedMethod.value = ''
})

// 이미지 파일과 미리보기 URL을 상태로 관리
const profileImageFile = ref(null)
const previewUrl = ref('')

// 파일 선택 시 호출되는 함수
const onImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    profileImageFile.value = file
    previewUrl.value = URL.createObjectURL(file)
  } else {
    profileImageFile.value = null
    previewUrl.value = ''
  }
}


// 품목 프로필 카드
const cropInfoMap = {
  토마토: {
    name: '토마토',
    image: require('@/assets/img/tomato.jpg'),
    description: '과즙이 풍부하고 비타민이 많은 대표 과채류'
  },
  딸기: {
    name: '딸기',
    image: require('@/assets/img/strawberry.jpg'),
    description: '봄철 대표 과일, 당도와 향이 뛰어남'
  },
  파프리카: {
    name: '파프리카',
    image: require('@/assets/img/paprika.jpg'),
    description: '색상이 다양하고 비타민 C가 풍부한 채소'
  }
}

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
  <form @submit.prevent="onSubmit">
  <main>
    <!-- 페이지 전체 너비를 가득 채우는 컨테이너 -->
    <div class="container-fluid">
          <!--상단 배경 이미지-->
          <div
        class="page-header min-height-300"
        :style="{
          backgroundImage: `url(${require('@/assets/img/crop_register_image.jpg')})`,
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
                <p class="mb-0" v-if="mode == 'register'">물량 등록</p>
                <p class="mb-0" v-if="mode == 'detail'">물량 상세</p>
                <!--등록버튼-->
                <argon-button  v-if="mode === 'register'" 
                color="success" size="sm" class="ms-auto" 
                 @click="handleSubmit" >등록</argon-button>
                
                
                <!--수정 버튼-->
                <argon-button
                  v-if="mode === 'detail'"
                  color="warning"
                  size="sm"
                  class="ms-auto"
                  @click="enterEditMode"
                >
                  수정
                </argon-button>
              </div>
            </div>
            
            
            <!--왼쪽  카드 바디-->
            <div class="card-body">
              <!--1층 : 입력폼 묶어서 수평으로 정렬 -->
              <div class="row">
                <!--1.농장아이디(자동입력, 수정불가, 회색처리)-->
                <!--디비 연결후에 접속한 유저의 농장 id 끌고오기-->
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">농장 아이디</label>
                  <argon-input :model-value="'15561613'" readonly class="bg-light text-muted" />
                </div>
                <!--2.사용자 아이디(자동입력, 수정불가, 회색처리)-->
                <!--디비 연결후에 접속한 유저 id 끌고오기-->
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">사용자 아이디</label>
                  <argon-input :model-value="'12354656'" readonly class="bg-light text-muted"  />
                </div>
              </div>

                <!--2층-->
                <div class="row mb-3">
                <!--3.품목-->
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">품목</label>
                  <select
                    class="form-control"
                    id="crop-select"
                    v-model="selectedCrop"
                    :disabled="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''" >
                    <option value="">-- 품목 선택 --</option>
                    <option value="토마토">토마토</option>
                    <option value="딸기">딸기</option>
                    <option value="파프리카">파프리카</option>
                  </select>
                </div>
                <!--4. 재배 방식-->
                <div class="col-md-6" v-if="availableMethods.length">
                  <label class="form-control-label">재배 방식</label>
                  <select class="form-control" v-model="selectedMethod" :disabled="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''">
                      <option value="">-- 재배 방식 선택 --</option>
                      <option v-for="method in availableMethods" :key="method" :value="method">
                      {{ method }}
                    </option>
                  </select>
                </div>              
                </div>


                <!--3층-->
                <div class="row">
                <!--5. 파종일-->
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">파종일</label>
                  <argon-input type="date" v-model="sowingDate" :readonly="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''" />
                </div>
                <!--5. 재배 지역-->
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">재배 지역</label>
                  <select
                    class="form-control"
                    id="location-select"
                    v-model="selectedLocation"
                    :disabled="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''">
                    <option value="">-- 지역 선택 --</option>
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

                 <!--4층-->
                 <div class="row mb-3">
                 <!--7. 재배 면적-->
                 <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">재배 면적</label>
                  <!--단위 고정시키기-->
                  <div class="input-group">
                    <input type="number" class="form-control" id="cultivation-area" v-model="cultivationArea" 
                    :disabled="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''" placeholder="면적을 입력하세요">
                    <span class="input-group-text">㎡</span>
                  </div>
                  </div>
                  <!--8.관수 방식-->
                  <div class="col-md-6">
                    <label class="form-control-label">관수 방식</label>
                    <select class="form-control" v-model="selectedIrrigation" :disabled="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''">
                      <option value="">-- 관수 방식 선택 --</option>
                      <option value="점적관수">점적관수</option>
                      <option value="스프링클러">스프링클러</option>
                      <option value="관개수로">관개수로</option>
                      <option value="자동관수">자동관수</option>
                      <option value="수동관수">수동관수</option>
                      <option value="직접입력">직접 입력</option>
                    </select>
                  </div>
                </div>
                
                <!--5층-->
                <div class="row mb-3">
                 <!--9. 비료 사용 여부 -->
                <div class="col-md-6">
                  <label class="form-control-label">비료 사용 여부</label>
                  <select class="form-control" v-model="fertilizerUsage" :disabled="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''">
                    <option value="">-- 비료 사용 선택 --</option>
                    <option value="유기질 비료">유기질 비료</option>
                    <option value="무기질 비료">무기질 비료</option>
                    <option value="복합 비료">복합 비료</option>
                    <option value="사용 안함">사용 안함</option>
                  </select>
                </div>
                <!-- 10. 농약 사용 여부 -->
                <div class="col-md-6">
                  <label class="form-control-label">농약 사용 여부</label>
                  <select class="form-control" v-model="pesticideUsage" :disabled="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''">
                    <option value="">-- 농약 사용 선택 --</option>
                    <option value="사용함">사용함</option>
                    <option value="사용 안함">사용 안함</option>
                  </select>
                </div>
              </div>  

                <!--6층-->
                <div class="row">
                  <!--11.사진 등록-->
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="profile-image" class="form-control-label">사진 등록</label>
                      <!-- 이미지 업로드 -->
                       <!--이미지는 v-model 사용불가 axios로 넘겨줘야함-->
                      <input type="file" class="form-control" id="profile-image" accept="image/*" @change="onImageChange" :readonly="isReadOnly" :class="isReadOnly ? 'bg-light text-muted' : ''" />
                      <!-- 미리보기 -->
                      <img v-if="previewUrl" :src="previewUrl" class="profile-preview-box mt-3" alt="미리보기" />
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
    </div>
  </main>
</form>
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



