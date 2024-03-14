import { NODE_ENV } from "$env/static/private";

export const cookieConfig = {
  path: "/",
  secure: NODE_ENV === "production",
  httpOnly: true,
};
