import { reactive } from "vue";

const state: any = reactive({
  hasSelectedElections: false,
  hasSelectedNElections: false,
  hasSelectedElectionsWon: false,
  hasSelectedGenderMan: false,
  hasSelectedGenderWoman: false,
  hasSelectedEthnicityPPI: false,
  hasSelectedEthnicityWhite: false,
  dataFilterLength: 0,
});

export default state;

export function setElections(item: boolean) {
  state.hasSelectedElections = item;
  item ? state.dataFilterLength++ : state.dataFilterLength > 0 ? state.dataFilterLength-- :  state.dataFilterLength = 0;
}

export function setNElections(item: boolean) {
  state.hasSelectedNElections = item;
   item ? state.dataFilterLength++ : state.dataFilterLength > 0 ? state.dataFilterLength-- :  state.dataFilterLength = 0;
}

export function setElectionsWon(item: boolean) {
  state.hasSelectedElectionsWon = item;
   item ? state.dataFilterLength++ : state.dataFilterLength > 0 ? state.dataFilterLength-- :  state.dataFilterLength = 0;
}

export function setGenderWoman(item: boolean) {
  state.hasSelectedGenderWoman = item;
   item ? state.dataFilterLength++ : state.dataFilterLength > 0 ? state.dataFilterLength-- :  state.dataFilterLength = 0;
}

export function setGenderMan(item: boolean) {
  state.hasSelectedGenderMan = item;
    item ? state.dataFilterLength++ : state.dataFilterLength > 0 ? state.dataFilterLength-- :  state.dataFilterLength = 0;
}

export function setEthnicityPPI(item: boolean) {
  state.hasSelectedEthnicityPPI = item;
   item ? state.dataFilterLength++ : state.dataFilterLength > 0 ? state.dataFilterLength-- :  state.dataFilterLength = 0;
}

export function setEthnicityWhite(item: boolean) {
  state.hasSelectedEthnicityWhite = item;
    item ? state.dataFilterLength++ : state.dataFilterLength > 0 ? state.dataFilterLength-- :  state.dataFilterLength = 0;
}

export function cleanFilters() {
  state.hasSelectedElections = false;
  state.hasSelectedNElections = false;
  state.hasSelectedElectionsWon = false;
  state.hasSelectedGenderMan = false;
  state.hasSelectedGenderWoman = false;
  state.hasSelectedEthnicityPPI = false;
  state.hasSelectedEthnicityWhite = false;
  state.dataFilterLength = 0;
}
