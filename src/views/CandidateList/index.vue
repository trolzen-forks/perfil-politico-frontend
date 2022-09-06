<template>
  <div class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <div class="candidate-list mt-20 sm:flex flex-grow">
      <Sidebar />
      <main class="candidate-list__content w-full">
        <div class="container sm:p-12 px-5">
          <div class="candidate-list__title mb-12">
            <h1 class="text-primary-base font-bold text-3xl mb-4">
              Confira os candidatos para {{dataRole}} {{dataLocale.preposition}} {{dataLocale.name}}
            </h1>
            <div class="pt-10 border-t border-neutral-base">
              <h2 class="text-primary-base font-bold text-xl mb-4">Qual sua função?</h2>
              <p v-if="data.Role.currentRole === 'presidente'">
                A pessoa eleita para a Presidência da República governa e administra os interesses públicos da União. Tem o dever de manter a integridade e a independência do país, bem como apresentar um plano de governo com programas prioritários, projetos de lei de diretrizes orçamentárias e propostas de orçamento. Exerce também atribuições administrativas e legislativas. Entre as diversas atribuições administrativas do cargo estão nomear titulares dos ministérios, ministros(as) do Supremo Tribunal Federal (STF), dos tribunais superiores e o (a) advogado(a)-geral da União. Com relação à política externa, compete à Presidência da República decidir sobre as relações com outros países, sobre o credenciamento de representantes diplomáticos e sobre a celebração de convenções, tratados e atos internacionais, sujeitos a referendo do Congresso Nacional.
              </p>
              <p v-else-if="data.Role.currentRole === 'senador'">
                Senadores(as) são representantes dos estados e do DF no Congresso Nacional. Assim como parlamentares da Câmara dos Deputados, têm a prerrogativa constitucional de fazer leis e de fiscalizar os atos do Poder Executivo. Além disso, a Constituição Federal prevê como competência privativa do Senado: processar e julgar, nos crimes de responsabilidade, quem ocupa os cargos de presidente(a) e vice-presidente(a), ministros(as) de Estado e comandantes(as) da Marinha, do Exército e da Aeronáutica, ministros(as) do Supremo Tribunal Federal (STF), membros(as) do Conselho Nacional de Justiça (CNJ) e do Conselho Nacional do Ministério Público, o (a) procurador(a)-geral da República e o (a) advogado(a)-geral da União.
              </p>
              <p v-else-if="data.Role.currentRole === 'deputado-federal'">
                Deputados(as) federais são representantes do povo no âmbito federal. Compete ao cargo elaborar leis de abrangência nacional e fiscalizar os atos da pessoa que exerce a Presidência da República. Cabe aos parlamentares apresentar projetos de leis ordinárias e complementares, de decreto legislativo, de resolução e emendas à Constituição, bem como discutir e votar medidas provisórias editadas pelo Executivo e criar Comissões Parlamentares de Inquérito (CPIs).
              </p>
              <p v-else-if="data.Role.currentRole === 'governador'">
                Governadores(as) exercem o Poder Executivo no estado e no Distrito Federal. Cabe a quem ocupa o cargo representar, no âmbito interno, a respectiva Unidade da Federação nas relações jurídicas, políticas e administrativas. Na chefia da administração estadual, têm auxílio de secretários(as) de estado. Também participam do processo legislativo e respondem pela segurança pública. Nesse caso, o governo estadual e do DF contam com as Polícias Civil e Militar e com o Corpo de Bombeiros. Em razão da autonomia dos estados e do Distrito Federal, cada constituição estadual e a Lei Orgânica do Distrito Federal estipulam as competências e responsabilidades do cargo.
              </p>
              <p v-else-if="data.Role.currentRole === 'deputado-distrital'">
                Deputados(as) distritais representam o povo na esfera distrital (Câmara Legislativa do Distrito Federal). Compete ao cargo legislar, propor, emendar, alterar e revogar leis distritais. Assim como fiscalizar as contas do Poder Executivo do Distrito Federal, entre outras atribuições.
              </p>
              <p v-else-if="data.Role.currentRole === 'deputado-estadual'">
                Deputados(as) estaduais representam o povo na esfera estadual (Assembleia Legislativa). Compete ao cargo legislar, propor, emendar, alterar e revogar leis estaduais. Assim como fiscalizar as contas do Poder Executivo estadual, entre outras atribuições.
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
              v-for="candidate in data.Candidates.currentCandidates.objects"
              :name="candidate.name"
              :number="candidate.ballot_number"
              :party="candidate.party"
              :role="candidate.post"
              :key="candidate.id"
              :keyCandidate="candidate.id"
              :locale="data.Locale.currentLocale"
              :image="candidate.image"
            />
          </div>
          <div
            class="candidate-list__pagintation flex justify-center border-t border-neutral-base mt-10 p-5"
          >
            <Pagination />
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
import { reactive } from "vue";
import * as roles from "../../services/mocks/filtersRoles.json";
import * as locales from "../../services/mocks/filtersLocales.json";

export default {
  components: {
    Footer,
    Navbar,
    Pagination,
    Analysis,
    CardCandidate,
    Sidebar
  },
  setup() {
    const data = useStore();
    let dataRole = '';
    let dataLocale = {};
    
    const state = reactive({
      hasError: false,
      isLoading: false,
    });
    const items = reactive({
      roles: roles.data,
      locales: locales.data,
    });

    items.roles.forEach((i: any) => {
      if(i.id === data.Role.currentRole) dataRole = i.name
    })

    items.locales.forEach((i: any) => {
      if(i.initials === data.Locale.currentLocale) dataLocale = {
        name: i.name,
        preposition: i.preposition
      }
      else if(data.Locale.currentLocale === 'br'){
        dataLocale = {
          name: 'Brasil',
          preposition: 'no'
        }
      }
    })


    return {
      state,
      data,
      dataRole,
      dataLocale
    };
  },
};
</script>
