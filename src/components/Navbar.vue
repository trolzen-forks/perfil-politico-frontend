<template>
  <nav class="bg-primary-base fixed w-full z-20 top-0 left-0 sm:h-20 shadow-md">
    <div class="flex flex-wrap justify-between items-center mx-auto">
      <div
        class="sm:bg-black flex-none sm:bg-opacity-20 sm:w-1/4 w-2/4 sm:h-20 py-5 px-5 flex justify-center"
      >
        <img src="@/assets/logo.svg" alt="Perfil Político" />
      </div>
      <div class="flex sm:flex-none md:order-2 px-2 sm:px-6 py-2.5">
        <div
          class="c-footer__content-link-project flex items-center p-3 rounded-lg"
        >
          <img src="@/assets/icons/icon-github.svg" alt="Github" />
          <span
            ><a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-2 text-white"
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
            placeholder="Pesquisar por:"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {};
</script>
