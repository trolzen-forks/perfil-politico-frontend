<template>
  <nav class="c-sidebar-candidate sticky sm:w-1/3 min-h-full" aria-label="Sidebar">
    <button data-collapse-toggle="sidebar-candidates" type="button" class="inline-flex items-center p-2 ml-3 mb-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="sidebar-candidates" aria-expanded="false">
      <span class="sr-only">Abrir filtros</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full h-full md:block md:w-auto border-r border-neutral-light" id="sidebar-candidates">
        <div class="c-sidebar-candidate__return py-5 border-b border-neutral-light">
            <button type="button" class="text-primary-base text-xl font-bold rounded-lg sm:px-8 py-2 text-center inline-flex items-center mr-2 hover:underline">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="uppercase">Voltar</span>
            </button>
        </div>
        <div class="c-sidebar-candidate__info-candidate">
            <div class="sm:px-10 px-5 py-5 flex items-center">
                <div>
                    <img class="w-28 h-28 rounded-full p-1 ring-4 ring-primary-base" src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Candidato">
                </div>
                <div class="ml-10">
                    <h2 class="text-primary-base font-bold text-xl">Jonh Doe</h2>
                    <p class="text-sm font-light text-primary-base">Deputado Estadual</p>
                </div>
            </div>
            <div class="sm:px-10 px-5">
                <div class="inline-flex text-center w-full">
                    <div class="py-3 text-sm w-1/2 font-medium text-white bg-primary-base rounded-l-full border">
                        <p class="text-base font-bold">PV</p>
                        <p class="text-base font-light">Partido</p>
                    </div>
                    <div class="py-3 text-sm w-1/2 font-medium text-primary-base bg-secondary-base rounded-r-full border">
                        <p class="text-base font-bold">1200</p>
                        <p class="text-base font-light">Número</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-sidebar-candidate__cards sm:px-10 px-5 py-5 grid grid-cols-1 gap-5">
            <CardInfo></CardInfo>
            <CardInfo></CardInfo>
        </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardInfo from "@/components/CardInfo.vue";

@Options({
  components: {
    CardInfo,
  },
})
export default class Home extends Vue {}
</script>

<style></style>
