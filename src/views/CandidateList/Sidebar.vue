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
            v-for="(locale, index) in items.locales"
            :key="index"
            :value="locale.initials"
            v-on:click="selectItemLocale(index)"
            :selected="locale.initials == dataStore.Locale.currentLocale ? true : false"
          >
            {{
              locale.name
            }}
          </option>
        </select>
      </div>

      <div class="c-sidebar__role mb-10">
        <div class="flex justify-between items-center">
          <h3 class="text-primary-base text-xl font-bold mb-3">Cargo</h3>
        </div>
        <div>
          <ul class="py-1" aria-labelledby="user-menu-button">
            <li v-for="role in items.roles" :key="role.id" :class="role.id === dataStore.Role.currentRole ? 'border-l-8 border-primary-base bg-gray-100' : 'border-l-4 border-transparent'">
              <a
                href="#"
                class="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 flex justify-between"
              >
                <span>{{ role.name }}</span>
                <span>{{ role.id.length }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="c-sidebar__state mb-10">
        <div class="flex justify-between items-center">
          <h3 class="text-primary-base text-xl font-bold mb-3">Partidos</h3>
          <a
            href="#"
            class="text-neutral-baseMedium text-sm underline hover:no-underline"
            >Limpar</a
          >
        </div>
        <div class="inline-flex flex-wrap">
          <span
            class="px-4 py-2 mr-2 mb-2 rounded text-black bg-neutral-light font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease"
            v-for="party in dataParty" :key="party"
          >
            {{ party }} ({{party.length}})
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import useStore from "@/hooks/useStore";
import { defineComponent, reactive, ref } from "vue";
import { watch } from "vue";
import * as roles from "../../services/mocks/filtersRoles.json";
import * as locales from "../../services/mocks/filtersLocales.json";

export default defineComponent({
  props: ["party", "countParty", "role", "countRole"],
  data() {
    return {
      location: false,
      roleCandidates: "",
      localeCandidates: "",
      dataLocales: [],
      isActiveRole: true
    };
  },
  setup() {
    const selectedItemLocale = ref(0)
    const selectedItemRole = ref(0)
    const dataStore = useStore();
    const dataParty: any[] = [];
    let isActiveLocale = false;
    const state = reactive({
      hasError: false,
      isLoading: false,
    });
    const items = reactive({
      roles: roles.data,
      locales: locales.data,
    });

    const selectItemLocale = (i: number) => {
      selectedItemLocale.value = i
      items.locales.forEach((item, index) => {
        return (isActiveLocale = item == items.locales[index])
      })
      return selectedItemLocale
    }

    const selectItemRole = (i: number) => {
      selectedItemRole.value = i
      items.roles.forEach((item, index) => {
        return (isActiveLocale = item == items.roles[index])
      })
      return selectedItemRole
    }


    dataStore.Candidates.currentInfosCadidates.forEach((i: any) => {
      dataParty.push(i.party_abbreviation)
    })

    dataStore.Candidates.currentInfosCadidates.forEach((i: any) => {
      dataParty.push(i.party_abbreviation)
    })

    watch(
      () => dataStore.Locale.currentLocale,
      () => dataStore.Role.currentRole
    );

    return {
      state,
      dataStore,
      items,
      selectItemLocale,
      selectItemRole,
      dataParty
    };
  },
});
</script>

<style></style>
