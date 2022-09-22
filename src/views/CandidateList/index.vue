<template>
  <div class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <div class="candidate-list mt-20 lg:flex flex-grow">
      <Sidebar />
      <main class="candidate-list__content w-full">
        <div class="container lg:p-12 px-5">
          <div class="candidate-list__title mb-12">
            <h1 v-if="loading === false" class="text-primary-base font-bold text-3xl mb-4">
              Confira as candidaturas para {{ currentRole }}
              {{ currentLocale.preposition }} {{ currentLocale.name }}
            </h1>
            <div v-else role="status" class="w-full animate-pulse">
              <div class="h-4 bg-gray-200 rounded-full w-3/4 mb-4"></div>
              <span class="sr-only">Loading...</span>
            </div>
            <div class="pt-10 md:border-t border-neutral-base">
              <h2 class="text-primary-base font-bold text-xl mb-4">
                Qual sua função?
              </h2>
              <div v-if="loading === false">
                <p v-if="data.Role.currentRole === 'presidente'">
                  A pessoa eleita para a Presidência da República governa e
                  administra os interesses públicos da União. Tem o dever de
                  manter a integridade e a independência do país, bem como
                  apresentar um plano de governo com programas prioritários,
                  projetos de lei de diretrizes orçamentárias e propostas de
                  orçamento. Exerce também atribuições administrativas e
                  legislativas. Entre as diversas atribuições administrativas do
                  cargo estão nomear titulares dos ministérios, ministros(as) do
                  Supremo Tribunal Federal (STF), dos tribunais superiores e o (a)
                  advogado(a)-geral da União. Com relação à política externa,
                  compete à Presidência da República decidir sobre as relações com
                  outros países, sobre o credenciamento de representantes
                  diplomáticos e sobre a celebração de convenções, tratados e atos
                  internacionais, sujeitos a referendo do Congresso Nacional.
                </p>
                <p v-else-if="data.Role.currentRole === 'senador'">
                  Senadores(as) são representantes dos estados e do DF no
                  Congresso Nacional. Assim como parlamentares da Câmara dos
                  Deputados, têm a prerrogativa constitucional de fazer leis e de
                  fiscalizar os atos do Poder Executivo. Além disso, a
                  Constituição Federal prevê como competência privativa do Senado:
                  processar e julgar, nos crimes de responsabilidade, quem ocupa
                  os cargos de presidente(a) e vice-presidente(a), ministros(as)
                  de Estado e comandantes(as) da Marinha, do Exército e da
                  Aeronáutica, ministros(as) do Supremo Tribunal Federal (STF),
                  membros(as) do Conselho Nacional de Justiça (CNJ) e do Conselho
                  Nacional do Ministério Público, o (a) procurador(a)-geral da
                  República e o (a) advogado(a)-geral da União.
                </p>
                <p v-else-if="data.Role.currentRole === 'deputado-federal'">
                  Deputados(as) federais são representantes do povo no âmbito
                  federal. Compete ao cargo elaborar leis de abrangência nacional
                  e fiscalizar os atos da pessoa que exerce a Presidência da
                  República. Cabe aos parlamentares apresentar projetos de leis
                  ordinárias e complementares, de decreto legislativo, de
                  resolução e emendas à Constituição, bem como discutir e votar
                  medidas provisórias editadas pelo Executivo e criar Comissões
                  Parlamentares de Inquérito (CPIs).
                </p>
                <p v-else-if="data.Role.currentRole === 'governador'">
                  Governadores(as) exercem o Poder Executivo no estado e no
                  Distrito Federal. Cabe a quem ocupa o cargo representar, no
                  âmbito interno, a respectiva Unidade da Federação nas relações
                  jurídicas, políticas e administrativas. Na chefia da
                  administração estadual, têm auxílio de secretários(as) de
                  estado. Também participam do processo legislativo e respondem
                  pela segurança pública. Nesse caso, o governo estadual e do DF
                  contam com as Polícias Civil e Militar e com o Corpo de
                  Bombeiros. Em razão da autonomia dos estados e do Distrito
                  Federal, cada constituição estadual e a Lei Orgânica do Distrito
                  Federal estipulam as competências e responsabilidades do cargo.
                </p>
                <p v-else-if="data.Role.currentRole === 'deputado-distrital'">
                  Deputados(as) distritais representam o povo na esfera distrital
                  (Câmara Legislativa do Distrito Federal). Compete ao cargo
                  legislar, propor, emendar, alterar e revogar leis distritais.
                  Assim como fiscalizar as contas do Poder Executivo do Distrito
                  Federal, entre outras atribuições.
                </p>
                <p v-else-if="data.Role.currentRole === 'deputado-estadual'">
                  Deputados(as) estaduais representam o povo na esfera estadual
                  (Assembleia Legislativa). Compete ao cargo legislar, propor,
                  emendar, alterar e revogar leis estaduais. Assim como fiscalizar
                  as contas do Poder Executivo estadual, entre outras atribuições.
                </p>
              </div>
              <div v-else role="status" class="max animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full w-1/2 mb-4"></div>
                <div class="h-2.5 bg-gray-200 rounded-full w-3/4 mb-4"></div>
                <div class="h-2.5 bg-gray-200 rounded-full w-3/5"></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div class="candidate-list__analisys w-full mb-10">
            <Analysis />
          </div>
          <div class="pb-5 md:border-b border-neutral-base">
            <h2 v-if="loading === false" class="text-primary-base font-bold text-2xl">
              São {{ currentCandidates.length }} pessoas candidatas a
              {{ currentRole }} {{ currentLocale.preposition }}
              {{ currentLocale.name }}
            </h2>
            <div v-else role="status" class="w-full animate-pulse">
              <div class="h-3 bg-gray-200 rounded-full w-3/5"></div>
              <span class="sr-only">Loading...</span>
            </div>
            <div v-if="(data.Filters.hasSelectedElections || data.Filters.hasSelectedNElections || data.Filters.hasSelectedElectionsWon || data.Filters.hasSelectedGenderWoman || data.Filters.hasSelectedGenderMan || data.Filters.hasSelectedEthnicityPPI || data.Filters.hasSelectedEthnicityWhite || data.Party.currentParty.length) && qtdResultsAnalysis">
              <h3 class="text-primary-base font-regular text-xl">Destas, {{qtdResultsAnalysis}}
                <span v-if="data.Filters.hasSelectedElections && paginatedData(currentCandidates).length > 1"> nunca foram eleitas;</span>
                <span v-if="data.Filters.hasSelectedElections && paginatedData(currentCandidates).length === 1"> nunca foi eleita;</span>
                <span v-if="data.Filters.hasSelectedNElections && paginatedData(currentCandidates).length > 1"> nunca concorreram;</span>
                <span v-if="data.Filters.hasSelectedNElections && paginatedData(currentCandidates).length === 1"> nunca concorreu;</span>
                <span v-if="data.Filters.hasSelectedElectionsWon && paginatedData(currentCandidates).length > 1"> já foram eleitas;</span>
                <span v-if="data.Filters.hasSelectedElectionsWon && paginatedData(currentCandidates).length === 1"> já foi eleita;</span>
                <span v-if="data.Filters.hasSelectedGenderWoman && paginatedData(currentCandidates).length > 1"> são mulheres;</span>
                <span v-if="data.Filters.hasSelectedGenderWoman && paginatedData(currentCandidates).length === 1"> é mulher;</span>
                <span v-if="data.Filters.hasSelectedGenderMan && paginatedData(currentCandidates).length > 1"> são homens;</span>
                <span v-if="data.Filters.hasSelectedGenderMan && paginatedData(currentCandidates).length === 1"> é homem;</span>
                <span v-if="data.Filters.hasSelectedEthnicityPPI && paginatedData(currentCandidates).length > 1"> são pretas, pardas ou indígenas;</span>
                <span v-if="data.Filters.hasSelectedEthnicityPPI && paginatedData(currentCandidates).length === 1"> é preta, parda ou indígena;</span>
                <span v-if="data.Filters.hasSelectedEthnicityWhite && paginatedData(currentCandidates).length > 1"> são brancas;</span>
                <span v-if="data.Filters.hasSelectedEthnicityWhite && paginatedData(currentCandidates).length === 1"> é branca;</span>
                <span v-if="data.Party.currentParty.length && paginatedData(currentCandidates).length === 1"> é do {{data.Party.currentParty}};</span>
                <span v-if="data.Party.currentParty.length && paginatedData(currentCandidates).length > 1"> são do {{data.Party.currentParty}};</span>
              </h3>
            </div>
            <!--  -->
          </div>
          <div>
          <div class="candidate-list__candidates block md:grid md:grid-cols-2 2xl:grid-cols-4 gap-3" v-if="loading === false">
            <CardCandidate
              v-for="candidate in paginatedData(currentCandidates)"
              :key="candidate.id"
              :name="candidate.name"
              :number="candidate.ballot_number"
              :party="candidate.party"
              :role="candidate.post"
              :roleID="selectRole(candidate.post)"
              :keyCandidate="candidate.id"
              :locale="data.Locale.currentLocale"
              :image="candidate.image"
              :status="candidate.status"
            />
            <div
              v-if="noResultsAnalysis"
              class="col-span-4 flex justify-center my-20"
              :class="noResultsAnalysis ? 'mb-10 mt-20' : ''"
            >
              <h2 class="text-primary-base font-bold text-3xl mb-4">
                Não há resultados para esta análise
              </h2>
            </div>
          </div>
          <div v-else class="text-center mt-10 md:col-span-2 2xl:col-span-4">
            <div role="status">
                <svg class="inline mr-2 w-20 h-20 text-gray-200 animate-spin fill-primary-base" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
          </div>
          <div
            class="candidate-list__pagintation flex justify-center border-t border-neutral-base mt-10 p-5"
          >
            <Pagination
              :totalPages="pageCount"
              :minButtons="pageCount > 5 ? 5 : pageCount"
              :perPage="resultsPerPage"
              :currentPage="currentPage"
              @pagechanged="onPageChange"
            />
          </div>
        </div>
      </main>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Pagination from "./Pagination.vue";
