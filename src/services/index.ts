import axios from "axios";
import { apis } from "../envs/environment";
import CandidatesService from "./candidates";

const httpClient = axios.create({
  baseURL: apis.production,
});

export default {
  dataCandidates: CandidatesService(httpClient),
};
