import { reactive } from 'vue';

const globalState = reactive({
    currentState: {}
})

export default globalState;

export function cleanCurrentState() {
    globalState.currentState = {};
}

export function setCurrentState(state: string) {
    globalState.currentState = state;
}