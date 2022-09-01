import { AxiosInstance } from 'axios'
import { IRole } from '../models/candidate.model'

type ICandidate = {
  data: IRole[];
  errors: any | null;
}

type IPagination = {
  limit: number;
  offset: number;
}

const defaultPagination = {
  limit: 8,
  offset: 0
}

export interface CandidatesServiceInterface {
  getCandidates( {limit, offset}:IPagination, year: number, locale: string, role: string): Promise<ICandidate>;
}

function CandidatesService (httpClient: AxiosInstance): CandidatesServiceInterface {
  async function getCandidates ({ limit, offset }: IPagination = defaultPagination, year: number, locale: string, role: string): Promise<ICandidate> {
    const query = { limit, offset }
    const response = await httpClient.get<IRole[]>(`/api/candidate/${year}/${locale}/${role}`, { params: query })

    let errors: any | null = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  }

  return {
    getCandidates
  }
}

export default CandidatesService