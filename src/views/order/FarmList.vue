<template>
<div class="card mb-4">
  <div class="card-header pb-0">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <h6 class="mb-0 me-3" style="white-space: nowrap;">농장 목록</h6>
        <div class="input-group input-group-sm ms-3" style="max-width: 250px;">
          <span class="input-group-text text-body px-2">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
          <input type="text" class="form-control" placeholder="Type here...">
        </div>
      </div>
      <label class="position-absolute end-2 top-5 mt-1 me-3 text-xs">
        정렬 기준:
        <select id="sortOption" onchange="sortTable()"
          class="form-select form-select-sm d-inline w-auto ms-1">
          <option value="year">재배 방식</option>
          <option value="crop">작물 이름</option>
          <option value="yield">예측 생산량</option>
          <option value="farm">농장 이름</option>
          <option value="region">지역</option>
        </select>
      </label>
    </div>
    <div class="card-body px-5 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0" id="predictionTable">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">농장 이름 / ID</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-5 ps-2">지역
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-5 ps-2">작물 이름
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-5 ps-2">재배 방식
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-3 ps-2">예측 생산량
                (㎏/10a)</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pe-3 ps-2">판매 가격
              </th>
              <th class="text-secondary opacity-7 pe-4 ps-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img src="../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">오늘의 파머스</h6>
                    <p class="text-xs text-secondary mb-0">155824517896</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">구미</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">토마토</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">비닐</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">880kg</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">5500/kg</p>
              </td>
              <td class="align-middle text-center text-sm">
                <a href="/order-page" class="badge text-xs badge-sm bg-gradient-success text-white"
                  style="text-decoration: none;">
                  주 문
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img src="../../assets/img/team-1.jpg" class="avatar avatar-sm me-3" alt="user2">
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">농장에서 바로</h6>
                    <p class="text-xs text-secondary mb-0">789564852478</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">영주</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">토마토</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">비닐</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">1180kg</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">4500/kg</p>
              </td>
              <td class="align-middle text-center text-sm">
                <a href="/order-page" class="badge text-xs badge-sm bg-gradient-success text-white"
                  style="text-decoration: none;">
                  주 문
                </a>
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
                    <h6 class="mb-0 text-sm">봉이네 농장</h6>
                    <p class="text-xs text-secondary mb-0">247651784255</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">오산</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">토마토</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">유리</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">1,545kg</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">6500/kg</p>
              </td>
              <td class="align-middle text-center text-sm">
                <a href="/order-page" class="badge text-xs badge-sm bg-gradient-success text-white"
                  style="text-decoration: none;">
                  주 문
                </a>
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
                    <h6 class="mb-0 text-sm">농장을 담다</h6>
                    <p class="text-xs text-secondary mb-0">964217623596</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">증평</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">딸기</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">비닐</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">120kg</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">5200/kg</p>
              </td>
              <td class="align-middle text-center text-sm">
                <a href="/order-page" class="badge text-xs badge-sm bg-gradient-success text-white"
                  style="text-decoration: none;">
                  주 문
                </a>
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
                    <h6 class="mb-0 text-sm">하뚜리딸기농장</h6>
                    <p class="text-xs text-secondary mb-0">145151784655</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">경주</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">딸기</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">유리</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">70kg</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">3900/kg</p>
              </td>

              <td class="align-middle text-center text-sm">
                <a href="/order-page" class="badge text-xs badge-sm bg-gradient-success text-white"
                  style="text-decoration: none;">
                  주 문
                </a>
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
                      <h6 class="mb-0 text-sm">초록길딸기농장</h6>
                      <p class="text-xs text-secondary mb-0">513549254698</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">경주</p>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">딸기</p>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">비닐</p>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">130kg</p>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">3200/kg</p>
                </td>
                <td class="align-middle text-center text-sm">
                  <a href="/order-page" class="badge text-xs badge-sm bg-gradient-success text-white"
                    style="text-decoration: none;">
                    주 문
                  </a>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
  <router-view />
</template>
<style scoped>
.bg-gradient-secondary-green {
  background-image: linear-gradient(310deg, #228b22 0%, #32cd32 100%);
}
</style>