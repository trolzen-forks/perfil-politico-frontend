<template>
  <div class="c-filters-analysis text-white">
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
        <label for="tNuncaEleitos" class="flex items-center cursor-pointer">
          <div class="relative">
            <input id="tNuncaEleitos" type="checkbox" class="sr-only" />
            <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
            ></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantas nunca foram eleitas?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label for="tEleitos" class="flex items-center cursor-pointer">
          <div class="relative">
            <input id="tEleitos" type="checkbox" class="sr-only" />
            <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
            ></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantas já foram eleitas?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label for="tNuncaConcorreram" class="flex items-center cursor-pointer">
          <div class="relative">
            <input id="tNuncaConcorreram" type="checkbox" class="sr-only" />
            <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
            ></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantas nunca concorreram?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label for="tMulheres" class="flex items-center cursor-pointer">
          <div class="relative">
            <input id="tMulheres" type="checkbox" class="sr-only" />
            <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
            ></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantas são mulheres?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label for="tHomens" class="flex items-center cursor-pointer">
          <div class="relative">
            <input id="tHomens" type="checkbox" class="sr-only" />
            <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
            ></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantos são homens?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label for="tNegros" class="flex items-center cursor-pointer">
          <div class="relative">
            <input id="tNegros" type="checkbox" class="sr-only" />
            <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
            ></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantas são PPI (pretas, pardas e indígenas)?
          </div>
        </label>
      </div>
      <div class="w-full mb-3">
        <label for="tBrancos" class="flex items-center cursor-pointer">
          <div class="relative">
            <input id="tBrancos" type="checkbox" class="sr-only" />
            <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
            ></div>
          </div>
          <div class="ml-3 text-white font-medium text-sm">
            Quantas são brancas?
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
  background-color: #9bdb52;
}
</style>
