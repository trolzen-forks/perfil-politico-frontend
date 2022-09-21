import { reactive } from "vue";

const state: any = reactive({
  currentCandidates: {},
  currentInfosCadidates: [],
  currentCandidateSelected: {},
  currentCharacteristicEducation: [],
  currentCharacteristicEthnicity: [],
  currentCharacteristicGender: [],
  currentAssets: []
});

export default state;

export function setCurrentCandidates(candidates: any) {
  state.currentCandidates = candidates;
}

export function setInfosCandidates(candidate: any) {
  state.currentInfosCadidates.push(candidate);
}

export function setInfoCandidateSelected(candidate: any) {
  state.currentCandidateSelected = candidate;
}

export function cleanInfoCandidateSelected() {
  state.currentCandidateSelected = {};
  state.setCharacteristicEducation = {};
  state.currentCharacteristicEthnicity = {};
  state.currentCharacteristicGender = {};
  state.currentAssets = {}
}

export function cleanCurrentCandidates() {
  state.currentCandidates = {};
}

export function setCharacteristicEducation(characteristic: any) {
  state.currentCharacteristicEducation = characteristic;
}

export function setCharacteristicEthnicity(characteristic: any) {
  state.currentCharacteristicEthnicity = characteristic;
}

export function setCharacteristicGender(characteristic: any) {
  state.currentCharacteristicGender = characteristic;
}

export function setAssets(assets: any) {
  state.currentAssets = assets;
}

export function cleanInfosCandidates() {
  state.currentInfosCadidates = [];
}