import { setGlobalLoading } from "@/store/global";

export default (httpClient: any) => ({
  candidates: async (year: number, locale: string, role: string) => {
    setGlobalLoading(true);
    const response = await httpClient.get(
      `/api/candidate/${year}/${locale}/${role}`
    );

    return {
      data: response.data,
    };
  },
});
