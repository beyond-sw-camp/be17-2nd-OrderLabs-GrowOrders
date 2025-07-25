import api from "@/plugins/axiosinterceptor";

// 백엔드 호출 후 받은 데이터를 반환
const farmerInfo = async (req) => {
    let data = {};
    let url = '/api/farmerList.json';

    await api.get(url, req)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

const buyerInfo = async (req) => {
    let data = {};
    let url = '/api/buyerList.json';

    await api.get(url, req)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

export default { farmerInfo, buyerInfo };