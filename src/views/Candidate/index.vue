<template>
  <div class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <div class="candidate mt-20 xl:flex flex-grow">
      <Sidebar />
      <div class="candidate__content w-full bg-background-light">
        <div
          class="candidate__header xl:flex justify-between items-center py-5 xl:px-12 px-5 border border-neutral-light bg-white"
        >
          <div>
            <h1
              class="uppercase font-bold text-2xl mb-5 text-primary-base xl:text-left text-center"
            >
              Comparação com pessoas eleitas em 2018
            </h1>
            <div v-if="store.Role.currentRole === 'presidente'">
              <p>
                Como esta candidatura se compara à eleita anteriormente? As visualizações de características abaixo permitem comparações com a pessoa eleita à presidência em 2018. Já a trajetória política e patrimonial traça uma comparação de bens declarados com todas as candidaturas eleitas (independente de cargo) em cada ano eleitoral.
              </p>
            </div>
            <div v-if="store.Role.currentRole === 'governador'">
              <p>
                Como esta candidatura se compara à eleita anteriormente? As visualizações de características abaixo permitem comparações com a pessoa eleita ao governo do estado em 2018. Já a visualização de patrimônio traça uma comparação de bens declarados com todas as candidaturas eleitas (independente de cargo) em cada ano eleitoral.
              </p>
            </div>
            <div v-if="store.Role.currentRole === 'senador'">
              <p>
                Como esta candidatura compõe o Senado Federal? As visualizações de características abaixo permitem comparações com todas as candidaturas eleitas para o Senado em 2018. Já a visualização de patrimônio traça uma comparação de bens declarados com todas as candidaturas eleitas (independente de cargo) em cada ano eleitoral.
              </p>
            </div>
            <div v-if="store.Role.currentRole === 'deputado-federal'">
              <p>
                Como esta candidatura compõe a Câmara Federal? As visualizações de características abaixo permitem comparações com todas as candidaturas eleitas para a Câmara em 2018. Já a visualização de patrimônio traça uma comparação de bens declarados com todas as candidaturas eleitas (independente de cargo) em cada ano eleitoral.
              </p>
            </div>
            <div v-if="store.Role.currentRole === 'deputado-distrital'">
              <p>
                Como esta candidatura compõe a Câmara Legislativa do Distrito Federal? As visualizações de características abaixo permitem comparações com todas as candidaturas eleitas para o legislativo distrital em 2018. Já a visualização de patrimônio traça uma comparação de bens declarados com todas as candidaturas eleitas (independente de cargo) em cada ano eleitoral.
              </p>
            </div>
            <div v-if="store.Role.currentRole === 'deputado-estadual'">
              <p>
                Como esta candidatura compõe a Assembleia Legislativa? As visualizações de características abaixo permitem comparações com todas as candidaturas eleitas para o legislativo estadual em 2018. Já a visualização de patrimônio traça uma comparação de bens declarados com todas as candidaturas eleitas (independente de cargo) em cada ano eleitoral.
              </p>
            </div>
          </div>
         
        </div>
        <div
          class="candidate__graphs py-10 xl:px-12 px-5 grid xl:grid-cols-2 grid-cols-1 gap-10"
        >
          <CardInfo>
            <template v-slot:title
              >Idade:
              <span class="font-light ml-1">{{
                store.Candidates.currentCandidateSelected.age
              }}</span></template
            >
            <template v-slot:content>
              <AgeChart :candidate="store.Candidates.currentCandidateSelected.age" />
            </template>
          </CardInfo>
          <CardInfo>
            <template v-slot:title
              >Gênero:
              <span class="font-light ml-1">{{
                store.Candidates.currentCandidateSelected.gender
              }}</span></template
            >
            <template v-slot:content>
              <GenderChart 
              :candidate="store.Candidates.currentCandidateSelected.gender"
              :dataGenderChart="store.Candidates.currentCharacteristicGender" />
            </template>
          </CardInfo>
          <CardInfo>
            <template v-slot:title
              >Cor/Raça:
              <span class="font-light ml-1">{{
                store.Candidates.currentCandidateSelected.ethnicity
              }}</span></template
            >
            <template v-slot:content>
              <EthnicityChart 
              :candidate="store.Candidates.currentCandidateSelected.ethnicity"
              :dataEthnicityChart="store.Candidates.currentCharacteristicEthnicity" />
            </template>
          </CardInfo>
          <CardInfo>
            <template v-slot:title
              >Escolaridade:
              <span class="font-light ml-1">{{
                store.Candidates.currentCandidateSelected.education
              }}</span></template
            >
            <template v-slot:content>
              <EducationChart 
                :candidate="store.Candidates.currentCandidateSelected.education"
                :dataEducationChart="store.Candidates.currentCharacteristicEducation"
              />
            </template>
          </CardInfo>
          <CardInfo class="xl:col-span-2">
            <template v-slot:title>
              Trajetória política e patrimonial
              <TooltipInfo arrow placement="bottom" class="w-auto">
                <svg
                  class="ml-2 w-6 h-6"
                  fill="none"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <template #content>
                  <div class="text-left xl:text-base text-sm break-words font-light">
                    <p class="mb-3">
                      Esta visualização apresenta o patrimônio declarado da
                      pessoa destacada em comparação com a mediana de
                      candidaturas eleitas em cada ano. Assim como os mandatos
                      eletivos exercidos e o histórico de filiações.
                    </p>
                    <p class="mb-3">
                      <span class="font-bold">Nota</span>: Mediana é um tipo de
                      média onde a presença de poucos valores muito baixos ou
                      muito altos não a afetam.
                    </p>
                    <p>
                      <span class="font-bold">Alerta</span>: A forma de
                      publicação de filiações partidárias pelo TSE mudou em
                      2021. Anteriormente, os dados abrangiam todas as pessoas
                      filiadas e apresentavam o histórico de movimentações
                      completo. Agora, são publicadas apenas as filiações em
                      situação regular poucos meses antes das eleições. A última
                      versão que possuímos da base histórica é do final de 2020.
                      Portanto, a partir de 2021 as filiações partidárias só
                      podem ser observadas pontualmente em anos eleitorais.
                    </p>
                  </div>
                </template>
              </TooltipInfo>
            </template>
            <template v-slot:content>
              <PatrimonyChart 
              :candidate="store.Candidates.currentCandidateSelected"
              :dataAssets="store.Candidates.currentAssets" />
            </template>
          </CardInfo>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "./Sidebar.vue";
