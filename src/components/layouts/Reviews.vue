<template>
  <section class="testimonial-area bg-gray pt-90px">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="testimonial-content-wrap pb-4">
            <div class="section-heading">
              <h2 class="section__title mb-3">Cộng đồng Smart Edu</h2>
              <p class="section__desc">
                Phụ huynh, học sinh và người hướng dẫn nói gì về chúng tôi
              </p>
            </div>
            <div class="btn-box mt-28px">
              <a href="#" class="btn theme-btn"
                >Gửi feedback <i class="fa-solid fa-arrow-right icon"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="fs-22 font-weight-medium pb-3 text-color-3">
            98% Gia sư & học viên hài lòng về chúng tôi
          </h3>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
            data-interval="3000"
          >
            <!-- Wrapper for slides -->
            <div class="carousel-inner">
              <div
                class="carousel-item"
                v-for="(item, index) in listReviews"
                :key="item.id"
                :class="{ active: index == 0 }"
              >
                <div class="card card-item">
                  <div class="card-body">
                    <p class="card-text">{{ item.content }}</p>
                    <div class="media media-card align-items-center pt-4">
                      <div class="media-img avatar-md">
                        <img
                          :src="item.avatar"
                          alt="avatar"
                          class="rounded-full"
                          style="width: 100%; height: 100%"
                        />
                      </div>
                      <div class="media-body">
                        <div class="d-flex align-items-center pt-1">
                          <span class="lh-18 pr-2"> {{ item.fullname }}</span>
                          <div class="review-stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev btn-slide btn"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              class="carousel-control-next btn-slide btn"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  props: {
    listReviews: {
      type: Array,
      default: []
    }
  }
};
</script>
<style scoped src="@/assets/styles/review.css"></style>