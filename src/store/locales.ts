import { reactive } from "vue";

const state: any = reactive({
  currentLocale: {},
});

export default state;

export function setCurrentLocale(locale: any) {
  state.currentLocale = locale;
}

export function cleanCurrentLocale() {
  state.currentLocale = {};
}
