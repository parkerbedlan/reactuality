/** Types generated for queries found in "src/lib/db/queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'JoinMailingList' parameters type */
export interface IJoinMailingListParams {
  email: string;
  userId?: number | null | void;
}

/** 'JoinMailingList' return type */
export type IJoinMailingListResult = void;

/** 'JoinMailingList' query type */
export interface IJoinMailingListQuery {
  params: IJoinMailingListParams;
  result: IJoinMailingListResult;
}

const joinMailingListIR: any = {"usedParamSet":{"email":true,"userId":true},"params":[{"name":"email","required":true,"transform":{"type":"scalar"},"locs":[{"a":52,"b":58}]},{"name":"userId","required":false,"transform":{"type":"scalar"},"locs":[{"a":61,"b":67}]}],"statement":"INSERT INTO \"mailing_list\" (email, user_id) VALUES (:email!, :userId)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO "mailing_list" (email, user_id) VALUES (:email!, :userId)
 * ```
 */
export const joinMailingList = new PreparedQuery<IJoinMailingListParams,IJoinMailingListResult>(joinMailingListIR);


/** 'SignUp' parameters type */
export interface ISignUpParams {
  ipAddress: string;
}

/** 'SignUp' return type */
export interface ISignUpResult {
  id: number;
}

/** 'SignUp' query type */
export interface ISignUpQuery {
  params: ISignUpParams;
  result: ISignUpResult;
}

const signUpIR: any = {"usedParamSet":{"ipAddress":true},"params":[{"name":"ipAddress","required":true,"transform":{"type":"scalar"},"locs":[{"a":48,"b":58}]}],"statement":"INSERT INTO \"user\" (initial_ip_address) VALUES (:ipAddress!) RETURNING id"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO "user" (initial_ip_address) VALUES (:ipAddress!) RETURNING id
 * ```
 */
export const signUp = new PreparedQuery<ISignUpParams,ISignUpResult>(signUpIR);


/** 'LogSiteVisit' parameters type */
export interface ILogSiteVisitParams {
  ipAddress: string;
  nodeEnv: string;
  url: string;
  userId?: number | null | void;
}

/** 'LogSiteVisit' return type */
export type ILogSiteVisitResult = void;

/** 'LogSiteVisit' query type */
export interface ILogSiteVisitQuery {
  params: ILogSiteVisitParams;
  result: ILogSiteVisitResult;
}

const logSiteVisitIR: any = {"usedParamSet":{"ipAddress":true,"url":true,"nodeEnv":true,"userId":true},"params":[{"name":"ipAddress","required":true,"transform":{"type":"scalar"},"locs":[{"a":71,"b":81}]},{"name":"url","required":true,"transform":{"type":"scalar"},"locs":[{"a":84,"b":88}]},{"name":"nodeEnv","required":true,"transform":{"type":"scalar"},"locs":[{"a":91,"b":99}]},{"name":"userId","required":false,"transform":{"type":"scalar"},"locs":[{"a":102,"b":108}]}],"statement":"INSERT INTO \"site_visits\" (ip_address, url, node_env, user_id) VALUES (:ipAddress!, :url!, :nodeEnv!, :userId)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO "site_visits" (ip_address, url, node_env, user_id) VALUES (:ipAddress!, :url!, :nodeEnv!, :userId)
 * ```
 */
export const logSiteVisit = new PreparedQuery<ILogSiteVisitParams,ILogSiteVisitResult>(logSiteVisitIR);


