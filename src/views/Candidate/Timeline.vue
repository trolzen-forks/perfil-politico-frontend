<template>
  <ol class="relative border-l border-gray-200" v-if="data">
    <template v-for="item of data.slice().reverse()" :key="item">
      <li class="mb-10 ml-4" v-if="item.result !== '2O TURNO'">
        <div
          class="absolute w-3 h-3 bg-secondary-base rounded-full mt-1.5 -left-1.5"
        ></div>
        <time
          class="mb-2 text-base font-bold text-primary-base flex items-center"
        >
          <span class="mr-3">{{ item.year }}</span>
          <span
            v-if="item.elected === true"
            class="bg-primary-base rounded-2xl text-white py-1 px-2 text-xs"
            >Eleito(a)</span
          >
        </time>
        <p class="mb-4 text-xs text-text-light font-regular">
          Candidatou-se ao cargo de
          <span class="capitalize">{{ item.post }}</span>
        </p>
      </li>
    </template>
  </ol>
  <template v-else>
    <h2>Não há dados no histórico da pessoa candidata</h2>
  </template>
</template>

<script lang="ts">
export default {
  name: "Timeline",
  props: ["data"],
};
</script>

<style></style>
