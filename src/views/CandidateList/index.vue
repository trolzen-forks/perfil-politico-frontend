<template>
  <div class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <div class="candidate-list mt-20 sm:flex flex-grow">
      <Sidebar />
      <main class="candidate-list__content w-full">
        <div class="container sm:p-12 px-5">
          <div class="candidate-list__title mb-12">
            <h1 class="text-primary-base font-bold text-3xl mb-4">
              Confira os candidatos para presidente no Brasil
            </h1>
            <p>Descritiva do cargo</p>
          </div>
          <div class="candidate-list__analisys w-full">
            <Analysis />
          </div>
          <div
            class="candidate-list__candidates block sm:grid grid-cols-4 gap-3"
          >
            <CardCandidate />
            <CardCandidate />
            <CardCandidate />
            <CardCandidate />
            <CardCandidate />
            <CardCandidate />
            <CardCandidate />
            <CardCandidate />
          </div>
          <div
            class="candidate-list__pagintation flex justify-center border-t border-neutral-base mt-10 p-5"
          >
            <Pagination />
          </div>
        </div>
      </main>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Pagination from "./Pagination.vue";
import Sidebar from "./Sidebar.vue";
import CardCandidate from "./CardCandidate.vue";
import Analysis from "./Analysis/index.vue";

export default {
  components: {
    Footer,
    Navbar,
    CardCandidate,
    Pagination,
    Sidebar,
    Analysis,
  },
  setup () {
      console.log()
  }
}
</script>
