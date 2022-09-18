<template>
  <Popper v-bind="$attrs" hover openDelay="200" closeDelay="100">
    <slot />
    <template #content="props">
      <slot name="content" v-bind="props" />
    </template>
  </Popper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Popper from "vue3-popper";

export default defineComponent({
  name: "TooltipInfo",
  components: {
    Popper,
  },
});
</script>

<style lang="postcss" scoped>
:deep(.popper) {
  width: 50%;
  background: #4b3885;
  padding: 20px;
  border-radius: 20px;
  color: #ffffff;
  font-weight: bold;
}

:deep(.popper #arrow::before) {
  background: #4b3885;
}
:deep(.popper:hover),
:deep(.popper:hover > #arrow::before) {
  background: #4b3885;
}
</style>
