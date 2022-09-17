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
  name: "Tooltip",
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

:root {
  --popper-theme-background-color: #4b3885;
  --popper-theme-background-color-hover: #4b3885;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 20px;
  --popper-theme-padding: 20px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
