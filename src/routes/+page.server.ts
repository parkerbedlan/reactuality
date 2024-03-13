import { NODE_ENV } from "$env/static/private";
import type { Actions } from "./$types";

export const actions: Actions = {
  joinMailingList: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email");

    console.log("adding email", email);

    cookies.set("joinedMailingList", "true", {
      path: "/",
      secure: NODE_ENV === "production",
      httpOnly: true,
    });

    return { foo: "bar" };
  },
};
