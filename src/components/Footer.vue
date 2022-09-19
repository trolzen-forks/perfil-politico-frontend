<template>
  <footer class="c-footer bg-primary-base p-10 bottom-0 static">
    <div
      class="c-footer__content container bg-background-purpleLight flex flex-col xl:flex-row justify-center items-center p-8 text-white rounded-lg"
    >
      <div class="c-footer__content-logo xl:w-1/5">
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/logo.svg" alt="Perfil Político" class="w-full" />
        </router-link>
      </div>
      <div
        class="c-footer__content-description mx-14 my-5 xl:my-0 text-left text-base font-regular"
      >
        <p>
          O Perfil Político é um projeto que permite ao eleitorado comparar os
          perfis das candidaturas às eleições gerais do Brasil, para saber quem
          realmente o representa.
        </p>
      </div>
      <div
        class="c-footer__content-link-project flex w-full xl:w-1/6 items-center justify-center bg-opacity-10 bg-white p-3 rounded-lg"
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
      class="c-footer__content-actions container flex flex-col lg:flex-row lg:justify-between lg:items-center items-start text-white mt-10"
    >
      <div class="flex flex-col mb-5">
        <div class="mb-5">
          <h3 class="font-bold text-xl mr-3 lg:mb-0 mb-4">Link Úteis:</h3>
        </div>
        <ul class="flex flex-row flex-wrap items-center font-light text-base">
          <li class="lg:mr-5 mr-5 lg:mb-0 mb-5 hover:underline">
            <router-link :to="{ name: 'About' }">Sobre o projeto</router-link>
          </li>
          <li class="lg:mr-5 lg:mb-0 mb-5 hover:underline">
            <router-link :to="'/#perguntas-frequentes'"
              >Perguntas frequentes</router-link
            >
          </li>
          <li class="lg:mr-5 lg:mb-0 mb-5 hover:underline">
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
      <div class="flex flex-col mb-5">
        <div class="mb-5">
          <h3 class="font-bold text-xl mr-3 sm:mb-0 mb-4">Parceiros:</h3>
        </div>
        <div class="flex flex-row flex-wrap items-center">
          <a
            href="https://brasil.io/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/images/logo-brasil-io.svg" alt="Brasil.io" />
          </a>
        </div>
      </div>
      <div class="flex flex-col items-start">
        <div class="mb-5">
          <h3 class="font-bold text-xl mr-3 sm:mb-0 mb-4">Realização:</h3>
        </div>
        <div class="flex flex-row flex-wrap items-center font-regular text-xs">
          <a
            href="https://ok.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="@/assets/images/logo-open-knowledge.svg"
              alt="Open Knowledge"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>
