import { reactive } from 'vue'

const state = reactive({
    currentCandidates: {}
})

export default state;

export function setCurrentCandidates (candidates: any) {
    state.currentCandidates = candidates
}

export function cleanCurrentCandidates () {
    state.currentCandidates = {}
}