<template>
  <div class="c-form-search-candidate flex flex-col self-start w-full">
    <h3 class="home__banner-content-action_subtitle md:text-base md:text-left text-sm text-center mb-4">
      Primeiro, selecione o(s) seguinte(s) campo(s)
    </h3>
    <div>
      <form class="grid md:grid-cols-2 gap-2">
        <div :class="!location ? 'col-span-2' : ''">
          <span class="sr-only">Cargo</span>
          <select
            id="roleCandidates"
            name="roleCandidates"
            v-model="roleCandidates"
            @change="hasLocation"
            class="bg-background-purpleLight py-3 px-5 text-white text-sm rounded-full font-regular focus:ring-secondary-base focus:border-secondary-base block w-full"
            placeholder="Cargo"
            required
          >
            <option selected disabled value="">Cargo</option>
            <option v-for="role in data.roles" :key="role.id" :value="role.id">
              {{
                !role ? "Não foi possível carregar as informações" : role.name
              }}
            </option>
          </select>
        </div>
        <div
          v-if="location"
          :class="
            location
              ? 'animate__animated animate__fadeInRight'
              : 'animate__animated animate__fadeOutRight'
          "
        >
          <span class="sr-only">Localidade</span>
          <select
            id="localeCandidates"
            name="localeCandidates"
            v-model="localeCandidates"
            class="bg-background-purpleLight py-3 px-5 text-white text-sm rounded-full font-regular focus:ring-secondary-base focus:border-secondary-base block w-full"
            required
            placeholder="Localidade"
          >
            <option selected disabled value="">Localidade</option>
            <option
              v-for="locale in data.locales"
              :key="locale.initials"
              :value="locale.initials"
            >
              {{ locale.name }}
            </option>
          </select>
        </div>
      </form>
    </div>
    <div
      v-if="
        (roleCandidates && localeCandidates) || (roleCandidates && !location)
      "
      :class="
        (roleCandidates && localeCandidates) || (roleCandidates && !location)
          ? 'md:mt-10 mt-5 animate__animated animate__fadeIn'
          : 'hidden'
      "
    >
      <h3 class="home__banner-content-action_subtitle md:text-base md:text-left text-sm text-center my-3">
        Tem uma pessoa candidata em mente?
      </h3>
      <div
        class="home__banner-content-action_form sm:flex flex-grow animate__animated animate__fadeIn"
      >
        <div class="flex-auto mr-2">
          <label class="relative block">
            <span class="sr-only">Digite o nome da pessoa candidata</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>              
            </span>
            <input
              type="text"
              id="first_name"
              autocomplete="off"
              v-model="searchListCandidates.name"
              v-on:input="
                searchListCandidates.name.length > 1
                  ? (showListCandidates = true)
                  : (showListCandidates = false)
              "
              class="bg-background-purpleLight text-white text-sm rounded-full font-regular placeholder:text-white placeholder-white focus:ring-secondary-base focus:border-secondary-base focus:bg-background-purpleLight block w-full py-3 pl-10 pr-5"
              placeholder="Digite o nome da pessoa candidata"
              required
            />
          </label>
          <div v-if="showListCandidates" class="block">
            <ul
              class="list-search inline-block absolute z-10 box-content py-2 px-3 text-sm tooltip font-medium text-white bg-primary-dark rounded-lg shadow-sm"
            >
              <li
                v-for="candidate in filteredList.slice(0, 4)"
                :key="candidate.id"
                class="md:w-full w-auto cursor-pointer px-2 py-3 border-b border-primary-base"
                v-on:click="
                  (searchListCandidates.name = candidate.name),
                    (searchListCandidates.id = candidate.id),
                    (showListCandidates = false)
                "
              >
                <span class="w-full capitalize md:text-base text-xs"
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
          class="flex-none text-primary-base sm:w-auto sm:mt-0 xs:block w-full mt-4 uppercase font-bold bg-secondary-base font-medium rounded-full text-sm px-5 py-3 text-center mr-2 mb-2"
          v-on:click="handleSearchCandidate(searchListCandidates.id)"
        >
          Buscar
        </button>
      </div>
      <h3 class="home__banner_subtitle md:text-base md:text-left text-sm text-center mt-6 mb-3">
        Não tem alguém em mente?
      </h3>
      <div class="sm:flex block">
        <button
          type="submit"
          class="flex-none mt-0 xs:block w-full text-primary-base uppercase font-bold bg-secondary-base hover:bg-secondary-light focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 text-center mr-2 mb-2"
          v-on:click="handleSubmitCompareCandidates"
        >
          Comparar candidaturas
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import services from "@/services/index";
import * as roles from "../../services/mocks/filtersRoles.json";
import * as locales from "../../services/mocks/filtersLocales.json";
import { computed, defineComponent, reactive } from "vue";
import {
  cleanCurrentCandidates,
  setCurrentCandidates,
  setInfoCandidateSelected,
} from "@/store/candidates";
import { setCurrentLocale } from "@/store/locales";
import { setCurrentRole } from "@/store/roles";
import useStore from "@/hooks/useStore";

export default defineComponent({
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
    cleanCurrentCandidates();

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
    hasLocation(e: any) {
      if (
        !(
          e.target.value === "presidente" ||
          e.target.value === "deputado-distrital"
        )
      ) {
        this.location = true;
      } else {
        this.location = false;

        e.target.value === "presidente"
          ? (this.localeCandidates = "br")
          : (this.localeCandidates = "df");
      }
    },

    async getCandidates(): Promise<any> {
      try {
        const { data } = await services.dataCandidates.candidatesList(
          2022,
          this.localeCandidates,
          this.roleCandidates
        );
        setCurrentCandidates(data);
        setCurrentLocale(this.localeCandidates);
        setCurrentRole(this.roleCandidates);
      } catch (error) {
        console.log("Erro no carregamento de candidatos", error);
      }
    },

    handleSubmitCompareCandidates() {
      this.getCandidates();
      this.$router.push({
        name: "CandidateList",
        params: {
          year: 2022,
          locale: this.localeCandidates,
          role: this.roleCandidates,
        },
      });
    },

    async handleSearchCandidate(idCandidate) {
      try {
        const { dataCandidate } = await services.dataCandidates.candidate(
          idCandidate
        );
        this.getCandidates();
        setInfoCandidateSelected(dataCandidate);

        this.$router.push({
          name: "Candidate",
          params: {
            year: 2022,
            locale: this.localeCandidates,
            role: this.roleCandidates,
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

<style>
.list-search {
  width: 470px;
}
@media (max-width: 425px) {
  .list-search {
    width: 350px;
  }
}
@media (max-width: 375px) {
  .list-search {
    width: 300px;
  }
}
@media (max-width: 320px) {
  .list-search {
    width: 250px;
  }
}
</style>
