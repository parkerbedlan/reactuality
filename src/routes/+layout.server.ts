import { JWT_SECRET } from "$env/static/private";
import type { LayoutServerLoad } from "./$types";
import pkg from "jsonwebtoken";
const { verify } = pkg;

export const load: LayoutServerLoad = async ({ cookies }) => {
  // const gate = cookies.get("jwt") ? "open" : "closed";

  let gate: "open" | "closed" = "closed";
  if (cookies.get("jwt") !== undefined) {
    verify(cookies.get("jwt")!, JWT_SECRET, (_err, decoded) => {
      if (decoded) gate = "open";
    });
  }

  const joinedMailingList = Boolean(cookies.get("joinedMailingList"));

  return { gate, joinedMailingList };
};
