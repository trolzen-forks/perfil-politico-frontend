<template>
  <nav class="c-sidebar-candidate sticky sm:w-1/3 min-h-full" aria-label="Sidebar">
    <div class="c-sidebar-candidate__return py-5 border border-neutral-light">
        <button type="button" class="text-primary-base text-xl font-bold rounded-lg sm:px-8 py-2 text-center inline-flex items-center mr-2 hover:underline">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="uppercase">Voltar</span>
        </button>
    </div>
    <div class="c-sidebar-candidate__info-candidate">
        <div class="px-10 py-5 flex items-center">
            <div>
                <img class="w-28 h-28 rounded-full p-1 ring-4 ring-primary-base" src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Candidato">
            </div>
            <div class="ml-10">
                <h2 class="text-primary-base font-bold text-xl">Jonh Doe</h2>
                <p class="text-sm font-light text-primary-base">Deputado Estadual</p>
            </div>
        </div>
        <div class="px-10">
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
    <div class="c-sidebar-candidate__cards">
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
    </div>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
