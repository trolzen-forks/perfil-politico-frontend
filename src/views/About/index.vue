<template>
  <div class="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <div class="about flex-grow">
      <div class="sm:grid grid-cols-8 gap-5 sm:mt-44 mt-24 px-5">
        <div class="about__image col-span-2 sm:w-4/5 w-32 mx-auto">
          <IconPP></IconPP>
        </div>
        <div class="about__content col-span-5 mt-10 text-center sm:text-left">
          <h1 class="text-primary-base uppercase font-bold sm:text-4xl text-xl">
            SOBRE
          </h1>
          <div class="font-regular text-black sm:text-lg text-base mb-10 mt-5">
            <p>
              O Perfil Político é uma plataforma para comparar e conhecer o
              histórico das milhares de candidaturas às eleições. A ferramenta
              ajuda o eleitorado a selecionar as pessoas candidatas pelos seus
              perfis: você pode filtrar por pessoas novas e antigas na política.
              Pode ver como o seu estado está em termos de representatividade de
              gênero e cor/raça – e se as candidaturas, de fato, representam
              você.
            </p>
            <p>
              A ficha das pessoas candidatas reúne informações básicas como
              idade, gênero, escolaridade e ocupação, mas também dados sobre
              patrimônio declarado em todas as eleições disputadas, mudanças de
              partidos, histórico de candidaturas e de eleições ganhas.
            </p>
            <p>
              São milhares de candidaturas, dados e vários filtros para dar mais
              camadas de informações ao eleitorado que ainda está por decidir
              quem merece o seu voto. Perfil Político é ciência de dados e
              tecnologia para as eleições. Só que do lado de quem vota.
            </p>
          </div>
          <h2 class="text-primary-base uppercase font-bold sm:text-3xl text-xl">
            USO DOS DADOS
          </h2>
          <div class="font-regular text-black sm:text-lg text-base mb-10 mt-5">
            <p>
              O Perfil Político trabalha com dados públicos e oficiais de
              diversas fontes, como o TSE e a Câmara dos Deputados. Porém, pelo
              volume de informação e a falta de padrão na forma como os dados
              das diferentes fontes são estruturados, você pode se deparar com
              alguma inconsistência.
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
              A OKBR, também conhecida como Rede pelo Conhecimento Livre, é uma
              organização da sociedade civil sem fins lucrativos e apartidária
              que atua no país desde 2013. Desenvolvemos e incentivamos o uso de
              tecnologias cívicas e de dados abertos, realizamos análises de
              políticas públicas e promovemos o conhecimento livre para tornar a
              relação entre governo e sociedade mais transparente e
              participativa.
            </p>
            <p>
              Criado em 2018, o Programa Ciência de Dados para Inovação Cívica
              surgiu no âmbito das atividades da Operação Serenata de Amor,
              iniciativa lançada em 2016 por profissionais independentes de
              diversas áreas (tecnologia, ciências sociais, jornalismo, design
              etc.). O Programa é responsável pela gestão e manutenção dos
              projetos
              <a
                href="https://queridodiario.ok.org.br/"
                target="_blank"
                class="font-bold hover:underline"
                >Querido Diário</a
              >,
              <a
                href="https://serenata.ai/"
                target="_blank"
                class="font-bold hover:underline"
                >Operação Serenata de Amor</a
              >,
              <a
                href="https://parlametria.org.br/"
                target="_blank"
                class="font-bold hover:underline"
                >Parlametria</a
              >, Perfil Politico,
              <a
                href="https://justa.org.br/"
                target="_blank"
                class="font-bold hover:underline"
                >Justa</a
              >
              e
              <a
                href="https://www.vitimasdaintolerancia.org/"
                target="_blank"
                class="font-bold hover:underline"
                >Vítimas da Intolerância</a
              >.
            </p>
            <p>
              Saiba mais em:
              <a
                href="https://ok.org.br/"
                target="_blank"
                class="font-bold hover:underline"
                >ok.org.br</a
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import IconPP from "@/components/IconPP.vue";

export default {
  components: {
    Footer,
    Navbar,
    IconPP,
  },
};
</script>
