<template>
  <nav
    class="c-sidebar-candidate sticky sm:w-1/3 min-h-full"
    aria-label="Sidebar"
  >
    <button
      data-collapse-toggle="sidebar-candidates"
      type="button"
      class="inline-flex items-center p-2 ml-3 mb-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="sidebar-candidates"
      aria-expanded="false"
    >
      <span class="sr-only">Abrir filtros</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div
      class="hidden w-full h-full md:block md:w-auto border-r border-neutral-light"
      id="sidebar-candidates"
    >
      <div
        class="c-sidebar-candidate__return py-5 border-b border-neutral-light"
      >
        <router-link
          :to="{ name: 'CandidateList' }"
          class="text-primary-base text-xl font-bold rounded-lg sm:px-8 py-2 text-center inline-flex items-center mr-2 hover:underline"
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
          <span class="uppercase">Voltar</span>
        </router-link>
      </div>
      <div class="c-sidebar-candidate__info-candidate">
        <div class="sm:px-10 px-5 py-5 flex items-center">
          <div class="w-28 h-28 rounded-full p-1 ring-4 ring-primary-base">
            <IconCandidate></IconCandidate>
          </div>
          <div class="ml-10">
            <h2 class="text-primary-base font-bold text-xl">{{name}}</h2>
            <p class="text-sm font-light text-primary-base">
              {{role}}
            </p>
          </div>
        </div>
        <div class="sm:px-10 px-5">
          <div class="inline-flex text-center w-full">
            <div
              class="py-3 text-sm w-1/2 font-medium text-white bg-primary-base rounded-l-full border"
            >
              <p class="text-base font-bold">{{party}}</p>
              <p class="text-base font-light">Partido</p>
            </div>
            <div
              class="py-3 text-sm w-1/2 font-medium text-primary-base bg-secondary-base rounded-r-full border"
            >
              <p class="text-base font-bold">{{number}}</p>
              <p class="text-base font-light">Número</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="c-sidebar-candidate__cards sm:px-10 px-5 py-5 grid grid-cols-1 gap-5"
      >
        <CardInfo>
          <template v-slot:title>Sobre o candidato</template>
          <template v-slot:content>
            <div class="mb-4">
              <h4 class="font-light text-base text-neutral-baseMedium">
                Idade
              </h4>
              <p class="font-bold text-base text-primary-base">{{age}}</p>
            </div>
            <div class="mb-4">
              <h4 class="font-light text-base text-neutral-baseMedium">Sexo</h4>
              <p class="font-bold text-base text-primary-base">{{gender}}</p>
            </div>
            <div class="mb-4">
              <h4 class="font-light text-base text-neutral-baseMedium">
                Cor/Raça
              </h4>
              <p class="font-bold text-base text-primary-base">{{ethnicity}}</p>
            </div>
            <div>
              <h4 class="font-light text-base text-neutral-baseMedium">
                Escolaridade
              </h4>
              <p class="font-bold text-base text-primary-base">
                {{education}}
              </p>
            </div>
          </template>
        </CardInfo>
        <CardInfo>
          <template v-slot:title>Histórico de candidaturas</template>
          <template v-slot:content>
            <Timeline :data="timeline"></Timeline>
          </template>
        </CardInfo>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import CardInfo from "@/components/CardInfo.vue";
import Timeline from "./Timeline.vue";
import IconCandidate from "@/components/IconCandidate.vue";

export default {
  props: ["name", "role", "party", "number", "education", "ethnicity", "gender", "age", "timeline"],
  components: {
    CardInfo,
    Timeline,
    IconCandidate
  },
}
</script>

<style></style>
