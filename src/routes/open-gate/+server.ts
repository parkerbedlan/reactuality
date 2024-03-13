// import { error } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import { NODE_ENV } from "$env/static/private";

export function GET({ cookies, getClientAddress }: RequestEvent) {
  console.log("open sesame!", getClientAddress());

  cookies.set("gate", "open", {
    path: "/",
    secure: NODE_ENV === "production",
    httpOnly: true,
  });

  return new Response();
}
