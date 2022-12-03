import queryString from "query-string";
import { QueryParams } from "../types";

export const stringifyQueryParams = (queryParams: QueryParams) =>
  queryString.stringify(queryParams, {
    skipEmptyString: true,
    skipNull: true,
  });
