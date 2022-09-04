export default (httpClient: any) => ({
  candidates: async (year: number, locale: string, role: string) => {
    const response = await httpClient.get(
      `/api/candidate/${year}/${locale}/${role}`
    );
    let errors = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }

    return {
      data: response.data,
      errors,
    };
  },
});
