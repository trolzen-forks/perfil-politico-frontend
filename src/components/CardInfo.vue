<template>
  <div
    class="c-card-info w-full bg-white rounded-xl border border-neutral-light"
  >
    <div
      class="c-card-info__title flex flex-wrap text-center text-white bg-primary-base rounded-t-xl py-5 px-3 text-base font-semibold"
    >
      <slot name="title"></slot>
    </div>
    <div class="c-card-info__content p-5">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CardInfo",
};
</script>
