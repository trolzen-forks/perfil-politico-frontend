import { reactive } from "vue";

const state: any = reactive({
  currentParty: {},
  hasSelectedParty: false,
});

export default state;

export function setCurrentParty(party: any) {
  state.currentParty = party;
  state.hasSelectedParty = true;
}

export function cleanCurrentParty() {
  state.currentParty = {};
  state.hasSelectedParty = false;
}
