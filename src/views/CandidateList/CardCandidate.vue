<template>
  <div class="c-card">
    <div class="p-5 mt-16 bg-white rounded-2xl border border-neutral-base">
      <div class="flex flex-col items-center mb-3">
        <img
          v-if="image"
          class="w-24 h-24 rounded-full shadow-lg mb-3 -mt-16"
          :src="image"
          alt="Candidato"
        />
        <IconCandidate v-else class="w-24 h-24 shadow-lg mb-3 -mt-16"></IconCandidate>
        <h4 class="text-lg font-semibold text-black">{{ name }}</h4>
        <span class="text-sm font-light text-black">{{ role }}</span>
      </div>
      <div class="flex justify-around items-center text-center mb-6">
        <div>
          <h5 class="mb-1 text-base font-semibold text-black">Número</h5>
          <span class="text-sm text-light text-black">{{ number }}</span>
        </div>
        <div>
          <h5 class="mb-1 text-base font-semibold text-black">Partido</h5>
          <span class="text-sm text-light text-black">{{ party }}</span>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <button
          class="w-full py-3 px-8 text-sm font-light text-center text-white bg-primary-base rounded-full hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-secondary-base"
          v-on:click="onClickCandidate(keyCandidate, locale, role)"
          >Ver candidatura</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IconCandidate from "@/components/IconCandidate.vue";
import { cleanInfoCandidateSelected, setInfoCandidateSelected } from '@/store/candidates';
import services from '@/services';
import { defineComponent } from "vue";

export default defineComponent({
    props: ["name", "number", "party", "role", "image", "locale", "keyCandidate"],
    components: { IconCandidate },
    methods: {

      async onClickCandidate (key, locale, role) {
        cleanInfoCandidateSelected();
        try {
          const { dataCandidate } = await services.dataCandidates.candidate(key);
          setInfoCandidateSelected(dataCandidate);

          this.$router.push({
            name: "Candidate",
            params: {
              year: 2022,
              locale: locale,
              role: role,
              keyCandidate: key,
            },
          });

        } catch (error) {
          console.log(
            "Erro no carregamento dos dados de cada candidato",
            error
          );
        }
      }
    }
});
</script>

<style lang="postcss" scoped>
  .svg-icon-candidate{
    @apply w-24 h-24
  }
</style>
