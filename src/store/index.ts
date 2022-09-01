import { readonly } from "vue";
import RoleModule from "./role.store";
import StateModule from "./state.store";
import GlobalModule from './global.store'


export default readonly({
    Role: RoleModule,
    State: StateModule,
    Global: GlobalModule
})