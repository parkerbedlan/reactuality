/** Types generated for queries found in "src/lib/db/queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'JoinMailingList' parameters type */
export interface IJoinMailingListParams {
  email: string;
}

/** 'JoinMailingList' return type */
export type IJoinMailingListResult = void;

/** 'JoinMailingList' query type */
export interface IJoinMailingListQuery {
  params: IJoinMailingListParams;
  result: IJoinMailingListResult;
}

const joinMailingListIR: any = {"usedParamSet":{"email":true},"params":[{"name":"email","required":true,"transform":{"type":"scalar"},"locs":[{"a":43,"b":49}]}],"statement":"INSERT INTO \"mailing_list\" (email) VALUES (:email!)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO "mailing_list" (email) VALUES (:email!)
 * ```
 */
export const joinMailingList = new PreparedQuery<IJoinMailingListParams,IJoinMailingListResult>(joinMailingListIR);


