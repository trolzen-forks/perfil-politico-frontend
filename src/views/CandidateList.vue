<template>
  <Navbar></Navbar>
  <div class="candidate-list mt-20">
    <Sidebar />
    <main class="candidate-list__content">
      <div class="container"></div>
    </main>
  </div>
  <Footer></Footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import CardCandidate from "@/components/CardCandidate.vue";
import Pagination from "@/components/Pagination.vue";
import CardInfo from "../components/CardInfo.vue";
import Sidebar from "../components/Sidebar.vue";

@Options({
  components: {
    Footer,
    Navbar,
    CardCandidate,
    Pagination,
    CardInfo,
    Sidebar,
  },
})
export default class Home extends Vue {}
</script>
