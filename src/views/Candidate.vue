<template>
 <Navbar></Navbar>
 <div class="candidate mt-20 sm:flex">
    <SidebarCandidate></SidebarCandidate>
    <div class="candidate__content w-full bg-background-light">
        <div class="candidate__header flex justify-between items-center py-5 sm:px-12 border border-neutral-light bg-white">
            <div>
                <h1 class="uppercase font-bold text-xl text-primary-base">Comparação com os eleitos em 2014</h1>
            </div>
            <div class="flex items-center justify-between">
                <button type="button" class="text-primary-base font-bold rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 hover:underline">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="uppercase">Ano Anterior</span>
                </button>
                <button type="button" class="text-primary-base font-bold rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 hover:underline">
                    <span class="uppercase">Próximo Ano</span>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
        <div class="candidate__graphs py-10 sm:px-12 grid grid-cols-2 gap-10">
            <CardInfo></CardInfo>
            <CardInfo></CardInfo>
            <CardInfo></CardInfo>
            <CardInfo></CardInfo>
            <CardInfo class="col-span-2"></CardInfo>
        </div>
    </div>
 </div> 
 <Footer></Footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import SidebarCandidate from "@/components/SidebarCandidate.vue";
import CardInfo from "@/components/CardInfo.vue";

@Options({
  components: {
    Footer,
    Navbar,
    SidebarCandidate,
    CardInfo
  },
})
export default class Home extends Vue {}
</script>

<style>

</style>