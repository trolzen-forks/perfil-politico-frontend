import { reactive } from "vue";

const state: any = reactive({
  currentCandidates: {},
  currentInfosCadidates: [],
  currentCandidateSelected: {}
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
}

export function cleanCurrentCandidates() {
  state.currentCandidates = {};
}

export function cleanInfosCandidates() {
  state.currentInfosCadidates = [];
}
