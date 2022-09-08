import { readonly } from "vue";
import CandidatesModule from "./candidates";
import LocaleModule from "./locales";
import RoleModule from "./roles";
import PartyModule from "./party";
import GlobalModule from "./global";

export default readonly({
  Candidates: CandidatesModule,
  Party: PartyModule,
  Global: GlobalModule,
  Locale: LocaleModule,
  Role: RoleModule,
});
