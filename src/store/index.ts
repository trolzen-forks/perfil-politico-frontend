import { readonly } from 'vue'
import CandidatesModule from './candidates'
import GlobalModule from './global'

export default readonly ({
    Candidates: CandidatesModule,
    Global: GlobalModule
})