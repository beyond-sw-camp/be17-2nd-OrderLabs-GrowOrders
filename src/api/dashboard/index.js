import api from "@/plugins/axiosinterceptor";

// 백엔드 호출 후 받은 데이터를 반환
const orderList = async () => {
    let data = {};
    let url = '/api/orderList.json';

    await api.get(url)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

const dashboardNav = async () => {
    let data = {};
    let url = '/api/dashboardNav.json';

    await api.get(url)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

const farmStatus = async () => {
    let data = {};
    let url = '/api/farmStatus.json';

    await api.get(url)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

const chartData = async () => {
    let data = {};
    let url = '/api/charts.json';

    await api.get(url)
        .then((res) => {
            data = res.data;
        })
        .catch((error) => {
            data = error.data;
        });

    return data;
}

export default { orderList, dashboardNav, farmStatus, chartData }