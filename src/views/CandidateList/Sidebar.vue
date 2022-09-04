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
            v-model="localeCandidates"
            class="bg-background-purpleLight py-3 px-5 text-white text-sm rounded-full font-regular focus:ring-secondary-base focus:border-secondary-base block w-full"
            required
          >
            <option selected disabled value="">Localidade</option>
            <option v-for="locale in data.locales" :key="locale.initials" :value="locale.initials">
              {{ !locale ? "Não foi possível carregar as informações" : locale.name }}
            </option>
          </select>
      </div>

      <div class="c-sidebar__role mb-10">
        <div class="flex justify-between items-center">
          <h3 class="text-primary-base text-xl font-bold mb-3">Cargo</h3>
          <a
            href="#"
            class="text-neutral-baseMedium text-sm underline hover:no-underline"
            >Limpar</a
          >
        </div>
        <div>
          <ul class="py-1" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 flex justify-between"
              >
                <span>{{ role }}</span>
                <span>{{ countRole }}</span>
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
          >
            {{ party }} ({{ countParty }})
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  props: ["party", "countParty", "role", "countRole"]
};
</script>

<style></style>
