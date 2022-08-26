import { Options } from 'vue-class-component';
<template>
  <div
    class="c-card-info w-full bg-primary-base rounded-lg border border-neutral-light"
  >
    <div
      class="c-card-info__title flex flex-wrap text-center text-white bg-primary-dark rounded-t-lg py-5 px-3 text-base font-semibold"
    >
      <h4>Filtros por análises</h4>
    </div>
    <div class="c-card-info__content p-5 grid grid-cols-3 gap-4">
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-secondary-base text-3xl font-bold mb-2">Análises sobre os candidatos</h2>
        <p class="text-white">As perguntas também serão aplicadas como filtros na listagem abaixo de canditatos.</p>
      </div>
      <div></div>
      <div>
        <FiltersAnalysis />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FiltersAnalysis from './FiltersAnalysis.vue';

export default { components: { FiltersAnalysis } };
</script>
