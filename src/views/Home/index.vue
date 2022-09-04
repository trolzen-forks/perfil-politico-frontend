<template>
  <div class="home">
    <div class="home__container">
      <section
        class="home__banner bg-primary-base p-5 flex"
      >
        <div class="container">

          <div class="home__banner-logo flex justify-center self-start">
            <router-link :to="{ name: 'Home' }">
              <img src="@/assets/logo.svg" alt="Perfil Político" />
            </router-link>
          </div>

          <div class="flex justify-center items-center h-4/5">
            <div>
              <div
                class="home__banner-content text-white font-bold uppercase"
              >
                <div
                  class="home__banner-content-emphasis flex items-center flex-col sm:flex-row mb-3"
                >
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
                  class="home__banner-content-action flex flex-col w-full mt-6"
                >
                  <FormSearchCandidate></FormSearchCandidate>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center text-white">
            <p class="">Por que usar o Perfil Político?</p>
            <span
              class="material-symbols-outlined animate__animated animate__bounce animate__infinite"
            >
              expand_more
            </span>
          </div>
        </div>
      </section>

      <section
        class="home__differentials bg-background-light sm:h-3-screen sm:relative"
      >
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

      <section class="home__about bg-background-light pt-20">
        <div
          class="home__about-content container px-5 sm:grid sm:grid-cols-9 sm:gap-16 py-20"
        >
          <div class="col-span-3 col-start-2 flex items-center justify-center">
            <IconPP></IconPP>
          </div>
          <div
            class="col-span-4 flex flex-col justify-center sm:items-start items-center container"
          >
            <h2
              class="text-primary-base uppercase font-bold sm:text-4xl sm:text-left text-center text-xl"
            >
              Sobre o Perfil Político
            </h2>
            <p
              class="text-text-light my-10 sm:text-2xl sm:text-left text-center text-base font-regular"
            >
              Perfil Político é uma plataforma baseada em dados abertos disponibilizados por órgãos como o Tribunal Superior Eleitoral e através de uma base de código aberta e colaborativa mantida pela Open Knowledge Brasil. A plataforma permite comparar as candidaturas e realizar perguntas sobre histórico e representatividade de forma abrangente, transparente e gratuita para dar mais poder ao eleitorado para escolher as candidaturas em que irá votar.
            </p>
            <router-link
              type="button"
              class="text-primary-base uppercase font-bold bg-secondary-base hover:bg-secondary-light font-medium rounded-full text-sm px-12 py-4 text-center mr-2 mb-2"
              :to="{ name: 'About' }"
            >
              Continuar lendo
            </router-link>
          </div>
        </div>
      </section>

      <section
        class="home__common-questions bg-background-light py-20"
        id="perguntas-frequentes"
      >
        <div class="container px-5">
          <h2
            class="text-primary-base uppercase font-bold sm:text-4xl text-center text-xl sm:mb-16 mb-5"
          >
            PERGUNTAS FREQUENTES
          </h2>
          <Accordion
            title="Quais candidatos posso analisar no Perfil Político?"
          >
            Você pode achar dados sobre todos os candidatos aos cargos de
            deputado federal, estadual e distrital, senador, governador e
            presidente nas eleições gerais de 2018.
          </Accordion>
          <Accordion title="Como faço para realizar uma busca?">
            Para fazer sua busca:
            <ol class="ml-8 mt-2 list-decimal">
              <li>
                Selecione um Cargo e o Estado (não se aplica quando a busca é de
                presidenciáveis);
              </li>
              <li>
                <i>Selecione uma pergunta…</i> no menu roxo (barra inferior da
                página);
              </li>
              <li>
                Você pode selecionar uma pergunta em seguida da outra para
                refinar sua busca;
              </li>
              <li>
                A qualquer momento você pode selecionar um partido para destacar
                dentre os candidatos da busca;
              </li>
              <li>
                Você pode clicar em um dos círculos e ver informações mais
                detalhadas do candidato ou da candidata que desejar;
              </li>
            </ol>
            Nossos parceiros do
            <a
              href="https://theintercept.com/brasil/"
              target="_blank"
              class="font-bold hover:underline"
              >The Intercept Brasil</a
            >
            explicaram
            <a
              href="https://theintercept.com/brasil/"
              target="_blank"
              class="font-bold hover:underline"
              >como a busca funciona em vídeo</a
            >.
          </Accordion>
          <Accordion title="Como utilizo a busca por nome?">
            Você pode buscar um candidato específico, no campo
            <i>Busque por nome</i>, selecionando o cargo antes de fazer essa
            busca. Essa funcionalidade não está disponível no Internet Explorer
            9 (ou mais antigo) e no Safari.
          </Accordion>
          <Accordion title="Quem são os criadores do Perfil Político?">
            O projeto faz parte do
            <i>Programa Ciência de Dados para Inovação Cívica</i> da
            <a
              href="https://theintercept.com/brasil/"
              target="_blank"
              class="font-bold hover:underline"
              >The Intercept Brasil</a
            >
            explicaram
            <a
              href="https://ok.org.br/"
              target="_blank"
              class="font-bold hover:underline"
              >Open Knowledge Brasil</a
            >. O Perfil Político também conta com a parceria do
            <a
              href="https://theintercept.com/brasil/"
              target="_blank"
              class="font-bold hover:underline"
              >The Intercept Brasil</a
            >
            e do
            <a
              href="https://brasil.io/home/"
              target="_blank"
              class="font-bold hover:underline"
              >Brasil.io</a
            >.
          </Accordion>
          <Accordion title="De onde são os dados do Perfil Político?">
            A fonte primária dos dados, ou seja, de onde eles foram retirados, é
            o TSE (Tribunal Superior Eleitoral). Você pode obter esses dados, já
            organizados, no
            <a
              href="https://brasil.io/home/"
              target="_blank"
              class="font-bold hover:underline"
              >Brasil.io</a
            >
            e no
            <a
              href="https://github.com/cuducos/raspadorlegislativo"
              target="_blank"
              class="font-bold hover:underline"
              >Raspador Legislativo</a
            >.
          </Accordion>
          <Accordion title="Quais dados são utilizados na plataforma?">
            A ficha dos candidatos reúne informações básicas como idade, sexo,
            cor/raça, escolaridade e ocupação, mas também dados sobre patrimônio
            declarado em todas as eleições disputadas, mudanças de partidos,
            histórico de candidaturas e de eleições ganhas.
          </Accordion>
          <Accordion
            title="Quando os dados foram coletados? Eles são atualizados com alguma periodicidade?"
          >
            Os dados do TSE foram coletados pelo Brasil.io no
            <a
              href="https://dadosabertos.tse.jus.br/"
              target="_blank"
              class="font-bold hover:underline"
              >Repositório de Dados Eleitorais</a
            >
            na semana de 20 de agosto, logo após o TSE oficializar as
            candidaturas para as eleições gerais de 2018. Os dados da Câmara dos
            Deputados e do Senado Federal foram coletados no início de setembro.
            Depois dessas coletas iniciais o site ainda não passou por nenhuma
            atualização nos dados.
          </Accordion>
          <Accordion
            title="Encontrei dados na plataforma que estão diferentes dos dados encontrados no site do TSE, por quê?"
          >
            O TSE oferece duas formas para os cidadãos acessarem os dados. Um é
            um site navegável para humanos, o
            <a
              href="https://divulgacandcontas.tse.jus.br/divulga/#/"
              target="_blank"
              class="font-bold hover:underline"
              >Divulgação de Candidaturas e Contas Eleitorais</a
            >, outro é o
            <a
              href="https://dadosabertos.tse.jus.br/"
              target="_blank"
              class="font-bold hover:underline"
              >Repositório de Dados Eleitorais</a
            >, que oferece dados em massa, legíveis por máquinas. Em raros casos
            o site diverge do repositório de dados, então existem chances da
            diferença ser uma inconsistência do próprio TSE ou uma atualização
            no repositório de dados que ainda não foi incorporada ao
            <span class="text-primary-base">Perfil Político</span>.
          </Accordion>
          <Accordion title="Como a plataforma é financiada?">
            O projeto foi desenvolvido com recursos da
            <a
              href="https://ok.org.br/"
              target="_blank"
              class="font-bold hover:underline"
              >Open Knowledge Brasil</a
            >. O
            <a
              href="https://theintercept.com/brasil/"
              target="_blank"
              class="font-bold hover:underline"
              >The Intercept Brasil</a
            >
            apoiou o projeto cobrindo os custos de infraestrutura tecnológica
            para armazenamento dos dados. Para que a equipe do projeto possa
            continuar aperfeiçoando esse e outros projetos do
            <i>Programa de Ciência de Dados para Inovação Cívica</i>, dependemos
            das contribuições dos nossos usuários, que podem doar pelo site
            <a
              href="https://apoia.se/serenata"
              target="_blank"
              class="font-bold hover:underline"
              >apoia.se/serenata</a
            >.
          </Accordion>
          <Accordion title="Qual o objetivo da ferramenta?">
            <span class="text-primary-base">Perfil Político</span> é uma
            plataforma para comparar e conhecer o histórico dos milhares de
            candidatos às eleições. A ferramenta ajuda as pessoas a selecionar
            perfis de candidatos: você pode filtrar por novatos e por velhos
            políticos. Pode ver como o seu estado está em termos de
            representatividade de gênero e raça – e se as candidaturas, de fato,
            representam você. A ficha dos candidatos reúne informações básicas
            como idade, sexo, cor/raça, escolaridade e ocupação, mas também
            dados sobre patrimônio declarado em todas as eleições disputadas,
            mudanças de partidos, histórico de candidaturas e de eleições
            ganhas.
          </Accordion>
          <Accordion title="É código aberto?">
            Sim! Temos dois repositórios com o código que faz o
            <span class="text-primary-base">Perfil Político</span> funcionar. Um
            para a
            <a
              href="https://github.com/okfn-brasil/perfil-politico"
              target="_blank"
              class="font-bold hover:underline"
              >API</a
            >
            que é em Python, e outro para a
            <a
              href="https://github.com/okfn-brasil/perfil-politico-frontend/"
              target="_blank"
              class="font-bold hover:underline"
              >interface</a
            >
            que é JavaScript, HTML e CSS.
          </Accordion>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Accordion from "./Accordion.vue";
import FormSearchCandidate from "./FormSearchCandidate.vue";
import IconPP from "../../components/IconPP.vue";

export default {
  components: {
    Footer,
    Accordion,
    FormSearchCandidate,
    IconPP,
  },
};
</script>

<style lang="postcss">
  .home__banner {
    @apply bg-no-repeat bg-center;
    background-image: url('../../assets/icons/mapa-brasil-bolhas.svg');
    min-height: 769px;
  }
  .home__banner::after {
    @apply bg-primary-base opacity-25;
  }
</style>