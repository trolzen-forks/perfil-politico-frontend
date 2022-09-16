import { reactive } from "vue";

const state: any = reactive({
  hasSelectedElections: false,
  hasSelectedElectionsWon: false,
  hasSelectedEthnicity: false,
  hasSelectedGender: false
});

export default state;

export function setElections() {
    state.hasSelectedElections = true;
}

export function setElectionsWon() {
    state.hasSelectedElectionsWon = true;
}

export function setEthnicity() {
    state.hasSelectedEthnicity = true;
}

export function setGender() {
    state.hasSelectedGender = true;
}

export function cleanFilters() {
  state.hasSelectedElections = false;
  state.hasSelectedElectionsWon = false;
  state.hasSelectedEthnicity = false;
  state.hasSelectedGender = false;
}
