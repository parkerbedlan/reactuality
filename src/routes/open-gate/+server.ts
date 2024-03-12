// import { error } from "@sveltejs/kit";
import type { RequestEvent, RequestHandler } from "./$types";
import { NODE_ENV } from "$env/static/private";

export function GET({ cookies }: RequestEvent) {
  console.log("open sesame!");

  cookies.set("gate", "open", {
    path: "/",
    secure: NODE_ENV === "production",
    httpOnly: true,
  });

  return new Response();
}
