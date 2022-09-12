import { setGlobalLoading } from "@/store/global";
import axios from "axios";
import { apis } from "../envs/environment";
import CandidatesService from "./candidates";
import router from "../router";

const httpClient = axios.create({
  baseURL: apis.staging,
});

httpClient.interceptors.response.use(
  (response) => {
    setGlobalLoading(false);
    return response;
  },
  (error) => {
    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500;

    if (canThrowAnError) {
      setGlobalLoading(false);
      throw new Error(error.message);
    }

    if (error.response.status === 401) {
      router.push({ name: "Home" });
    }

    setGlobalLoading(false);
    return error;
  }
);



export default {
  dataCandidates: CandidatesService(httpClient),
};
