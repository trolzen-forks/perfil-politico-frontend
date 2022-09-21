import { reactive } from "vue";

const state: any = reactive({
  currentRole: {},
});

export default state;

export function setCurrentRole(role: string): void {
  state.currentRole = role;
}

export function cleanCurrentRole(): void {
  state.currentRole = {};
}
