import { EncryptStorage } from "encrypt-storage";
import { useRouter } from 'vue-router';
import { defineStore } from "pinia";
import { ref } from "vue";


const encryptStorage = new EncryptStorage("abcdefghijklmnopqrstuvwxyz0123456789", {
    prefix: 'swy'
});

export const useUserStore = defineStore('user', () => {
    const isLogin = ref(false);
    const userInfo = ref({});
    const router = useRouter();

    // 수정된 checkLogin 함수
    const checkLogin = () => {
        const key = "user";
        const data = encryptStorage.getItem(key);

        if (data) {
            isLogin.value = true;
            userInfo.value = data;
        } else {
            isLogin.value = false;
            userInfo.value = null;
        }

        return isLogin.value;
    };

    // 수정된 login 함수
    const login = (user) => {
        const key = "user";
        // const item = {
        //     email: 'test01@test.com',
        //     nickname: 'test01',
        //     type: 1
        // };

        encryptStorage.setItem(key, user);
        isLogin.value = true;
        userInfo.value = user;
    };

    const logout = () => {
        encryptStorage.removeItem("user");
        isLogin.value = false;
        userInfo.value = null;
        router.push('/signin');
    };

    // 앱 시작 시 자동으로 로그인 상태 확인
    // checkLogin();

    return {
        isLogin,
        userInfo,
        login,
        logout,
        checkLogin
    };
});