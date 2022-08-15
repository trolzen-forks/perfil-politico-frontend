<template>
  <div class="home">
    <div class="home__container">
      <section
        class="home__banner bg-primary-base text-center h-9-screen flex flex-col items-center justify-between p-5"
      >
        <div class="home__banner-logo">
          <img src="@/assets/logo.svg" alt="Perfil Político" />
        </div>

        <div
          class="home__banner-content sm:flex flex-col justify-center h-auto items-center text-white font-bold uppercase"
        >
          <div class="home__banner-content-emphasis flex items-center flex-col sm:flex-row mb-6">
            <div class="sm:pr-5 mb-4">
              <img
                src="@/assets/icons/icon-perfil-politico.svg"
                alt="Ícone Perfil Político"
              />
            </div>
            <div>
              <h1
                class="home__banner-content-emphasis_title text-white text-xl sm:text-4xl uppercase sm:text-left"
              >
                Conheça o Perfil Político das <br />
                <span class="text-secondary-base"
                  >pessoas candidatas em 2022</span
                >
              </h1>
            </div>
          </div>

          <div
            class="home__banner-content-action flex flex-col self-start w-full mt-6"
          >
            <h3
              class="home__banner-content-action_subtitle text-base text-left mb-3"
            >
              Tem uma pessoa candidata em mente?
            </h3>
            <div class="home__banner-content-action_form sm:flex flex-grow">
              <div class="flex-auto mr-2">
                <label class="relative block">
                  <span class="sr-only">Digite o nome da pessoa candidata</span>
                  <span
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                  >
                    <span class="material-symbols-outlined">search</span>
                  </span>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-background-purpleLight text-white text-sm rounded-full font-regular placeholder:text-white placeholder-white focus:ring-secondary-base focus:border-secondary-base block w-full py-3 pl-10 pr-5"
                    placeholder="Digite o nome da pessoa candidata"
                    required
                  />
                </label>
              </div>
              <button
                type="button"
                class="flex-none text-primary-base sm:w-auto sm:mt-0 xs:block w-full mt-4 uppercase font-bold bg-secondary-base font-medium rounded-full text-sm px-5 py-3 text-center mr-2 mb-2"
              >
                Buscar
              </button>
            </div>

            <h3 class="home__banner_subtitle text-left mt-6 mb-3">
              Não tem nenhuma pessoa candidata em mente?
            </h3>
            <div class="sm:flex block">
              <div class="flex-auto mr-2">
                <span class="sr-only">Cargo</span>
                <select
                  id="countries"
                  class="bg-background-purpleLight py-3 px-5 text-white text-sm rounded-full font-regular focus:ring-secondary-base focus:border-secondary-base block w-full"
                  required
                >
                  <option selected>Cargo</option>
                  <option value="US">Presidente</option>
                  <option value="CA">Senador</option>
                  <option value="FR">Governador</option>
                  <option value="DE">Deputado Federal</option>
                  <option value="DE">Deputado Estadual</option>
                </select>
              </div>
              <div>
                <button
                  type="button"
                  class="flex-none sm:w-auto sm:mt-0 xs:block w-full mt-4 text-primary-base uppercase font-bold bg-secondary-base hover:bg-secondary-light focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 text-center mr-2 mb-2"
                >
                  Buscar candidato
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center text-white">
          <p>Como funciona?</p>
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
      </section>

      <section class="home__differentials bg-background-light sm:h-4-screen sm:relative">
        <div class="container sm:relative">
          <div
            class="home__differentials_content sm:absolute bg-white text-center -top-16 p-10 rounded-3xl"
          >
            <h2
              class="home__differentials_title text-primary-base uppercase font-bold sm:text-4xl sm:text-left text-center text-xl"
            >
              Diferenciais do Perfil Político
            </h2>
            <div class="mt-16 block sm:grid grid-flow-col gap-36">
              <div class="flex flex-col justify-start items-center">
                <img
                  src="@/assets/icons/icon-historico.svg"
                  alt="Histórico do candidato"
                  class="w-32"
                />
                <h4 class="text-primary-base text-xl font-bold my-3">
                  Histórico do candidato
                </h4>
                <p class="text-text-light font-regular text-base">
                  Comparar e conhecer o histórico dos milhares de candidatos às
                  eleições
                </p>
              </div>
              <div class="flex flex-col justify-start items-center">
                <img
                  src="@/assets/icons/icon-patrimonio.svg"
                  alt="Patrimônio do candidato"
                  class="w-32"
                />
                <h4 class="text-primary-base text-xl font-bold my-3">
                  Patrimônio do candidato
                </h4>
                <p class="text-text-light font-regular text-base">
                  A ficha dos candidatos reúne dados sobre patrimônio declarado
                  de acordo com sua vida política de acordo com o tempo
                </p>
              </div>
              <div class="flex flex-col justify-start items-center">
                <img
                  src="@/assets/icons/icon-representatividade.svg"
                  alt="Análise de representatividade"
                  class="w-32"
                />
                <h4 class="text-primary-base text-xl font-bold my-3">
                  Análise de representatividade
                </h4>
                <p class="text-text-light font-regular text-base">
                  Ver como o seu estado está em termos de representatividade de
                  gênero e raça – e se as candidaturas, de fato, representam
                  você
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="home__about bg-background-light py-32">
        <div class="home__about-content container px-5 sm:grid sm:grid-cols-9 sm:gap-16">
          <div class="col-span-3 col-start-2 ">
            <img src="@/assets/icons/icon-sobre-perfil-politico.svg" class="sm:w-full w-40" alt="" />
          </div>
          <div class="col-span-4 flex flex-col justify-center items-start container">
            <h2 class="text-primary-base uppercase font-bold sm:text-4xl sm:text-left text-center text-xl">
              Sobre o Perfil Político
            </h2>
            <p class="text-text-light my-10 sm:text-2xl sm:text-left text-center text-base font-regular">
              Perfil Político é uma plataforma para comparar e conhecer o
              histórico dos milhares de candidatos às eleições. A ferramenta
              ajuda as pessoas a selecionar perfis de candidatos: você pode
              filtrar por novatos e por velhos políticos. Pode ver como o seu
              estado está em termos de representatividade de gênero e raça – e
              se as candidaturas, de fato, representam você.
            </p>
            <button
              type="button"
              class="text-primary-base uppercase font-bold bg-secondary-base hover:bg-secondary-light font-medium rounded-full text-sm px-12 py-4 text-center mr-2 mb-2"
            >
              Continuar lendo
            </button>
          </div>
        </div>
      </section>

      <section class="home__common-questions bg-background-light py-20">
        <div class="container">
          <h2
            class="text-primary-base uppercase font-bold text-4xl text-center mb-16"
          >
            PERGUNTAS FREQUENTES
          </h2>
          <div id="accordion-collapse" data-accordion="collapse">
            <div class="mb-4 rounded-xl shadow-md">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="bg-background-white flex items-center justify-between w-full p-5 font-regular text-left text-xl border border-gray-200 rounded-t-xl"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span
                    >Quais candidatos posso analisar no Perfil Político?</span
                  >
                  <span
                  data-accordion-icon
                    class="material-symbols-outlined w-6 h-6 rotate-180 shrink-0"
                  >
                    expand_more
                  </span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                class=""
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div
                  class="p-5 font-light border border-gray-200 bg-background-white rounded-b-xl"
                >
                  <p class="mb-2 text-gray-500">
                    Você pode achar dados sobre todos os candidatos aos cargos
                    de deputado federal, estadual e distrital, senador,
                    governador e presidente nas eleições gerais de 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Footer
  },
})
export default class Home extends Vue {}
</script>

<style>
  
</style>