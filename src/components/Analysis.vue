<template>
  <div
    class="c-card-info w-full bg-primary-base rounded-lg border border-neutral-light"
    id="accordion-open"
    data-accordion="open"
  >
    <h4
      class="c-card-info__title flexflex-wrap text-center text-white bg-primary-dark rounded-t-lg py-5 px-3 text-base font-semibold"
      id="accordion-open-heading-1"
    >
      <button type="button" class="flex items-center justify-between w-full" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span>Filtros por análises</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    </h4>
    <div id="accordion-open-body-1" aria-labelledby="accordion-open-heading-1">
      <div class="c-card-info__content p-5 sm:grid grid-cols-4 gap-4">
        <div class="flex flex-col justify-center items-center pb-8 sm:pb-0">
          <h2 class="text-secondary-base text-3xl font-bold mb-2">Análises sobre os candidatos</h2>
          <p class="text-white">As perguntas também serão aplicadas como filtros na listagem abaixo de canditatos.</p>
        </div>
        <div class="col-span-2"></div>
        <div>
          <FiltersAnalysis />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FiltersAnalysis from './FiltersAnalysis.vue';

export default { components: { FiltersAnalysis } };
</script>
