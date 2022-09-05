import { readonly } from "vue";
import CandidatesModule from "./candidates";
import LocaleModule from "./locales";
import RoleModule from "./roles";
import GlobalModule from "./global";

export default readonly({
  Candidates: CandidatesModule,
  Global: GlobalModule,
  Locale: LocaleModule,
  Role: RoleModule,
});
