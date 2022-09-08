<template>
  <nav class="c-sidebar sticky sm:w-1/3 min-h-full" aria-label="Sidebar">
    <button
      data-collapse-toggle="sidebar-candidates"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="sidebar-candidates"
      aria-expanded="false"
    >
      <span class="sr-only">Abrir filtros</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div
      class="hidden w-full h-full md:block md:w-auto p-6 border-r border-neutral-base"
      id="sidebar-candidates"
    >
      <div class="c-sidebar__state mb-10">
        <h3 class="text-primary-base text-xl font-bold mb-3">Estado</h3>

        <label for="estados" class="sr-only">Selecione um Estado</label>
        <select
          id="localeCandidates"
          name="localeCandidates"
          class="bg-neutral-light border-neutral-light sidebar py-3 px-5 text-neutral-baseDark text-sm rounded-full font-regular focus:ring-secondary-base focus:border-secondary-base block w-full"
        >
          <option
            v-if="currentLocale === 'br'"
            :value="currentLocale"
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
              locale.initials === currentLocale ? true : false
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
              <a
                href="#"
                class="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 flex justify-between"
              >
                <span>{{ role.name }}</span>
                <!-- <span v-if="dataStore.Role.currentRole === 'presidente'">{{ (role.id !== 'presidente') ? 0 : filterCountRole(role.id) }}</span>
                <span v-else-if="dataStore.Role.currentRole === 'deputado-distrital'">{{ (role.id !== 'deputado-distrital') ? 0 : filterCountRole(role.id) }}</span> -->
                <!-- <span></span> -->
              </a>
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
            v-on:click="selectParty(item.party)"
            class="px-4 py-2 mr-2 mb-2 rounded font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease"
            :class="item.party == currentParty ? 'text-primary-base bg-secondary-base' : 'text-black bg-neutral-light'"
            v-for="item in currentCandidates"
            :key="item.party"
          >
            {{ item.party }}
          </button>
        </div>
      </div>
      <!-- <div class="c-sidebar__rounds mb-10">
        <div class="flex justify-between items-center">
          <h3 class="text-primary-base text-xl font-bold mb-3">Turnos</h3>
        </div>
        <div>
          <select
            id="localeCandidates"
            name="localeCandidates"
            class="bg-neutral-light border-neutral-light sidebar py-3 px-5 text-neutral-baseDark text-sm rounded-full font-regular focus:ring-secondary-base focus:border-secondary-base block w-full"
          >
            <option
              v-for="item in currentCandidates"
              :key="item.round"
              :value="item.round"
            >
              {{ item.round }}
            </option>
          </select>
        </div>
      </div> -->
    </div>
  </nav>
</template>

<script lang="ts">
import useStore from "@/hooks/useStore";
import { computed, defineComponent, onMounted, reactive } from "vue";
import { watch } from "vue";
import * as roles from "../../services/mocks/filtersRoles.json";
import * as locales from "../../services/mocks/filtersLocales.json";
import { setCurrentParty, cleanCurrentParty } from "@/store/party";

export default defineComponent({
  data() {
    return {
      roleCandidates: "",
      localeCandidates: "",
      dataLocales: [],
      isActiveRole: true,
    };
  },
  setup() {
    const dataStore = useStore();
    const items = reactive({
      roles: roles.data,
      locales: locales.data,
    });

    let currentRole = computed(function () {
      return dataStore.Role.currentRole;
    });

    let currentCandidates = computed(function () {
      return dataStore.Candidates.currentCandidates.objects;
    });

    let currentLocale = computed(function () {
      return dataStore.Locale.currentLocale;
    });

    let currentParty = computed(function () {
      return dataStore.Party.currentParty;
    });

    watch(
      () => dataStore.Locale.currentLocale,
      () => dataStore.Role.currentRole
    );

    return {
      dataStore,
      currentRole,
      currentLocale,
      currentParty,
      items,
      currentCandidates
    };
  },
  methods: {
    selectParty(item: any) {
      setCurrentParty(item);
    },
    clearParty() {
      cleanCurrentParty();
    },
  },
});
</script>

<style></style>
