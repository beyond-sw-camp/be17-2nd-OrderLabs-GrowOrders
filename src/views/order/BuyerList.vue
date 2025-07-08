<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>주문관리 / 구매자</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">농장이름</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">작물이름</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">주문량</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">금액</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">주문 상태
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">주문 날짜
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">배송 상태
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">사랑농장</h6>
                      <p class="text-xs text-secondary mb-0">062-231-2411</p>
                  </div>
                </div>
              </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">토마토</p>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">350kg</p>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">400000원</p>
                </td>
                <td class="align-middle text-center text-sm">
                  <span class="badge badge-sm bg-gradient-success">주문완료</span>
                </td>
                <td class="align-middle text-center text-sm">
                  <span class="badge badge-sm bg-gradient-success"></span>
                </td>
                <td class="align-middle text-center text-sm">
                  2025.06.29
                </td>
                <td class="align-middle text-center text-sm">
                  <span class="badge badge-sm bg-gradient-success">배송중</span>
                </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-3.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user2"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">열정농장</h6>
                  <p class="text-xs text-secondary mb-0">042-261-3411</p>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">딸기</p>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">100kg</p>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">200000원</p>
            </td>
            <td class="align-middle text-center text-sm">
              <span class="badge badge-sm bg-gradient-success">주문완료</span>
            </td>
            <td class="align-middle text-center text-sm">
              <span class="badge badge-sm bg-gradient-success"></span>
            </td>
            <td class="align-middle text-center text-sm">
              2025.06.27
            </td>
            <td class="align-middle text-center text-sm">
              <span class="badge badge-sm bg-gradient-secondary">상품준비중</span>
            </td>
          </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-4.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user3"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">우리농장</h6>
                    <p class="text-xs text-secondary mb-0">054-211-2411</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">파프리카</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">300kg</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">360000원</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">주문완료</span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success"></span>
              </td>
              <td class="align-middle text-center text-sm">
                2025.06.26
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-info">배송완료</span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-3.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user4"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">나라농장</h6>
                    <p class="text-xs text-secondary mb-0">032-231-6411</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">토마토</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">300kg</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">200000원</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-secondary">주문취소</span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">교환</span>
              </td>
              <td class="align-middle text-center text-sm">
                2025.06.20
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success"></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user5"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">만세농장</h6>
                    <p class="text-xs text-secondary mb-0">062-221-5611</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">딸기</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">300kg</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">200000원</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-secondary">주문취소</span>
              </td>
              <td class=" align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">환불</span>
              </td>
              <td class="align-middle text-center text-sm">
                2025.06.19
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success"></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-4.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user6"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">오카농장</h6>
                    <p class="text-xs text-secondary mb-0">041-441-3411</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">파프리카</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">140kg</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">380000원</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">주문완료</span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success"></span>
              </td>
              <td class="align-middle text-center text-sm">
                2025.06.02
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">배송중</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
