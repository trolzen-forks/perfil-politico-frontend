<template>
  <div
    class="c-filters-analysis text-white"
  >
    <div class="c-filters-analysis__header flex items-center">
        <h3 class="text-xl font-bold">Perguntas</h3>
        <a
            href="#"
            class="text-secondary-base ml-5 text-sm underline hover:no-underline"
        >
            Limpar filtros
        </a>
    </div>
    <div class="c-filters-analysis__content mt-5"> 
      <div class="w-full mb-3">
        <label 
          for="toogleA"
          class="flex items-center cursor-pointer"
        >
          <div class="relative">
            <input id="toogleA" type="checkbox" class="sr-only" />
            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantos nunca foram eleitos?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label 
          for="toogleA"
          class="flex items-center cursor-pointer"
        >
          <div class="relative">
            <input id="toogleA" type="checkbox" class="sr-only" />
            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantos já foram eleitos?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label 
          for="toogleA"
          class="flex items-center cursor-pointer"
        >
          <div class="relative">
            <input id="toogleA" type="checkbox" class="sr-only" />
            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantos nunca concorreram?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label 
          for="toogleA"
          class="flex items-center cursor-pointer"
        >
          <div class="relative">
            <input id="toogleA" type="checkbox" class="sr-only" />
            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantas são mulheres?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label 
          for="toogleA"
          class="flex items-center cursor-pointer"
        >
          <div class="relative">
            <input id="toogleA" type="checkbox" class="sr-only" />
            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantos são homens?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label 
          for="toogleA"
          class="flex items-center cursor-pointer"
        >
          <div class="relative">
            <input id="toogleA" type="checkbox" class="sr-only" />
            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantos são negros ou pardos?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label 
          for="toogleA"
          class="flex items-center cursor-pointer"
        >
          <div class="relative">
            <input id="toogleA" type="checkbox" class="sr-only" />
            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantos são brancos?
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="css" scoped>
  /* Toggle A */
  input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #9BDB52;
  }
</style>
