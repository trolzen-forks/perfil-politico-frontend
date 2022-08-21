<template>
  <div class="home">
    <div class="home__container">
      <section
        class="home__banner bg-primary-base text-center sm:h-7-screen h-9-screen flex flex-col items-center sm:justify-start justify-between p-5"
      >
        <div class="home__banner-logo">
          <img src="@/assets/logo.svg" alt="Perfil Político" />
        </div>

        <div
          class="home__banner-content sm:flex flex-col justify-center sm:h-5-screen h-auto items-center text-white font-bold uppercase"
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
                    class="bg-background-purpleLight text-white text-sm rounded-full font-regular placeholder:text-white placeholder-white focus:ring-secondary-base focus:border-secondary-base focus:bg-background-purpleLight block w-full py-3 pl-10 pr-5"
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
        <div class="container sm:relative px-5">
          <div
            class="home__differentials_content sm:absolute bg-white text-center -top-16 p-10 rounded-3xl"
          >
            <h2
              class="home__differentials_title text-primary-base uppercase font-bold sm:text-4xl text-center text-xl"
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

      <section class="home__about bg-background-light sm:py-32 py-20">
        <div class="home__about-content container px-5 sm:grid sm:grid-cols-9 sm:gap-16">
          <div class="col-span-3 col-start-2 flex items-center justify-center">
            <img src="@/assets/icons/icon-sobre-perfil-politico.svg" class="sm:w-full w-40 mb-5" alt="Sobre o Perfil Político" />
          </div>
          <div class="col-span-4 flex flex-col justify-center sm:items-start items-center container">
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
        <div class="container px-5">
          <h2
            class="text-primary-base uppercase font-bold sm:text-4xl text-center text-xl sm:mb-16 mb-5"
          >
            PERGUNTAS FREQUENTES
          </h2>
          <Accordion title="Quais candidatos posso analisar no Perfil Político?">
            Você pode achar dados sobre todos os candidatos aos cargos de deputado federal, estadual e distrital, senador, governador e presidente nas eleições gerais de 2018.
          </Accordion>
          <Accordion title="Como faço para realizar uma busca?">
            Para fazer sua busca:
            <ol>
              <li>Selecione um Cargo e o Estado (não se aplica quando a busca é de presidenciáveis);</li>
              <li>Selecione uma pergunta… no menu roxo (barra inferior da página);</li>
              <li>Você pode selecionar uma pergunta em seguida da outra para refinar sua busca;</li>
              <li>A qualquer momento você pode selecionar um partido para destacar dentre os candidatos da busca;</li>
              <li>Você pode clicar em um dos círculos e ver informações mais detalhadas do candidato ou da candidata que desejar;</li>
              <li>Nossos parceiros do The Intercept Brasil explicaram como a busca funciona em vídeo.</li>
            </ol>
          </Accordion>
          <Accordion title="Como utilizo a busca por nome?">
            Você pode buscar um candidato específico, no campo <i>Busque por nome</i>, selecionando o cargo antes de fazer essa busca. Essa funcionalidade não está disponível no Internet Explorer 9 (ou mais antigo) e no Safari.
          </Accordion>
          <Accordion title="Quem são os criadores do Perfil Político?">
            O projeto faz parte do <i>Programa Ciência de Dados para Inovação Cívica</i> da Open Knowledge Brasil. O Perfil Político também conta com a parceria do The Intercept Brasil e do Brasil.io.
          </Accordion>
          <Accordion title="De onde são os dados do Perfil Político?">
            A fonte primária dos dados, ou seja, de onde eles foram retirados, é o TSE (Tribunal Superior Eleitoral). Você pode obter esses dados, já organizados, no Brasil.io e no Raspador Legislativo.
          </Accordion>
          <Accordion title="Quais dados são utilizados na plataforma?">
            A ficha dos candidatos reúne informações básicas como idade, sexo, cor/raça, escolaridade e ocupação, mas também dados sobre patrimônio declarado em todas as eleições disputadas, mudanças de partidos, histórico de candidaturas e de eleições ganhas.
          </Accordion>
          <Accordion title="Quando os dados foram coletados? Eles são atualizados com alguma periodicidade?">
            Os dados do TSE foram coletados pelo Brasil.io no Repositório de Dados Eleitorais na semana de 20 de agosto, logo após o TSE oficializar as candidaturas para as eleições gerais de 2018. Os dados da Câmara dos Deputados e do Senado Federal foram coletados no início de setembro. Depois dessas coletas iniciais o site ainda não passou por nenhuma atualização nos dados.
          </Accordion>
          <Accordion title="Encontrei dados na plataforma que estão diferentes dos dados encontrados no site do TSE, por quê?">
            O TSE oferece duas formas para os cidadãos acessarem os dados. Um é um site navegável para humanos, o Divulgação de Candidaturas e Contas Eleitorais, outro é o Repositório de Dados Eleitorais, que oferece dados em massa, legíveis por máquinas. Em raros casos o site diverge do repositório de dados, então existem chances da diferença ser uma inconsistência do próprio TSE ou uma atualização no repositório de dados que ainda não foi incorporada ao Perfil Político.
          </Accordion>
          <Accordion title="Como a plataforma é financiada?">
            O projeto foi desenvolvido com recursos da Open Knowledge Brasil. O The Intercept Brasil apoiou o projeto cobrindo os custos de infraestrutura tecnológica para armazenamento dos dados. Para que a equipe do projeto possa continuar aperfeiçoando esse e outros projetos do Programa de Ciência de Dados para Inovação Cívica, dependemos das contribuições dos nossos usuários, que podem doar pelo site apoia.se/serenata.
          </Accordion>
          <Accordion title="Qual o objetivo da ferramenta?">
            Perfil Político é uma plataforma para comparar e conhecer o histórico dos milhares de candidatos às eleições. A ferramenta ajuda as pessoas a selecionar perfis de candidatos: você pode filtrar por novatos e por velhos políticos. Pode ver como o seu estado está em termos de representatividade de gênero e raça – e se as candidaturas, de fato, representam você.
            A ficha dos candidatos reúne informações básicas como idade, sexo, cor/raça, escolaridade e ocupação, mas também dados sobre patrimônio declarado em todas as eleições disputadas, mudanças de partidos, histórico de candidaturas e de eleições ganhas.
          </Accordion>
          <Accordion title="É código aberto?">
            Sim! Temos dois repositórios com o código que faz o Perfil Político funcionar. Um para a API que é em Python, e outro para a interface que é JavaScript, HTML e CSS.
          </Accordion>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Accordion from "@/components/Accordion.vue";

@Options({
  components: {
    Footer,
    Accordion
  },
})
export default class Home extends Vue {}
</script>

<style>
  
</style>