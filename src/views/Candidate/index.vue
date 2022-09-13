<template>
  <div class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <div class="candidate mt-20 sm:flex flex-grow">
      <Sidebar
        :name="store.Candidates.currentCandidateSelected.name"
        :party="store.Candidates.currentCandidateSelected.party_abbreviation"
        :number="store.Candidates.currentCandidateSelected.number"
        :role="store.Candidates.currentCandidateSelected.post"
        :age="store.Candidates.currentCandidateSelected.age"
        :education="store.Candidates.currentCandidateSelected.education"
        :gender="store.Candidates.currentCandidateSelected.gender"
        :ethnicity="store.Candidates.currentCandidateSelected.ethnicity"
        :timeline="store.Candidates.currentCandidateSelected.election_history"
        :image="store.Candidates.currentCandidateSelected.image"
        :status="store.Candidates.currentCandidateSelected.status"
      ></Sidebar>
      <div class="candidate__content w-full bg-background-light">
        <div
          class="candidate__header sm:flex justify-between items-center py-5 sm:px-12 px-5 border border-neutral-light bg-white"
        >
          <div>
            <h1
              class="uppercase font-bold text-xl text-primary-base sm:text-left text-center"
            >
              Comparação com pessoas eleitas em 2018
            </h1>
          </div>
        </div>
        <div
          class="candidate__graphs py-10 sm:px-12 px-5 grid sm:grid-cols-2 grid-cols-1 gap-10"
        >
          <CardInfo v-if="store.Role.currentRole !== 'presidente'">
            <template v-slot:title
              >Idade:
              <span class="font-light ml-1">{{
                store.Candidates.currentCandidateSelected.age
              }}</span></template
            >
            <template v-slot:content>
              <AgeChart />
            </template>
          </CardInfo>
          <CardInfo v-if="store.Role.currentRole !== 'presidente'">
            <template v-slot:title
              >Gênero:
              <span class="font-light ml-1">{{
                store.Candidates.currentCandidateSelected.gender
              }}</span></template
            >
            <template v-slot:content>
              <GenderChart />
            </template>
          </CardInfo>
          <CardInfo v-if="store.Role.currentRole !== 'presidente'">
            <template v-slot:title
              >Cor/Raça:
              <span class="font-light ml-1">{{
                store.Candidates.currentCandidateSelected.ethnicity
              }}</span></template
            >
            <template v-slot:content>
              <EthnicityChart />
            </template>
          </CardInfo>
          <CardInfo v-if="store.Role.currentRole !== 'presidente'">
            <template v-slot:title
              >Escolaridade:
              <span class="font-light ml-1">{{
                store.Candidates.currentCandidateSelected.education
              }}</span></template
            >
            <template v-slot:content>
              <EducationChart />
            </template>
          </CardInfo>
          <CardInfo class="sm:col-span-2">
            <template v-slot:title>Trajetória política e patrimonial</template>
            <template v-slot:content>
              <FiliationChart />
            </template>
          </CardInfo>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import * as d3 from "d3";
import { defineComponent } from "vue";

import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "./Sidebar.vue";
import CardInfo from "@/components/CardInfo.vue";
import useStore from "@/hooks/useStore";
import AgeChart from "./Charts/AgeChart.vue";
import EducationChart from "./Charts/EducationChart.vue";
import EthnicityChart from "./Charts/EthnicityChart.vue";
import GenderChart from "./Charts/GenderChart.vue";
import FiliationChart from "./Charts/FiliationChart.vue";
import services from "@/services";

export default defineComponent({
  components: {
    Footer,
    Navbar,
    Sidebar,
    CardInfo,
    AgeChart,
    EducationChart,
    EthnicityChart,
    GenderChart,
    FiliationChart,
  },
  data() {
    return {
      loadData: [],
    };
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  methods: {
    async dataAge() {
      const { data } = await services.dataCandidates.candidatesList(
          2022,
          this.store.Candidates.currentCandidateSelected.post,
          'age'
      );
      this.loadData = data
    },
  },
});
</script>

<style></style>
