<template>
  <nav class="c-sidebar sm:w-1/4 w-2/4 sticky" aria-label="Sidebar">
    <div class="overflow-y-auto p-6 border-r border-neutral-base">
      <div class="c-sidebar__state mb-10">
        <h3 class="text-primary-base text-xl font-bold mb-3">Estado</h3>

        <label for="countries" class="sr-only">Selecione um Estado</label>
        <select
          id="countries"
          class="bg-neutral-light border border-neutral-light text-neutral-baseDark text-base rounded-lg focus:ring-secondary-base focus:border-secondary-base block w-full p-4"
        >
          <option selected>Selecione aqui</option>
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="ES">Espírito Santo</option>
          <option value="MG">Minas Gerais</option>
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
                <span>Presidente</span>
                <span>10</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 flex justify-between"
              >
                <span>Governador</span>
                <span>10</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 flex justify-between"
              >
                <span>Senador</span>
                <span>10</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 flex justify-between"
              >
                <span>Deputado Distrital</span>
                <span>10</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 flex justify-between"
              >
                <span>Deputado Estadual</span>
                <span>10</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 flex justify-between"
              >
                <span>Deputado Federal</span>
                <span>10</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="c-sidebar__state mb-10">
        <h3 class="text-primary-base text-xl font-bold mb-3">Partidos</h3>
         <div class="inline-flex flex-wrap">
            <span
               class="px-4 py-2 mr-2 mb-2 rounded text-black bg-neutral-light font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease">
               Partido A (10)
            </span>
            <span
               class="px-4 py-2 mr-2 mb-2 rounded text-black bg-neutral-light font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease">
               PB (5)
            </span>
            <span
               class="px-4 py-2 mr-2 mb-2 rounded text-black bg-neutral-light font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease">
               Partido C (9)
            </span>
            <span
               class="px-4 py-2 mr-2 mb-2 rounded text-black bg-neutral-light font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease">
               Partido D (13)
            </span>
            <span
               class="px-4 py-2 mr-2 mb-2 rounded text-black bg-neutral-light font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease">
               Partido E (20)
            </span>
            <span
               class="px-4 py-2 mr-2 mb-2 rounded text-black bg-neutral-light font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease">
               PC (9)
            </span>
            <span
               class="px-4 py-2 mr-2 mb-2 rounded text-black bg-neutral-light font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease">
               Partido D (13)
            </span>
            <span
               class="px-4 py-2 mr-2 mb-2 rounded text-black bg-neutral-light font-light text-xs flex align-center w-max cursor-pointer actived:bg-secondary-base hover:bg-secondary-base hover:text-primary-base transition duration-300 ease">
               PE (20)
            </span>
         </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
