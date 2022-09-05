<template>
  <div class="c-card">
    <div class="p-5 mt-16 bg-white rounded-2xl border border-neutral-base">
      <div class="flex flex-col items-center mb-3">
        <img
          v-if="image"
          class="w-24 h-24 rounded-full shadow-lg mb-3 -mt-16"
          :src="image"
          alt="Candidato"
        />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="#9BDB52"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#9BDB52"
          class="w-24 h-24 p-4 rounded-full shadow-lg mb-3 -mt-16 bg-primary-base"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <h4 class="text-lg font-semibold text-black">{{ name }}</h4>
        <span class="text-sm font-light text-black">{{ role }}</span>
      </div>
      <div class="flex justify-around items-center text-center mb-6">
        <div>
          <h5 class="mb-1 text-base font-semibold text-black">Número</h5>
          <span class="text-sm text-light text-black">{{ number }}</span>
        </div>
        <div>
          <h5 class="mb-1 text-base font-semibold text-black">Partido</h5>
          <span class="text-sm text-light text-black">{{ party }}</span>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <a
          href="#"
          class="w-full py-3 px-8 text-sm font-light text-center text-white bg-primary-base rounded-full hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-secondary-base"
          >Ver candidatura</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["name", "number", "party", "role", "image"],
};
</script>
