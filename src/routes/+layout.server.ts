import { JWT_SECRET, NODE_ENV } from "$env/static/private";
import { newDbClient } from "$lib/db/client";
import { logSiteVisit } from "$lib/db/queries";
import type { LayoutServerLoad } from "./$types";
import pkg from "jsonwebtoken";
const { verify } = pkg;

export const load: LayoutServerLoad = async ({
  cookies,
  getClientAddress,
  url,
}) => {
  let jwt: { userId: null | number } = { userId: null };
  try {
    if (cookies.get("jwt"))
      jwt = verify(cookies.get("jwt")!, JWT_SECRET) as { userId: number };
  } catch {}

  const joinedMailingList = Boolean(cookies.get("joinedMailingList"));

  const db = await newDbClient();
  await logSiteVisit.run(
    {
      userId: jwt.userId,
      url: String(url),
      ipAddress: getClientAddress(),
      nodeEnv: NODE_ENV,
    },
    db,
  );
  await db.end();

  console.log(jwt.userId);

  return { gate: Boolean(jwt.userId) ? "open" : "closed", joinedMailingList };
};
