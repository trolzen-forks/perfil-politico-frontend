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
          class="c-footer__content-link-project flex items-center p-3 h-full rounded-lg bg-white bg-opacity-10"
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
        <select
          id="roleCandidates"
          name="roleCandidates"
          @change="selectRoleNavbar"
          class="bg-background-purpleLight bg-opacity-70 h-full p-3 pr-8 text-white text-sm rounded-l-lg border-transparent font-regular focus:ring-secondary-base focus:border-secondary-base block"
          placeholder="Cargo"
          required
        >
          <option selected disabled value="" v-if="!currentRole.value">
            Cargo
          </option>
          <option
            v-for="role in data.roles"
            :key="role.id"
            :value="role.id"
            :selected="currentRole === role.id ? true : false"
          >
            {{ role.name }}
          </option>
        </select>
        <select
          id="localeCandidates"
          name="localeCandidates"
          @change="localeNavbarCandidates"
          class="bg-background-purpleLight h-full p-3 pr-8 text-white text-sm font-regular border-transparent focus:ring-secondary-base focus:border-secondary-base"
          required
          placeholder="Localidade"
        >
          <option
            v-if="currentLocale === 'br' || !currentLocale.value"
            selected
            disabled
            value=""
          >
            Estado
          </option>
          <option
            v-for="(locale, index) in data.locales"
            :key="index"
            :value="locale.initials"
            :selected="currentLocale === locale.initials ? true : false"
          >
            {{ locale.name }}
          </option>
        </select>
        <div class="hidden relative md:block w-full h-full">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block p-3 pl-10 w-full text-white bg-white bg-opacity-20 placeholder-white border-transparent rounded-r-lg sm:text-sm focus:ring-secondary-base focus:border-secondary-base focus:bg-background-purpleLight"
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
                <span class="w-full capitalize"
                  >{{ candidate.name }} ({{ candidate.party }})</span
                >
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
import {
  setCurrentCandidates,
  setInfoCandidateSelected,
} from "@/store/candidates";
import { computed, defineComponent, reactive } from "vue";
import * as roles from "../services/mocks/filtersRoles.json";
import * as locales from "../services/mocks/filtersLocales.json";
import { setCurrentLocale } from "@/store/locales";
import { setCurrentRole } from "@/store/roles";
export default defineComponent({
  name: "Navbar",
  props: ["candidates"],
  data() {
    return {
      location: false,
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
    localeNavbarCandidates(event) {
      if (event.target.value && this.currentRole === "deputado-distrital") {
        setCurrentLocale("df");
        this.handleData(this.currentRole, "df");
      } else if (event.target.value && this.currentRole !== "presidente") {
        setCurrentLocale(event.target.value);
        this.handleData(this.currentRole, event.target.value);
      } else {
        setCurrentLocale("br");
        this.handleData(this.currentRole, "br");
      }
    },

    selectRoleNavbar(event) {
      setCurrentRole(event.target.value);
      if (
        event.target.value === "presidente" ||
        (event.target.value === "presidente" &&
          this.currentLocale.initials !== "br")
      ) {
        setCurrentLocale("br");
        this.handleData(event.target.value, "br");
      } else if (event.target.value === "deputado-distrital") {
        setCurrentLocale("df");
        this.handleData(event.target.value, "df");
      } else if (
        event.target.value !== "presidente" &&
        this.currentLocale.initials === "br"
      )
        alert("Selecione um estado!");
      else this.handleData(event.target.value, this.currentLocale.initials);
    },

    async getCandidates(): Promise<any> {
      try {
        const { data } = await services.dataCandidates.candidatesList(
          2022,
          this.currentLocale,
          this.currentRole
        );
        return data;
      } catch (error) {
        console.log("Erro no carregamento de candidatos", error);
      }
    },

    async handleSearchCandidate(idCandidate) {
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

    async handleData(role: any, locale: any) {
      try {
        const { data } = await services.dataCandidates.candidatesList(
          2022,
          locale,
          role
        );
        setCurrentCandidates(data);
        if (this.$router.currentRoute.value.name === "CandidateList") {
          this.$router.replace({
            name: "CandidateList",
            params: {
              year: 2022,
              locale: locale,
              role: role,
            },
          });
        }
      } catch (error) {
        console.log("Erro no carregamento de candidatos", error);
      }
    },
  },
  computed: {
    filteredList() {
      this.getCandidates();
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
