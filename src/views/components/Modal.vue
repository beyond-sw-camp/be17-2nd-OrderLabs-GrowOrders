<script setup>
const props = defineProps(['data'])
</script>

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">재고 수정</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body container-fluid py-4">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <p class="text-uppercase text-sm">재고 정보</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">작물 ID</label>
                        <input class="form-control" type="text" :placeholder="props.data?.id" disabled />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">작물 종류</label>
                        <input class="form-control" type="text" :placeholder="props.data?.crop_type" disabled />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">예측 산출량</label>
                        <div class="input-group">
                          <input class="form-control-80" type="text" :value="props.data?.inventory_count" />
                          <span class="input-group-text form-control-20">/㎡</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">예측 수확일</label>
                        <input class="form-control" type="date" :value="props.data?.date" />
                      </div>
                    </div>
                  </div>
                  <hr class="horizontal dark" />
                  <p class="text-uppercase text-sm">Contact Information</p>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Address</label>
                        <input class="form-control" type="text" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">City</label>
                        <input class="form-control" type="text" value="New York" />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Country</label>
                        <input class="form-control" type="text" value="United States" />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Postal code</label>
                        <input class="form-control" type="text" value="437300" />
                      </div>
                    </div>
                  </div>
                  <hr class="horizontal dark" />
                  <p class="text-uppercase text-sm">추가 정보</p>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">메모</label>
                        <input class="form-control" type="text" placeholder="재고에 관련하여 필요한 메모 작성하세요." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
          <button type="button" class="btn btn-primary">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>
