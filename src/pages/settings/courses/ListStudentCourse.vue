<template>
  <section class="cart-area section-padding" style="padding-top: 50px">
    <div class="container">
        <h1 class="fs-22 font-weight-semi-bold col-9 mb-5">Danh sách học viên của khóa học PHP cơ bản</h1>
      <!-- end filter-bar -->
      <div class="table-responsive">
        <table class="table generic-table">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Tên học viên</th>
              <th scope="col">Ngày tháng nhập học</th>
              <th scope="col">Smart Edu duyệt</th>
            </tr>
          </thead>
          <tbody id="cart_body"></tbody>
        </table>
      </div>
    </div>
    <!-- end container -->
  </section>
</template>