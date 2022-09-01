import { reactive } from 'vue'

const state = reactive({
  isLoading: false
})

export default state

export function setGlobalLoading (status: any) {
  state.isLoading = status
}