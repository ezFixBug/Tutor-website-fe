<template>
  <div class="text-center pt-3">
    <nav
      aria-label="Page navigation example"
      class="pagination-box"
      v-show="pagination.total_pages > 1"
    >
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !pagination.prev_page }">
          <router-link
            class="page-link"
            :to="{
              path: $route.path,
              query: {
                page: pagination.current_page - 1,
              },
            }"
            aria-label="Previous"
            ><span aria-hidden="true"
              ><i class="fa-solid fa-arrow-left"></i></span
          ></router-link>
        </li>
        <li
          class="page-item"
          :class="{
            active: pagination.current_page === page,
            ellipsis: page === '...',
          }"
          v-for="page in displayedPages"
          :key="page"
        >
          <router-link
            class="page-link"
            v-if="page !== '...'"
            :to="{
              path: $route.path,
              query: {
                page: page,
              },
            }"
            @click="page !== '...' ? goToPage(page) : null"
            >{{ page }}</router-link
          >
          <span v-else class="page-link"> {{ page }} </span>
        </li>
        <li class="page-item" :class="{ disabled: !pagination.next_page }">
          <router-link
            class="page-link"
            :to="{
              path: $route.path,
              query: {
                page: pagination.current_page + 1,
              },
            }"
            aria-label="Next"
            ><span aria-hidden="true"
              ><i class="fa-solid fa-arrow-right"></i></span
          ></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    pagination: {
      type: Object,
      default: {},
    },
  },

  data() {
    return {};
  },

  methods: {
    goToPage(page) {
      if (page === "...") return;
      this.pagination.current_page = page;
    },
  },

  computed: {
    displayedPages() {
      const currentPage = this.pagination.current_page;
      const totalPages = this.pagination.total_pages;
      const delta = 1;
      const left = currentPage - delta;
      const right = currentPage + delta + 1;
      const range = [];
      const pages = [];

      for (let i = 1; i <= totalPages; i++) {
        if (i == 1 || i == totalPages || (i >= left && i < right)) {
          range.push(i);
        }
      }

      for (let i of range) {
        if (pages.length !== 0 && i - pages[pages.length - 1] !== 1) {
          pages.push("...");
        }
        pages.push(i);
      }
      return pages;
    },
  },
};
</script>