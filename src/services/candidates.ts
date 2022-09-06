import { setGlobalLoading } from "@/store/global";

export default (httpClient: any) => ({
  candidatesList: async (year: number, locale: string, role: string) => {
    setGlobalLoading(true);
    const response = await httpClient.get(
      `/api/candidate/${year}/${locale}/${role}`
    );
    return {
      data: response.data,
    };
  },
  candidate: async (key: number) => {
    setGlobalLoading(true);
    const response = await httpClient.get(`/api/candidate/${key}`);

    return {
      dataCandidate: response.data,
    };
  },
});
