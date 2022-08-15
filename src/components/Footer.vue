<template>
  <footer class="c-footer bg-primary-base p-10 bottom-0">
    <div class="c-footer__content container bg-background-purpleLight flex justify-center items-center p-5 text-white rounded-lg">
      <div class="c-footer__content-logo">
        <img src="@/assets/logo.svg" alt="Perfil Político" />
      </div>
      <div class="c-footer__content-description mx-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          egestas, purus a pretium tristique, erat velit congue libero, et
          volutpat neque sem ut augue.
        </p>
      </div>
      <div class="c-footer__content-link-project flex items-center bg-opacity-10 bg-white p-3 rounded-lg">
        <img src="@/assets/icons/icon-github.svg" alt="Github" />
        <span><a href="http://" target="_blank" rel="noopener noreferrer" class="ml-2">Ver Github</a></span>
      </div>
    </div>
    <div class="c-footer__content-actions container flex justify-between items-center text-white mt-10">
        <div class="flex items-center">  
            <h3 class="font-bold text-xl mr-3">Link Úteis:</h3>
            <ul class="flex font-regular text-xs">
                <li class="mr-3 hover:underline"><a href="">Sobre o projeto</a></li>
                <li class="mr-3 hover:underline"><a href="">Perguntas frequentes</a></li>
                <li class="mr-3 hover:underline"><a href="">Apoie o projeto</a></li>
            </ul>
        </div>
        <div class="flex items-center">
            <h3 class="font-bold text-xl mr-3">Realização:</h3>
            <a href="https://ok.org.br/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/images/logo-open-knowledge.svg" alt="Open Knowledge" />
            </a>
        </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {};
</script>
