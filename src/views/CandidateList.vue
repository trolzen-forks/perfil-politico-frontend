<template>
<Navbar></Navbar>
  <div class="candidate-list">
    <div class="container">
    </div> 
  </div>
<Footer></Footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: {
    Footer,
    Navbar
  },
})
export default class Home extends Vue {}
</script>
