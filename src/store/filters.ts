import { reactive } from "vue";

const state: any = reactive({
  hasSelectedElections: false,
  hasSelectedNElections: false,
  hasSelectedElectionsWon: false,
  hasSelectedGenderMan: false,
  hasSelectedGenderWoman: false,
  hasSelectedEthnicityPPI: false,
  hasSelectedEthnicityWhite: false,
});

export default state;

export function setElections(item: boolean) {
  state.hasSelectedElections = item;
}

export function setNElections(item: boolean) {
  state.hasSelectedNElections = item;
}

export function setElectionsWon(item: boolean) {
  state.hasSelectedElectionsWon = item;
}

export function setGenderWoman(item: boolean) {
  state.hasSelectedGenderWoman = item;
}

export function setGenderMan(item: boolean) {
  state.hasSelectedGenderMan = item;
}

export function setEthnicityPPI(item: boolean) {
  state.hasSelectedEthnicityPPI = item;
}

export function setEthnicityWhite(item: boolean) {
  state.hasSelectedEthnicityWhite = item;
}

export function cleanFilters() {
  state.hasSelectedElections = false;
  state.hasSelectedNElections = false;
  state.hasSelectedElectionsWon = false;
  state.hasSelectedGenderMan = false;
  state.hasSelectedGenderWoman = false;
  state.hasSelectedEthnicityPPI = false;
  state.hasSelectedEthnicityWhite = false;
}
