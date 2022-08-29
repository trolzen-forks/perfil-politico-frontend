<template>
<div class="flex flex-col min-h-screen">
  <Navbar></Navbar>
  <div class="about flex-grow">
    <div class="sm:grid grid-cols-8 gap-5 sm:mt-44 mt-24 px-5">
      <div class="about__image col-span-2 sm:w-4/5 w-32 mx-auto">
        <img
          src="@/assets/icons/icon-sobre-perfil-politico.svg"
          alt="Perfil Político"
        />
      </div>
      <div class="about__content col-span-5 mt-10 text-center sm:text-left">
        <h1 class="text-primary-base uppercase font-bold sm:text-4xl text-xl">
          SOBRE
        </h1>
        <div class="font-regular text-black sm:text-lg text-base mb-10 mt-5">
          <p>
            Perfil Político é uma plataforma para comparar e conhecer o
            histórico dos milhares de candidatos às eleições. A ferramenta ajuda
            as pessoas a selecionar perfis de candidatos: você pode filtrar por
            novatos e por velhos políticos. Pode ver como o seu estado está em
            termos de representatividade de gênero e raça – e se as
            candidaturas, de fato, representam você.
          </p>
          <p>
            A ficha dos candidatos reúne informações básicas como idade, sexo,
            escolaridade e ocupação, mas também dados sobre patrimônio declarado
            em todas as eleições disputadas, mudanças de partidos, histórico de
            candidaturas e de eleições ganhas.
          </p>
          <p>
            São milhares de candidatos, dados e vários filtros para dar mais
            camadas de informações ao eleitor que ainda está por decidir quem
            merece o seu voto. Perfil Político é ciência de dados e tecnologia
            para as eleições. Só que do lado do eleitor.
          </p>
        </div>
        <h2 class="text-primary-base uppercase font-bold sm:text-3xl text-xl">
          USO DOS DADOS
        </h2>
        <div class="font-regular text-black sm:text-lg text-base mb-10 mt-5">
          <p>
            O Perfil Político trabalha com dados públicos e oficiais de diversas
            fontes, como o TSE e a Câmara dos Deputados. Porém, pelo volume de
            informação e falta de padrão na forma como os dados das diferentes
            fontes são estruturados, você pode se deparar com alguma
            inconsistência.
          </p>
          <p>
            Se você encontrar algo estranho, envie um e-mail para
            contato@serenata.ai. Precisamos de seu feeback para continuar
            aprimorando a ferramenta e para relatar aos órgãos públicos quando
            os seus bancos de dados trouxerem informações erradas ou
            desatualizadas.
          </p>
        </div>
        <h2 class="text-primary-base uppercase font-bold sm:text-3xl text-xl">
          OPEN KNOWLEDGE
        </h2>
        <div class="font-regular text-black sm:text-lg text-base mb-20 mt-5">
          <p>
            A Open Knowledge Brasil é uma organização social que desenvolve
            ferramentas cívicas, oferece treinamento em produção e uso de dados
            abertos e promove o conhecimento livre para tornar a relação entre
            governo e sociedade mais transparente e incentivar uma participação
            política mais efetiva.
          </p>
          <p>
            Durante a última década, a Open Knowledge tem desempenhado um
            papel-chave no fortalecimento do ecossistema de dados abertos e
            transparência governamental. Seu portfólio inclui: CKAN, o software
            livre para catálogo de dados abertos mais bem sucedido mundialmente;
            Escola de Dados, uma rede global comprometida com o avanço do uso de
            dados para resolver problemas reais em prol de sociedades mais
            conscientes, sustentáveis e justas; Índice Global de Dados Abertos,
            metodologia de avaliação que fornece uma visão abrangente do estado
            da publicação de dados governamentais abertos no mundo; Serenata de
            Amor, um dos mais bem-sucedidos projetos brasileiros de uso de dados
            governamentais para controle social dos gastos públicos.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: {
    Footer,
    Navbar,
  },
})
export default class Home extends Vue {}
</script>
