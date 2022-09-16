<template>
  <div class="c-card">
    <div class="p-3 mt-24 bg-white rounded-2xl border border-neutral-base">
      <div class="flex justify-between items-center text-center">
        <div>
          <h5 class="text-sm font-semibold text-black">{{ number }}</h5>
          <span class="text-xs text-light text-black">Número</span>
        </div>
        <div>
          <h5 class="text-sm font-semibold text-black break-words w-20">
            {{ party }}
          </h5>
          <span class="text-xs text-light text-black">Partido</span>
        </div>
      </div>
      <div class="flex flex-col items-center mb-3">
        <div
          v-if="image"
          class="w-28 h-28 rounded-full shadow-lg mb-3 -mt-24 overflow-hidden"
        >
          <img :src="image" alt="Candidato" />
        </div>
        <IconCandidate
          v-else
          class="w-28 h-28 shadow-lg mb-3 -mt-32"
        ></IconCandidate>

        <div class="text-center">
          <h4 class="text-base font-semibold text-black overflow-hidden">
            {{ name }}
          </h4>
          <span class="text-sm font-light text-black mr-2">{{ role }}</span>
        </div>
        <div class="flex justify-between mt-3">
          <span
            v-if="status === 'APTO'"
            class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >Candidatura apta</span
          >
          <span
            v-else-if="status === 'INAPTO'"
            class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >Candidatura inapta</span
          >
          <span
            v-else-if="status === 'CADASTRADO'"
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >Aguardando julgamento</span
          >
        </div>
      </div>

      <div class="flex flex-col items-center">
        <button
          class="w-full py-3 px-8 text-sm font-light text-center text-white bg-primary-base rounded-full hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-secondary-base"
          v-on:click="onClickCandidate(keyCandidate, locale, role)"
        >
          Ver perfil
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IconCandidate from "@/components/IconCandidate.vue";
import {
  cleanInfoCandidateSelected,
  setInfoCandidateSelected,
} from "@/store/candidates";
import services from "@/services";
import { defineComponent } from "vue";

export default defineComponent({
  props: [
    "name",
    "number",
    "party",
    "role",
    "image",
    "locale",
    "keyCandidate",
    "status",
  ],
  components: { IconCandidate },
  methods: {
    async onClickCandidate(key, locale, role) {
      cleanInfoCandidateSelected();
      try {
        const { dataCandidate } = await services.dataCandidates.candidate(key);
        setInfoCandidateSelected(dataCandidate);

        this.$router.push({
          name: "Candidate",
          params: {
            year: 2022,
            locale: locale,
            role: role.toLowerCase(),
            keyCandidate: key,
          },
        });
      } catch (error) {
        console.log("Erro no carregamento dos dados de cada candidato", error);
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
.svg-icon-candidate {
  @apply w-28 h-28;
}
</style>
