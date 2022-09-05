import { reactive } from "vue";

const state: any = reactive({
  currentCandidates: {},
  currentInfosCadidates: [],
  currentCandidatesJoinInfo: {},
});

export default state;

export function setCurrentCandidates(candidates: any) {
  state.currentCandidates = candidates;
}

export function setInfosCandidates(candidate: any) {
  state.currentInfosCadidates.push(candidate);
}

export function setJoinInfoCandidates(candidates: any) {
  state.currentInfosCadidates.push(candidates);
}

export function cleanCurrentCandidates() {
  state.currentCandidates = {};
}

export function cleanInfosCandidates() {
  state.currentInfosCadidates = [];
}
