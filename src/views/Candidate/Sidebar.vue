<template>
  <nav
    class="c-sidebar-candidate sticky xl:w-1/3 min-h-full"
    aria-label="Sidebar"
  >
    <div
      class="w-full h-full block md:w-auto border-r border-neutral-light"
      id="sidebar-candidates"
    >
      <div
        class="c-sidebar-candidate__return py-5 border-b border-neutral-light"
      >
        <router-link
          :to="{ name: 'CandidateList' }"
          class="text-primary-base text-xl font-bold rounded-lg sm:px-8 px-4 py-2 text-center inline-flex items-center mr-2 hover:underline"
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
        <div class="px-5 md:px-10 py-5 inline-flex items-center">
          <div
            v-if="currentCandidate.image"
            class="c-sidebar-candidate__image w-28 h-28 rounded-full ring-4 ring-primary-base overflow-hidden"
          >
            <img class="w-full rounded-full" :src="currentCandidate.image" alt="Candidato" />
          </div>
          <IconCandidate
            v-else
            class="w-28 h-28 rounded-full p-1 ring-4 ring-primary-base"
          ></IconCandidate>
          <div class="c-sidebar-candidate__infos ml-5">
            <h2 class="text-primary-base font-bold text-base">{{ currentCandidate.ballot_name }}</h2>
            <p class="text-xs font-light text-primary-base">
              {{ currentCandidate.role }}
            </p>
            <div class="flex justify-start mt-3">
              <span
                v-if="currentCandidate.status === 'APTO'"
                class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >Candidatura apta</span
              >
              <span
                v-else-if="currentCandidate.status === 'INAPTO'"
                class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >Candidatura inapta</span
              >
              <span
                v-else-if="currentCandidate.status === 'CADASTRADO'"
                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >Aguardando julgamento</span
              >
            </div>
          </div>
        </div>
        <div class="sm:px-10 px-5">
          <div class="inline-flex text-center w-full">
            <div
              class="py-3 text-sm w-1/2 font-medium text-white bg-primary-base rounded-l-full border"
            >
              <p class="text-base font-bold">{{ currentCandidate.party_abbreviation }}</p>
              <p class="text-base font-light">Partido</p>
            </div>
            <div
              class="py-3 text-sm w-1/2 font-medium text-primary-base bg-secondary-base rounded-r-full border"
            >
              <p class="text-base font-bold">{{ currentCandidate.number }}</p>
              <p class="text-base font-light">Número</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="c-sidebar-candidate__cards sm:px-10 px-5 py-5 grid grid-cols-1 gap-5"
      >
        <CardInfo>
          <template v-slot:title>Resumo do perfil</template>
          <template v-slot:content>
            <div class="mb-4">
              <h4 class="font-light text-base text-neutral-baseMedium">
                Idade
              </h4>
              <p class="font-bold text-base text-primary-base">{{ currentCandidate.age }}</p>
            </div>
            <div class="mb-4">
              <h4 class="font-light text-base text-neutral-baseMedium">
                Gênero
              </h4>
              <p class="font-bold text-base text-primary-base">{{ currentCandidate.gender }}</p>
            </div>
            <div class="mb-4">
              <h4 class="font-light text-base text-neutral-baseMedium">
                Cor/Raça
              </h4>
              <p class="font-bold text-base text-primary-base">
                {{ currentCandidate.ethnicity }}
              </p>
            </div>
            <div>
              <h4 class="font-light text-base text-neutral-baseMedium">
                Escolaridade
              </h4>
              <p class="font-bold text-base text-primary-base">
                {{ currentCandidate.education }}
              </p>
            </div>
          </template>
        </CardInfo>
        <CardInfo>
          <template v-slot:title>Histórico de candidaturas</template>
          <template v-slot:content>
            <Timeline :data="currentCandidate.election_history"></Timeline>
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
import useStore from '@/hooks/useStore';
import { computed } from 'vue';

export default {
  props: [
    "name",
    "role",
    "party",
    "number",
    "education",
    "ethnicity",
    "gender",
    "age",
    "timeline",
    "image",
    "status",
  ],
  components: {
    CardInfo,
    Timeline,
    IconCandidate,
  },
 setup() {
  const store = useStore();
  let currentCandidate = computed(function () {
      return store.Candidates.currentCandidateSelected;
    });
    return{
      currentCandidate
    }
 }
};
</script>

<style lang="postcss" scoped>
:v-deep.svg-icon-candidate {
  @apply w-24 h-24;
}
.c-sidebar-candidate__infos {
  flex-grow: 1;
  flex-basis: 0;
}
</style>