import CardInfo from "@/components/CardInfo.vue";
import useStore from "@/hooks/useStore";
import AgeChart from "./Charts/AgeChart.vue";
import EducationChart from "./Charts/EducationChart.vue";
import EthnicityChart from "./Charts/EthnicityChart.vue";
import GenderChart from "./Charts/GenderChart.vue";
import PatrimonyChart from "./Charts/PatrimonyChart.vue";
import services from "@/services";
import TooltipInfo from "../../components/TooltipInfo.vue";
import { setCharacteristicEducation, setInfoCandidateSelected } from "@/store/candidates";
import { setCurrentLocale } from "@/store/locales";
import { setCurrentRole } from "@/store/roles";

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
    PatrimonyChart,
    TooltipInfo,
  },
  data() {
    return {
      loadData: [],
      showPopper: false,
    };
  },
  setup() {
    const store = useStore();
    return {
      store
    };
  },
  async mounted() {
    const keyCandidate = Number(this.$route.params.keyCandidate);
    const roleCandidate = this.$route.params.role.toString().toLowerCase();
    const localeCandidate = this.$route.params.locale.toString().toLowerCase();
    try {
      const { dataCandidate } = await services.dataCandidates.candidate(
        keyCandidate
      );

      setInfoCandidateSelected(dataCandidate);
      setCurrentLocale(localeCandidate);
      setCurrentRole(roleCandidate);
    } catch (e) {
      console.log("Erro", e);
    }
  },
});
</script>

<style></style>
