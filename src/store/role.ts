import { reactive } from 'vue';

const globalState = reactive({
    currentRole: {}
})

export default globalState;

export function cleanCurrentRole() {
    globalState.currentRole = {};
}

export function setCurrentRole(role: string) {
    globalState.currentRole = role;
}