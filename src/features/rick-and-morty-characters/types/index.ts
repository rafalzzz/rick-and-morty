import { QueryParamKeys, Species, Status } from "../enums";

export type QueryParams = Record<QueryParamKeys, string | null>;

type Result = {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: "Male" | "Female";
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Origin = {
  name: string;
  url: string;
};

type Info = {
  count: number;
  pages: number;
  next: string;
  prev?: any;
};

export type Response = {
  info: Info;
  results: Result[];
};

export type TransformedResult = Pick<
  Result,
  "id" | "name" | "species" | "image" | "origin" | "gender" | "status"
>;

export type TransformedResponse = Pick<Response, "info"> & { results: TransformedResult[] };
