// import { error } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import { JWT_SECRET, NODE_ENV } from "$env/static/private";
import { newDbClient } from "$lib/db/client";
import { signUp } from "$lib/db/queries";
import pkg from "jsonwebtoken";
const { sign } = pkg;
import { cookieConfig } from "$lib/db/cookieConfig";

export const GET = async ({ cookies, getClientAddress }: RequestEvent) => {
  console.log("open sesame!", getClientAddress());

  const db = await newDbClient();
  const user = await signUp.run({ ipAddress: getClientAddress() }, db);
  await db.end();

  const userId = user[0].id;
  const jwt = sign({ userId }, JWT_SECRET);
  cookies.set("jwt", jwt, cookieConfig);

  return new Response();
};
