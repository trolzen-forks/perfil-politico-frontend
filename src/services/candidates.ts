import { setGlobalLoading } from "@/store/global";

export default (httpClient: any) => ({
  candidatesList: async (year: number, locale: string, role: string) => {
    setGlobalLoading(true);
    const response = await httpClient.get(
      `/api/candidate/${year}/${locale}/${role}/`
    );
    return {
      data: response.data,
    };
  },
  candidate: async (key: number) => {
    setGlobalLoading(true);
    const response = await httpClient.get(`/api/candidate/${key}/`);

    return {
      dataCandidate: response.data,
    };
  },

  characteristic: async (
    year: number,
    post: string,
    characteristic: string
  ) => {
    setGlobalLoading(true);
    const response = await httpClient.get(
      `/api/stats/${year}/${post}/${characteristic}/`
    );

    return {
      data: response.data,
    };
  },

  assets: async (state?: string, post?: string) => {
    setGlobalLoading(true);
    const response = await httpClient.get(`/api/asset-stats/`, {
      params: { state: state, candidate_post: post },
    });

    return {
      data: response.data,
    };
  },
});
