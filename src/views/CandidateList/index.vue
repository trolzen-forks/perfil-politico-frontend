<template>
  <div class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <div class="candidate-list mt-20 sm:flex flex-grow">
      <Sidebar />
      <main class="candidate-list__content w-full">
        <div class="container sm:p-12 px-5">
          <div class="candidate-list__title mb-12">
            <h1 class="text-primary-base font-bold text-3xl mb-4">
              Confira as candidaturas para {{ currentRole }}
              {{ currentLocale.preposition }} {{ currentLocale.name }}
            </h1>
            <div class="pt-10 md:border-t border-neutral-base">
              <h2 class="text-primary-base font-bold text-xl mb-4">
                Qual sua função?
              </h2>
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
          </div>
          <div class="candidate-list__analisys w-full">
            <Analysis />
          </div>
          <div
            class="candidate-list__candidates block sm:grid grid-cols-4 gap-3"
          >
            <CardCandidate
              v-for="candidate in hasSelectedParty === true
                ? currentCandidatesFilterParty
                : hasSelectedElectionsWon === true
                ? unionAnalysis(currentFilterElectionsWon, currentFilterGenderWoman, currentFilterEthnicityPPI)
                : hasSelectedElectionsWon === true 
                ? currentFilterElectionsWon
                : hasSelectedElections === true
                ? currentFilterElections
                : hasSelectedNElections === true
                ? currentFilterNElections
                : hasSelectedGenderWoman === true
                ? currentFilterGenderWoman
                : hasSelectedGenderMan === true
                ? currentFilterGenderMan
                : hasSelectedEthnicityPPI === true
                ? currentFilterEthnicityPPI
                : hasSelectedEthnicityWhite === true
                ? currentFilterEthnicityWhite
                : paginatedData"
              :key="candidate.id"
              :name="candidate.name"
              :number="candidate.ballot_number"
              :party="candidate.party"
              :role="candidate.post"
              :keyCandidate="candidate.id"
              :locale="data.Locale.currentLocale"
              :image="candidate.image"
              :status="candidate.status"
            />
            <div v-if="noResultsAnalysis" class="col-span-4 flex justify-center my-20">
              <h2 class="text-primary-base font-bold text-3xl mb-4">Não há resultados para esta análise</h2>
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
      currentPage: 0,
      resultsPerPage: 8,
      noResultsAnalysis: false
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
      items.locales.forEach((i: any) => {
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

    let hasSelectedElectionsWon = computed(function () {
      return data.Filters.hasSelectedElectionsWon;
    });

    let hasSelectedElections = computed(function () {
      return data.Filters.hasSelectedElections;
    });

    let hasSelectedNElections = computed(function () {
      return data.Filters.hasSelectedNElections;
    });

    let hasSelectedGenderWoman = computed(function () {
      return data.Filters.hasSelectedGenderWoman;
    });
    let hasSelectedGenderMan = computed(function () {
      return data.Filters.hasSelectedGenderMan;
    });
    let hasSelectedEthnicityPPI = computed(function () {
      return data.Filters.hasSelectedEthnicityPPI;
    });
    let hasSelectedEthnicityWhite = computed(function () {
      return data.Filters.hasSelectedEthnicityWhite;
    });

    let currentCandidatesFilterParty = computed(function () {
      const valuesData: any = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );

      return valuesData.filter(function (el) {
        if (el.party == data.Party.currentParty) {
          return el;
        }
      });
    });

    let currentFilterElectionsWon = computed(function () {
      const valuesData: any = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );

      return valuesData.filter(function (el) {
        if (data.Filters.hasSelectedElectionsWon) {
          if (el.elections_won != 0) {
            return el;
          }
        }
      });
    });

    let currentFilterElections = computed(function () {
      const valuesData: any = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );

      return valuesData.filter(function (el) {
        if (data.Filters.hasSelectedElections) {
          if (el.elections_won == 0) {
            return el;
          }
        }
      });
    });

    let currentFilterNElections = computed(function () {
      const valuesData: any = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );

      return valuesData.filter(function (el) {
        if (data.Filters.hasSelectedNElections) {
          if (el.elections == 0) {
            return el;
          }
        }
      });
    });

    let currentFilterGenderWoman = computed(function () {
      const valuesData: any = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );

      return valuesData.filter(function (el) {
        if (data.Filters.hasSelectedGenderWoman) {
          console.log(el.gender)
          if (el.gender == 'FEMININO') {
            console.log(el.gender)
            return el;
          }
        }
      });
    });

    let currentFilterGenderMan = computed(function () {
      const valuesData: any = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );

      return valuesData.filter(function (el) {
        if (data.Filters.hasSelectedGenderMan) {
          if (el.gender == 'MASCULINO') {
            return el;
          }
        }
      });
    });

    let currentFilterEthnicityPPI = computed(function () {
      const valuesData: any = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );

      return valuesData.filter(function (el) {
        if (data.Filters.hasSelectedEthnicityPPI) {
          if (el.ethnicity == 'PARDA' || el.ethnicity == 'PRETA' || el.ethnicity == 'INDIGENA') {
            return el;
          }
        }
      });
    });

    let currentFilterEthnicityWhite = computed(function () {
      const valuesData: any = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );

      return valuesData.filter(function (el) {
        if (data.Filters.hasSelectedEthnicityWhite) {
          if (el.ethnicity == 'BRANCA') {
            return el;
          }
        }
      });
    });

    let currentCandidates = computed(function () {
      const valuesData: any = [];
      data.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );
      return valuesData;
    });

    return {
      items,
      data,
      currentLocale,
      currentRole,
      currentParty,
      currentCandidates,
      currentCandidatesFilterParty,
      hasSelectedParty,
      currentFilterElectionsWon,
      hasSelectedElectionsWon,
      currentFilterElections,
      hasSelectedElections,
      hasSelectedNElections,
      currentFilterNElections,
      currentFilterGenderWoman,
      hasSelectedGenderWoman,
      currentFilterGenderMan,
      hasSelectedGenderMan,
      currentFilterEthnicityPPI,
      hasSelectedEthnicityPPI,
      hasSelectedEthnicityWhite,
      currentFilterEthnicityWhite
    };
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
    unionAnalysis(item, item2, item3?){
      const valuesData: any = [];
      let intersection2: any = [];
      let intersection3: any = [];

      if(this.hasSelectedElectionsWon === true && this.hasSelectedGenderWoman === true && this.hasSelectedEthnicityPPI === true){
        this.currentFilterElectionsWon.forEach((i) =>
          valuesData.push(i)
        );
        valuesData.filter(function (el) {
          intersection2 = item2.includes(el)
        });
        if(intersection2 && item3) intersection2.filter(function (el) {
        intersection3 = item3.includes(el)
      });
      else return intersection2;
      }

      
      if(intersection2 && item3) intersection2.filter(function (el) {
        intersection3 = item3.includes(el)
      });
      else return intersection2;
    }
  },
  computed: {
    pageCount() {
      let candidatesSize = this.data.Candidates.currentCandidates.objects?.length, viewSize = this.resultsPerPage;
      return Math.ceil(candidatesSize / viewSize);
    },
    paginatedData() {
      const start = this.currentPage * this.resultsPerPage, end = start + this.resultsPerPage;
      return this.data.Candidates.currentCandidates.objects?.slice(start, end);
    },
  },
  async mounted() {
    const roleCandidate = this.$route.params.role.toString();
    const localeCandidate = this.$route.params.locale.toString();
    const yearCandidate = Number(this.$route.params.year);
    try {
      const { data } = await services.dataCandidates.candidatesList(
        yearCandidate,
        localeCandidate,
        roleCandidate
      );
      setCurrentCandidates(data);
      setCurrentLocale(localeCandidate);
      setCurrentRole(roleCandidate);
    } catch (e) {
      console.log("Erro", e);
    }
  },
});
</script>
