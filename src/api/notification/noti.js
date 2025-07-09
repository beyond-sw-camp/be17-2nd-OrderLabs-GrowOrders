import api from "@/plugins/axiosinterceptor";

// 백엔드 호출 후 받은 데이터를 반환
const notification = async () => {
    let data = {};
    let url = '/api/notification.json';

    await api.get(url)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}



export default { notification }