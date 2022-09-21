<template>
  <div
    class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end"
  >
    <div class="max-w-sm w-full">
      <div
        class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
      >
        <div class="flex justify-center items-center w-12 bg-red-500">
          <svg
            class="h-6 w-6 fill-current text-white"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
            ></path>
          </svg>
        </div>

        <div class="-mx-3 py-2 px-4">
          <div class="mx-3">
            <slot name="title" class="text-red-500 font-semibold"></slot>
            <slot name="text" class="text-gray-600 text-sm"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
