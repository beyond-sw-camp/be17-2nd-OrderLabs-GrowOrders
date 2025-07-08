<script setup>
import { onBeforeUnmount, onBeforeMount } from "vue";
import { useUserStore } from '@/store/users/login.js';
import { ref, reactive } from 'vue';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import SelectPosition from "../components/SelectPosition.vue";
import farmerApi from "@/api/users/login.js";


const body = document.getElementsByTagName("body")[0];
const store = useStore();
const router = useRouter();
const userStore = useUserStore();

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
let loginType = ref("");

const signinForm = reactive({
    email: "",
    password: "",
    type: ""
})

const onPickedChange = (val) => {
  loginType.value = val;
};


onBeforeMount(() => {
  store.state.hideConfigButton = true;
  store.state.showNavbar = false;
  store.state.showSidenav = false;
  store.state.showFooter = false;
  body.classList.remove("bg-gray-100");
});

onBeforeUnmount(() => {
  store.state.hideConfigButton = false;
  store.state.showNavbar = true;
  store.state.showSidenav = true;
  store.state.showFooter = true;
  body.classList.add("bg-gray-100");
});

const onSubmit = async () => {
  if (!email.value || !password.value) {
    alert("이메일과 비밀번호를 입력해주세요.");
    return;
  }

  let data;
  if (loginType.value === 1) {
    data = await farmerApi.farmerList(signinForm);
  } else {
    data = await farmerApi.buyerList(signinForm);
  }

  if (data && data.length > 0) {
    userStore.login(data[0]);
    router.push("/");
  } else {
    alert("로그인에 실패했습니다.");
  }

  router.push("/");
};
</script>

<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          isBlur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          v-bind:darkMode="true"
          isBtn="bg-gradient-success"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">로그인</h4>
                  <p class="mb-0">아이디와 비밀번호를 입력해주세요.</p>
                </div>
                <div class="card-body">
                  <form @submit.prevent="onSubmit">
                    <div class="mb-3">
                      <argon-input
                        v-model="email"
                        type="email"
                        placeholder="이메일"
                        name="email"
                        size="lg"
                        @keyup.enter="onSubmit"
                      />
                    </div>
                    <div class="mb-3">
                      <argon-input
                        v-model="password"
                        type="password"
                        placeholder="비밀번호"
                        name="password"
                        size="lg"
                        @keyup.enter="onSubmit"
                      />
                    </div>

                    <label class="form-label fw-bold text-dark">회원 유형 선택</label>
                    <SelectPosition class="mb-3" @update="onPickedChange" v-model="loginType"></SelectPosition>

                    <argon-switch 
                      v-model="rememberMe"
                      id="rememberMe" 
                      name="remember-me"
                    >
                      기억하기
                    </argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                        type="submit"
                      >
                        로그인
                      </argon-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-0 text-sm">  <!-- mb-4에서 mb-0으로 변경 -->
                    회원가입을 안하셨나요?
                    <a
                      href="javascript:;"
                      class="text-success text-gradient font-weight-bold"
                    >
                      회원 가입하기
                    </a>
                  </p>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-0 text-sm">  <!-- mb-4에서 mb-0으로 변경 -->
                    비밀번호를 잃어버렸나요?
                    <a
                      href="javascript:;"
                      class="text-success text-gradient font-weight-bold"
                    >
                      비밀번호 재발급
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column">
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg'); background-size: cover;"
              >
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4 class="mt-5 text-white font-weight-bolder position-relative">
                  "Attention is the new currency"
                </h4>
                <p class="text-white position-relative">
                  The more effortless the writing looks, the more effort the
                  writer actually put into the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>