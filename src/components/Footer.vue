<template>
  <footer class="c-footer bg-primary-base p-10 bottom-0 static">
    <div
      class="c-footer__content container bg-background-purpleLight flex flex-col sm:flex-row justify-center items-center p-8 text-white rounded-lg"
    >
      <div class="c-footer__content-logo w-1/5">
        <img src="@/assets/logo.svg" alt="Perfil Político" class="w-full" />
      </div>
      <div
        class="c-footer__content-description mx-14 my-5 sm:my-0 text-left text-base font-regular"
      >
        <p>
          O Perfil Político é um projeto que permite ao eleitorado comparar os
          perfis das candidaturas às eleições gerais do Brasil, para saber quem
          realmente o representa.
        </p>
      </div>
      <div
        class="c-footer__content-link-project flex w-full sm:w-1/6 items-center justify-center bg-opacity-10 bg-white p-3 rounded-lg"
      >
        <img src="@/assets/icons/icon-github.svg" alt="Github" />
        <span
          ><a
            href="https://github.com/okfn-brasil/perfil-politico-frontend"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-2 hover:underline"
            >Ver Github</a
          ></span
        >
      </div>
    </div>
    <div
      class="c-footer__content-actions container flex flex-col sm:flex-row sm:justify-between sm:items-center items-start text-white mt-10"
    >
      <div class="flex flex-col sm:flex-row sm:items-center mb-5">
        <h3 class="font-bold text-xl mr-3 sm:mb-0 mb-4">Link Úteis:</h3>
        <ul class="flex flex-row flex-wrap font-regular text-xs">
          <li class="sm:mr-3 mr-5 sm:mb-0 mb-5 hover:underline">
            <router-link :to="{ name: 'About' }">Sobre o projeto</router-link>
          </li>
          <li class="sm:mr-3 sm:mb-0 mb-5 hover:underline">
            <router-link :to="{ name: 'Home' }"
              >Perguntas frequentes</router-link
            >
          </li>
          <li class="sm:mr-3 sm:mb-0 mb-5 hover:underline">
            <a
              href="https://apoia.se/serenata"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-2 text-white hover:underline"
              >Apoie o projeto</a
            >
          </li>
        </ul>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center items-start">
        <h3 class="font-bold text-xl mr-3 sm:mb-0 mb-4">Realização:</h3>
        <a href="https://ok.org.br/" target="_blank" rel="noopener noreferrer">
          <img
            src="@/assets/images/logo-open-knowledge.svg"
            alt="Open Knowledge"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>
