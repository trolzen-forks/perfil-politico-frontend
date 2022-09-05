import { reactive } from "vue";

const state: any = reactive({
  currentRole: {},
});

export default state;

export function setCurrentRole(role: any) {
  state.currentRole = role;
}

export function cleanCurrentRole() {
  state.currentRole = {};
}
