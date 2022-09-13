<template>
  <nav class="bg-primary-base fixed w-full z-20 top-0 left-0 sm:h-20 shadow-md">
    <div class="flex flex-wrap justify-between items-center mx-auto">
      <div
        class="sm:bg-black flex-none sm:bg-opacity-20 sm:w-1/4 w-2/4 sm:h-20 py-5 px-5 flex justify-center"
      >
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/logo.svg" alt="Perfil Político" />
        </router-link>
      </div>
      <div class="flex sm:flex-none md:order-2 px-2 sm:px-6 py-2.5">
        <div
          class="c-footer__content-link-project flex items-center p-3 rounded-lg"
        >
          <img src="@/assets/icons/icon-github.svg" alt="Github" />
          <span
            ><a
              href="https://github.com/okfn-brasil/perfil-politico-frontend"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-2 text-white hover:underline"
              >Ver Github</a
            ></span
          >
        </div>
      </div>
      <div class="hidden sm:w-3/5 grow md:flex md:order-1" id="navbar-sticky">
        <div class="hidden relative md:block w-full">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <span class="material-symbols-outlined text-white">search</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block p-3 pl-10 w-full text-white bg-white bg-opacity-20 placeholder-white rounded-lg sm:text-sm focus:ring-secondary-base focus:border-secondary-base focus:bg-background-purpleLight"
            placeholder="Digite o nome da pessoa candidata"
            autocomplete="off"
            required
              v-model="searchListCandidates.name"
              v-on:input="
                searchListCandidates.name.length > 1
                  ? (showListCandidates = true)
                  : (showListCandidates = false)
              "
          />
          <div v-if="showListCandidates" class="hidden md:block">
            <ul
              class="list-search inline-block absolute z-10 box-content py-2 px-3 text-sm font-medium text-white bg-primary-dark rounded-lg shadow-sm"
            >
              <li
                v-for="candidate in filteredList.slice(0, 4)"
                :key="candidate.id"
                class="w-full cursor-pointer px-2 py-3 border-b border-primary-base"
                v-on:click="
                  (searchListCandidates.name = candidate.name),
                    (searchListCandidates.id = candidate.id),
                    (showListCandidates = false)
                "
              >
                <span class="w-full capitalize">{{ candidate.name }} </span>
              </li>
              <li
                v-if="searchListCandidates && !filteredList.length"
                class="px-2 py-3"
              >
                <span>Não encontramos resultados para sua pesquisa!</span>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          class="flex-none text-primary-base sm:w-auto sm:mt-0 xs:block w-full mt-4 uppercase font-bold bg-secondary-base font-medium rounded-lg ml-2 text-sm px-5 py-3 text-center mr-2 mb-2"
          v-on:click="handleSearchCandidate(searchListCandidates.id)"
        >
          Buscar
      </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import useStore from "@/hooks/useStore";
import services from "@/services";
import { setInfoCandidateSelected } from "@/store/candidates";
import { computed, defineComponent, reactive } from "vue";
import * as roles from "../services/mocks/filtersRoles.json";
import * as locales from "../services/mocks/filtersLocales.json";
export default defineComponent({
  name: "Navbar",
  props: ["candidates"],
  data() {
    return {
      location: false,
      roleCandidates: "",
      localeCandidates: "",
      dataInfoCandidates: [],
      dataNameCandidates: [],
      showListCandidates: false,
      searchListCandidates: {
        name: "",
        id: "",
      },
    };
  },
  setup() {
    const store = useStore();
    const listCandidates = [];
    const data = reactive({
      roles: roles.data,
      locales: locales.data,
    });

    let currentRole = computed(function () {
      return store.Role.currentRole;
    });

    let currentCandidates = computed(function () {
      return store.Candidates.currentCandidates.objects;
    });

    let currentLocale = computed(function () {
      return store.Locale.currentLocale;
    });

    return {
      data,
      store,
      listCandidates,
      currentRole,
      currentCandidates,
      currentLocale,
    };
  },
  methods: {
    async getCandidates(): Promise<any> {
      try {
        const { data } = await services.dataCandidates.candidatesList(
          2022,
          this.currentLocale,
          this.currentRole
        );
        return data
      } catch (error) {
        console.log("Erro no carregamento de candidatos", error);
      }
    },

    async handleSearchCandidate(idCandidate) {
      console.log("PESQUISA", idCandidate)
      try {
        const { dataCandidate } = await services.dataCandidates.candidate(
          idCandidate
        );
        setInfoCandidateSelected(dataCandidate);

        this.$router.push({
          name: "Candidate",
          params: {
            year: 2022,
            locale: this.currentLocale,
            role: this.currentRole,
            keyCandidate: idCandidate,
          },
        });
      } catch (error) {
        console.log("Erro no carregamento da pessoa candidata", error);
      }
    },
  },
  computed: {
    filteredList() {
      this.getCandidates()
      return this.store.Candidates.currentCandidates.objects?.filter(
        (candidates) => {
          return candidates.name
            .toLowerCase()
            .includes(this.searchListCandidates.name.toLowerCase());
        }
      );
    },
  },
});
</script>