import Sidebar from "./Sidebar.vue";
import CardCandidate from "./CardCandidate.vue";
import Analysis from "./Analysis/index.vue";
import useStore from "../../hooks/useStore";
import { computed, defineComponent, reactive } from "vue";
import * as roles from "../../services/mocks/filtersRoles.json";
import * as locales from "../../services/mocks/filtersLocales.json";
import services from "@/services";
import { setCurrentCandidates } from "@/store/candidates";
import { setCurrentLocale } from "@/store/locales";
import { setCurrentRole } from "@/store/roles";
import arrayShuffle from "array-shuffle";
import { cleanFilters } from "@/store/filters";
import { ICandidate, ILocale } from "@/models/candidate.model";
import { cleanCurrentParty } from "@/store/party";

export default defineComponent({
  components: {
    Footer,
    Navbar,
    Pagination,
    Analysis,
    CardCandidate,
    Sidebar,
  },
  props: [],
  data() {
    return {
      pageCount: 1,
      currentPage: 0,
      resultsPerPage: 8,
      noResultsAnalysis: true,
      qtdResultsAnalysis: 0,
      FilterParty: false,
      hasFiltersCandidates: false,
      loading: false,
      textFilter: {
        name: "",
        filter: "",
      },
    };
  },
  setup() {
    const data = useStore();
    const items = reactive({
      roles: roles.data,
      locales: locales.data,
    });

    let currentParty = computed(function () {
      return data.Party.currentParty;
    });

    let currentLocale = computed(function () {
      let dataLocale = {
        preposition: "",
        name: "",
      };
      items.locales.forEach((i: ILocale) => {
        if (i.initials === data.Locale.currentLocale) {
          dataLocale = {
            name: i.name,
            preposition: i.preposition,
          };
        } else if (data.Locale.currentLocale == "br") {
          dataLocale = {
            name: "Brasil",
            preposition: "no",
          };
        }
      });
      return dataLocale;
    });

    let currentRole = computed(function () {
      let dataRole = "";
      items.roles.forEach((i: any) => {
        if (i.id == data.Role.currentRole) dataRole = i.name;
      });

      return dataRole;
    });

    let hasSelectedParty = computed(function () {
      return data.Party.hasSelectedParty;
    });

    let currentCandidates = computed(function () {
      const valuesData: ICandidate[] = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );
      return arrayShuffle(valuesData);
    });

    return {
      items,
      data,
      currentLocale,
      currentRole,
      currentParty,
      currentCandidates,
      hasSelectedParty,
    };
  },
  methods: {
    selectRole(role) {
      if (role == "PRESIDENTE") return "presidente";
      if (role == "DEPUTADO DISTRITAL") return "deputado-distrital";
      if (role == "DEPUTADO FEDERAL") return "deputado-federal";
      if (role == "DEPUTADO ESTADUAL") return "deputado-estadual";
      if (role == "GOVERNADOR") return "governador";
      if (role == "SENADOR") return "senador";
    },
    onPageChange(page) {
      this.currentPage = page;
    },

    paginatedData(candidates) {
      return this.filteredItems(candidates);
    },

    pageQtd(candidates) {
      let candidatesSize = candidates.length,
        viewSize = this.resultsPerPage;
      this.pageCount = Math.ceil(candidatesSize / viewSize);
    },

    filteredItems(candidates) {
      var candidatesResult = candidates;

      if (this.data.Filters.hasSelectedGenderWoman) {
        candidatesResult = candidatesResult.filter((item) =>
          item.gender.includes("FEMININO")
        );
      }

      if (this.data.Filters.hasSelectedGenderMan) {
        candidatesResult = candidatesResult.filter((item) =>
          item.gender.includes("MASCULINO")
        );
      }

      if (this.data.Filters.hasSelectedEthnicityWhite) {
        candidatesResult = candidatesResult.filter((item) =>
          item.ethnicity.includes("BRANCA")
        );
      }

      if (this.data.Filters.hasSelectedEthnicityPPI) {
        candidatesResult = candidatesResult.filter(
          (item) =>
            (item.ethnicity == "PRETA" ||
              item.ethnicity == "PARDA" ||
              item.ethnicity == "INDIGENA") &&
            item
        );
      }

      if (this.data.Filters.hasSelectedElections) {
        candidatesResult = candidatesResult.filter(
          (item) => item.elections != 0 && item.elections_won == 0 && item
        );
      }

      if (this.data.Filters.hasSelectedNElections) {
        candidatesResult = candidatesResult.filter(
          (item) => item.elections == 0 && item
        );
      }

      if (this.data.Filters.hasSelectedElectionsWon) {
        candidatesResult = candidatesResult.filter(
          (item) => item.elections != 0 && item.elections_won != 0 && item
        );
      }

      if (this.data.Party.currentParty.length) {
        candidatesResult = candidatesResult.filter(
          (item) => item.party == this.data.Party.currentParty && item
        );
      }

      if (candidatesResult.length == 0) {
        this.qtdResultsAnalysis = candidatesResult.length;
        this.noResultsAnalysis = true;
        this.hasFiltersCandidates = false;
      } else {
        this.qtdResultsAnalysis = candidatesResult.length;
        this.noResultsAnalysis = false;
        this.hasFiltersCandidates = true;
      }

      this.pageQtd(candidatesResult);
      const start = this.currentPage * this.resultsPerPage,
        end = start + this.resultsPerPage;
      return candidatesResult.slice(start, end);
    },
  },
  async mounted() {
    this.loading = true;
    const roleCandidate = this.$route.params.role.toString();
    const localeCandidate = this.$route.params.locale.toString();
    const yearCandidate = Number(this.$route.params.year);
    try {
      const { data } = await services.dataCandidates.candidatesList(
        yearCandidate,
        localeCandidate,
        roleCandidate
      );
      if(data) this.loading = false;
      setCurrentCandidates(data);
      setCurrentLocale(localeCandidate);
      setCurrentRole(roleCandidate);
      cleanFilters();
      cleanCurrentParty();
    } catch (e) {
      this.loading = false;
      console.log("Erro", e);
    }
  },
});
</script>
