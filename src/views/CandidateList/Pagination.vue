<template>
  <nav class="c-pagination" aria-label="Page navigation example">
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <button
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          class="block p-3 ml-0 mr-1 leading-tight text-text-light rounded-full hover:bg-primary-base hover:text-white"
        >
          <span class="sr-only">Anterior</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
      <li class="w-11 h-11" v-for="page in pages" :key="page.name">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="
            isPageActive(page.name)
              ? 'text-white bg-primary-base'
              : 'text-text-light'
          "
          class="font-regular border border-transparent w-full h-full leading-tight block rounded-full hover:bg-primary-base hover:text-white"
        >
          {{ page.name + 1 }}
        </button>
      </li>
      <li>
        <button
          @click="onClickNextPage"
          :disabled="isInLastPage"
          class="block p-3 leading-tight text-text-light rounded-full hover:bg-primary-base hover:text-white"
        >
          <span class="sr-only">Próximo</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import useStore from "@/hooks/useStore";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    minButtons: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    onClickPreviousPage() {
      if (this.currentPage > 0) this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      if (this.currentPage <= this.totalPages)
        this.$emit("pagechanged", this.currentPage + 1);
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 0) {
        return 0;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.minButtons;
      }

      return this.currentPage - 1;
    },
    pages() {
      const range: any = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.minButtons - 1, this.totalPages - 1);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 0;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages - 1;
    },
  },
});
</script>

<style></style>
