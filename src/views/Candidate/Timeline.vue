<template>
<ol class="relative border-l border-gray-200">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-secondary-base rounded-full mt-1.5 -left-1.5"></div>
        <time class="mb-2 text-base font-bold text-primary-base flex items-center">
           <span class="mr-3">2022</span>
           <span class="bg-primary-base rounded-2xl text-white py-1 px-2 text-xs">Eleito (a)</span>
        </time>
        <p class="mb-4 text-xs text-text-light font-regular">Candidatou-se ao cargo de Deputado Federal</p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-secondary-base rounded-full mt-1.5 -left-1.5"></div>
        <time class="mb-2 text-base font-bold text-primary-base flex items-center">
           <span class="mr-3">2018</span>
        </time>
        <p class="mb-4 text-xs text-text-light font-regular">Candidatou-se ao cargo de Deputado Estadual</p>
    </li>
</ol>
</template>

<script lang="ts">
export default {
    name: "Timeline",
}
</script>

<style>

</style>