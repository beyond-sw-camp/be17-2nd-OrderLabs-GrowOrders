import axios_api from "@/plugins/axiosinterceptor";

//재고 데이터 가져오기
const getInventoryAPI = async (request) => {
  let data = {};
  let url = "/api/inventory.json";

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

export default { getInventoryAPI };
