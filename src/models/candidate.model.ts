export interface IRole {
  role: string;
  name: string;
  feminine: string;
  plural: string;
}

export interface ILocale {
  initials: string;
  name: string;
  preposition: string;
}

export interface ICandidate {
  ballot_number: number;
  elections: number;
  elections_won: number;
  ethnicity: string;
  gender: string;
  id: number;
  image: string;
  name: string;
  party: string;
  politician_id: number;
  post: string;
  round: number;
  state: string;
  status: string;
}
