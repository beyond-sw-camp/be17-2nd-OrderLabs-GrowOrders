import axios_api from '@/plugins/axiosinterceptor'

//농장 데이터 가져오기
const getTotalSalesAPI = async (request) => {
  let data = {}
  let url = '/farmSaleData.json'

  await axios_api
    .get(url, request)
    .then((response) => {
      data = response.data
      console.log('sales/index.js 검색 데이터')
      console.log(data)
    })
    .catch((error) => {
      data = error.data
      console.log('dqwdqwdqw')
    })

  return data
}

export default { getTotalSalesAPI }
