import { NODE_ENV, DATABASE_URL } from "$env/static/private";
import { joinMailingList } from "$lib/db/queries";
import { error } from "@sveltejs/kit";
import type { Actions } from "./$types";
import pg from "pg";
const { Client } = pg;

export const actions: Actions = {
  joinMailingList: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email");

    console.log("adding email", email);

    if (!email || typeof email !== "string")
      return { status: "error", message: "Invalid email" };

    const markAsJoined = () =>
      cookies.set("joinedMailingList", "true", {
        path: "/",
        secure: NODE_ENV === "production",
        httpOnly: true,
      });

    const dbClient = new Client({
      connectionString: DATABASE_URL,
    });
    try {
      await dbClient.connect();
      await joinMailingList.run({ email: email.toLowerCase() }, dbClient);
      await dbClient.end();
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
