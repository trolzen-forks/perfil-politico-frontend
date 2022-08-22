<template>
<Navbar></Navbar>
  <div class="candidate-list my-48">
    <div class="container">
      <Card />
      <Pagination />
    </div> 
  </div>
<Footer></Footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import Pagination from "../components/Pagination.vue";

@Options({
  components: {
    Footer,
    Navbar,
    Card,
    Pagination
  },
})
export default class Home extends Vue {}
</script>
