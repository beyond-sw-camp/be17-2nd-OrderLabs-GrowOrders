import axios_api from "@/plugins/axiosinterceptor";

//농장 데이터 가져오기
const getTotalSalesAPI = async (request) => {
  let data = {};
  let url = "/api/farmSaleData.json";

  await axios_api
    .get(url, request)
    .then((response) => {
      data = response.data;
    })
    .catch((error) => {
      data = error.data;
    });

  return data;
};

export default { getTotalSalesAPI };
