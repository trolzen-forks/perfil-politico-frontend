
<template>
  <div class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <div class="candidate mt-20 sm:flex flex-grow">
      <Sidebar 
        :name="data.Candidates.currentCandidateSelected.name"
        :party="data.Candidates.currentCandidateSelected.party_abbreviation"
        :number="data.Candidates.currentCandidateSelected.number"
        :role="data.Candidates.currentCandidateSelected.post"
        :age="data.Candidates.currentCandidateSelected.age"
        :education="data.Candidates.currentCandidateSelected.education"
        :gender="data.Candidates.currentCandidateSelected.gender"
        :ethnicity="data.Candidates.currentCandidateSelected.ethnicity"
        :timeline="data.Candidates.currentCandidateSelected.election_history"
      ></Sidebar>
      <div class="candidate__content w-full bg-background-light">
        <div
          class="candidate__header sm:flex justify-between items-center py-5 sm:px-12 px-5 border border-neutral-light bg-white"
        >
          <div>
            <h1
              class="uppercase font-bold text-xl text-primary-base sm:text-left text-center"
            >
              Comparação com os eleitos em 2014
            </h1>
          </div>
          <div class="flex items-center justify-between">
            <button
              type="button"
              class="text-primary-base font-bold rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 hover:underline"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="uppercase">Ano Anterior</span>
            </button>
            <button
              type="button"
              class="text-primary-base font-bold rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 hover:underline"
            >
              <span class="uppercase">Próximo Ano</span>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="candidate__graphs py-10 sm:px-12 px-5 grid sm:grid-cols-2 grid-cols-1 gap-10"
        >
          <CardInfo>
            <template v-slot:title
              >Idade: <span class="font-light ml-1">{{data.Candidates.currentCandidateSelected.age}}</span></template
            >
            <template v-slot:content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </template>
          </CardInfo>
          <CardInfo>
            <template v-slot:title
              >Sexo: <span class="font-light ml-1">{{data.Candidates.currentCandidateSelected.gender}}</span></template
            >
            <template v-slot:content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </template>
          </CardInfo>
          <CardInfo>
            <template v-slot:title
              >Cor/Raça: <span class="font-light ml-1">{{data.Candidates.currentCandidateSelected.ethnicity}}</span></template
            >
            <template v-slot:content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </template>
          </CardInfo>
          <CardInfo>
            <template v-slot:title
              >Escolaridade:
              <span class="font-light ml-1">{{data.Candidates.currentCandidateSelected.education}}</span></template
            >
            <template v-slot:content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </template>
          </CardInfo>
          <CardInfo class="sm:col-span-2">
            <template v-slot:title>Patrimônio declarado</template>
            <template v-slot:content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </template>
          </CardInfo>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "./Sidebar.vue";
import CardInfo from "@/components/CardInfo.vue";
import useStore from '@/hooks/useStore';
import { reactive } from 'vue';

export default {
  components: {
    Footer,
    Navbar,
    Sidebar,
    CardInfo,
  },
  setup() {
    const data = useStore();
  
    return{
      data
    }
  }
}
</script>

<style></style>
