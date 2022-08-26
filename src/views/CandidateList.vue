<template>
  <Navbar></Navbar>
  <div class="candidate-list mt-20 flex">
    <Sidebar />
    <main class="candidate-list__content w-full">
      <div class="container sm:p-12">
        <div class="candidate-list__title mb-12">
           <h1 class="text-primary-base font-bold text-3xl mb-4">Confira os candidatos para presidente no Brasil</h1>
            <p>Descritiva do cargo</p>
        </div>
        <div class="candidate-list__analisys w-full">
          <Analysis />
        </div>
        <div class="candidate-list__candidates grid grid-cols-4 gap-3">
          <CardCandidate />
          <CardCandidate />
          <CardCandidate />
          <CardCandidate />
          <CardCandidate />
          <CardCandidate />
          <CardCandidate />
          <CardCandidate />
        </div>
         <div class="candidate-list__pagintation flex justify-center border-t border-neutral-base mt-10 p-5">
          <Pagination />
        </div>
      </div>
    </main>
  </div>
  <Footer></Footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Pagination from "@/components/Pagination.vue";
import CardInfo from "@/components/CardInfo.vue";
import Sidebar from "@/components/Sidebar.vue";
import CardCandidate from "@/components/CardCandidate.vue";
import Analysis from "@/components/Analysis.vue";

@Options({
  components: {
    Footer,
    Navbar,
    CardCandidate,
    Pagination,
    CardInfo,
    Sidebar,
    Analysis
  },
})
export default class Home extends Vue {}
</script>
