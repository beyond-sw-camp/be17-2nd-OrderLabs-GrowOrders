import { EncryptStorage } from "encrypt-storage";
import { useRouter } from 'vue-router';
import { defineStore } from "pinia";
import { ref } from "vue";

const encryptStorage = new EncryptStorage("abcdefghijklmnopqrstuvwxyz0123456789", {
    prefix: 'swy'
});

export const useUserStore = defineStore('user', () => {
    const isLogin = ref(false);
    const userInfo = ref(null);
    const router = useRouter();

    // 수정된 checkLogin 함수
    const checkLogin = () => {
        const key = "user";
        const data = encryptStorage.getItem(key);

        if (data) {
            isLogin.value = true;
            userInfo.value = data; // userInfo도 업데이트
            console.log('User found in storage:', data);
        } else {
            isLogin.value = false;
            userInfo.value = null;
            console.log('No user found in storage');
        }

        return isLogin.value;
    };

    // 수정된 login 함수
    const login = () => {
        const key = "user";
        const item = {
            email: 'test01@test.com',
            nickname: 'test01'
        };

        encryptStorage.setItem(key, item);
        isLogin.value = true;
        userInfo.value = item;
        console.log('User logged in:', item);
    };

    const logout = () => {
        encryptStorage.removeItem("user");
        isLogin.value = false;
        userInfo.value = null;
        router.push('/');
        console.log('User logged out');
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