<template>
  <nav
    class="c-sidebar relative lg:w-1/3 w-full border-b mb-5 lg:mb-0  min-h-full border-r border-neutral-base"
    aria-label="Sidebar"
  >
    <div
      class="c-sidebar__mobile lg:hidden pt-3 pb-5 container sm:px-10 border-neutral-base"
    >
      <button
        data-collapse-toggle="sidebar-candidates"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm rounded-lg ring-2 ring-primary-base hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-base"
        aria-controls="sidebar-candidates"
        aria-expanded="false"
        v-on:click="isOpenSidebar = !isOpenSidebar"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="#5A44A0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          ></path>
        </svg>
        <span class="ml-2 text-lg font-semibold text-primary-base"
          >Filtros</span
        >
      </button>
    </div>
    <div
      class="lg:sticky lg:top-20 lg:block lg:w-auto px-6 py-3"
      id="sidebar-candidates"
      :class="isOpenSidebar ? 'd-block' : 'hidden'"
    >
      <div class="c-sidebar__state mb-10 mt-3">
        <h3 class="text-primary-base text-xl font-bold mb-3">Estado</h3>

        <label for="estados" class="sr-only">Selecione um Estado</label>
        <select
          id="localeListCandidates"
          name="localeListCandidates"
          @change="localeListCandidates"
          class="bg-neutral-light border-neutral-light sidebar py-3 px-5 text-neutral-baseDark text-sm rounded-full font-regular focus:ring-secondary-base focus:border-secondary-base block w-full"
        >
          <option
            v-if="currentLocale.initials === 'br'"
            value=""
            selected
            disabled
          >
            Selecione um estado
          </option>
          <option
            v-for="(locale, index) in items.locales"
            :key="index"
            :value="locale.initials"
            :selected="
              currentLocale.initials !== locale.initials ? false : true
            "
          >
            {{ locale.name }}
          </option>
        </select>
      </div>

      <div class="c-sidebar__role mb-10">
        <div class="flex justify-between items-center">
          <h3 class="text-primary-base text-xl font-bold mb-3">Cargo</h3>
        </div>
        <div>
          <ul class="py-1" aria-labelledby="user-menu-button">
            <li
              v-for="role in items.roles"
              :key="role.id"
              :class="
                role.id === currentRole
                  ? 'border-l-8 border-primary-base bg-gray-100'
                  : 'border-l-4 border-transparent'
              "
            >
              <button
                type="button"
                @click="selectRole(role.id)"
                class="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 flex justify-between w-full"
              >
                <span>{{ role.name }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="c-sidebar__state mb-10">
        <div class="flex justify-between items-center">
          <h3 class="text-primary-base text-xl font-bold mb-3">Partidos</h3>
          <button
            type="button"
            v-on:click="clearParty()"
            class="text-neutral-baseMedium text-sm underline hover:no-underline"
          >
            Limpar
          </button>
        </div>
        <div class="inline-flex flex-wrap">
          <button
            type="button"
            v-on:click="
              item.party == currentParty
                ? clearParty()
                : selectParty(item.party)
            "
            class="px-4 py-2 mr-2 mb-2 rounded font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease"
            :class="
              item.party == currentParty
                ? 'text-primary-base bg-secondary-base'
                : 'text-black bg-neutral-light'
            "
            v-for="item in reduceParty"
            :key="item.party"
          >
            {{ item.party }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import useStore from "@/hooks/useStore";
import { computed, defineComponent, reactive } from "vue";
import * as roles from "../../services/mocks/filtersRoles.json";
import * as locales from "../../services/mocks/filtersLocales.json";
import { setCurrentParty, cleanCurrentParty } from "@/store/party";
import { setCurrentLocale } from "@/store/locales";
import services from "@/services";
import { setCurrentCandidates } from "@/store/candidates";
import { setCurrentRole } from "@/store/roles";
import { ICandidate, ILocale, IRole } from "@/models/candidate.model";

export default defineComponent({
  data() {
    return {
      isActiveRole: true,
      isOpenSidebar: false,
    };
  },
  setup() {
    const store = useStore();
    const items = reactive({
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
      let dataLocale = {
        initials: "",
        name: "",
      };
      items.locales.forEach((i: ILocale) => {
        if (i.initials === store.Locale.currentLocale) {
          dataLocale = {
            name: i.name,
            initials: i.initials,
          };
        } else if (store.Locale.currentLocale === "br") {
          dataLocale = {
            name: "Brasil",
            initials: "br",
          };
        }
      });
      return dataLocale;
    });

    let hasSelectedParty = computed(function () {
      return store.hasSelectedParty;
    });

    let currentParty = computed(function () {
      return store.Party.currentParty;
    });

    let reduceParty = computed(function () {
      const valuesData: ICandidate[] = [];
      let set = new Set();

      store.Candidates.currentCandidates.objects?.forEach((i) =>
        valuesData.push(i)
      );

      let unionArray = valuesData.filter((item) => {
        if (!set.has(item.party)) {
          set.add(item.party);
          return true;
        }
        return false;
      }, set);

      return unionArray;
    });

    return {
      store,
      items,
      currentRole,
      currentLocale,
      currentParty,
      reduceParty,
      hasSelectedParty,
      currentCandidates,
    };
  },
  methods: {
    selectParty(item: string) {
      setCurrentParty(item);
    },

    clearParty() {
      cleanCurrentParty();
    },

    localeListCandidates(event) {
      if (event.target.value && this.currentRole == "deputado-distrital") {
        setCurrentLocale("df");
        this.handleData(this.currentRole, "df");
      } else if (event.target.value && this.currentRole != "presidente") {
        setCurrentLocale(event.target.value);
        this.handleData(this.currentRole, event.target.value);
      } else {
        setCurrentLocale("br");
        this.handleData(this.currentRole, "br");
      }
    },

    selectRole(item: string) {
      setCurrentRole(item);
      if (
        item === "presidente" ||
        (item === "presidente" && this.currentLocale.initials !== "br")
      ) {
        setCurrentLocale("br");
        this.handleData(item, "br");
      } else if (item === "deputado-distrital") {
        setCurrentLocale("df");
        this.handleData(item, "df");
      } else if (item !== "presidente" && this.currentLocale.initials === "br")
        alert("Selecione um estado!");
      else this.handleData(item, this.currentLocale.initials);
    },

    async handleData(role: string, locale: string) {
      try {
        const { data } = await services.dataCandidates.candidatesList(
          2022,
          locale,
          role
        );
        setCurrentCandidates(data);
        this.$router.replace({
          name: "CandidateList",
          params: {
            year: 2022,
            locale: locale,
            role: role,
          },
        });
      } catch (error) {
        console.log("Erro no carregamento de candidatos", error);
      }
    },
  },
});
</script>

<style></style>
