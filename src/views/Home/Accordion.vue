<template>
  <div class="c-accordion" id="accordion-collapse" data-accordion="collapse">
    <div class="mb-4 rounded-xl shadow-md">
      <h2>
        <button
          type="button"
          class="bg-background-white flex items-center justify-between w-full p-5 font-regular text-left text-xl border border-gray-200 rounded-t-xl"
          :class="!isOpen ? 'rounded-b-xl' : 'rounded-none'"
          v-on:click="isOpen = !isOpen"
        >
          <span>{{ title }}</span>
          <span>
            <svg
              v-if="isOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </span>
        </button>
      </h2>
      <div :class="isOpen ? 'd-block' : 'hidden'">
        <div
          class="p-5 font-light border border-gray-200 bg-background-white rounded-b-xl"
        >
          <p class="mb-2 text-gray-500">
            <slot />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IAccordion } from "@/models/accordion.model";

export default {
  data: (): IAccordion => {
    return {
      isOpen: false,
    };
  },
  name: "Accordion",
  props: ["title"],
};
</script>
