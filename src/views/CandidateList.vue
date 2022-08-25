<template>
<Navbar></Navbar>
  <div class="candidate-list my-48">
    <div class="container">
      <CardCandidate />
      <Pagination />
      <CardInfo />
    </div> 
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

@Options({
  components: {
    Footer,
    Navbar,
    CardCandidate,
    Pagination,
    CardInfo
  },
})
export default class Home extends Vue {}
</script>
