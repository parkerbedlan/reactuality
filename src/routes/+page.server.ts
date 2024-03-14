import { JWT_SECRET } from "$env/static/private";
import { joinMailingList } from "$lib/db/queries";
import { error } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { cookieConfig } from "$lib/db/cookieConfig";
import pkg from "jsonwebtoken";
import { newDbClient } from "$lib/db/client";
const { verify } = pkg;

export const actions: Actions = {
  joinMailingList: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email");

    const jwt = cookies.get("jwt")
      ? (verify(cookies.get("jwt")!, JWT_SECRET) as { userId: number })
      : undefined;

    console.log("adding email", email);

    if (!email || typeof email !== "string")
      return { status: "error", message: "Invalid email" };

    const markAsJoined = () =>
      cookies.set("joinedMailingList", "true", cookieConfig);

    try {
      const db = await newDbClient();
      await joinMailingList.run(
        { email: email.toLowerCase(), userId: jwt?.userId ?? -1 },
        db,
      );
      await db.end();
    } catch (e: any) {
      console.error(e);
      if (e.constraint === "mailing_list_email_key") {
        markAsJoined();
        return {
          status: "success",
          message:
            "Turns out you had already joined! You are both wise and forgetful.",
        };
      } else {
        error(500, e.detail);
      }
    }

    markAsJoined();
    return { status: "success", message: "Thanks for joining :D" };
  },
};
