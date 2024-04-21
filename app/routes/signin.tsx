import { ActionFunctionArgs, json, redirect } from "@vercel/remix";
import { Form, useActionData } from "@remix-run/react";
import { createClient } from "../utils/supabase.server";
import LoginUI from "~/components/LoginUi";
import type { ActionResponse } from '~/utils/types/authTypes';




export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("_intent");


  const { supabase, headers } = createClient(request);

  if (intent === "github") {
    const response = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: process.env.REDIRECT_URL,
      },
    });
    if (response.error) {
      return json({ success: false, message: response.error.message }, { headers });
    }
    return redirect(response.data.url, { headers });

  } else if (intent === "magic_link") {
    const email = formData.get("email") as string;
    const response = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: process.env.REDIRECT_URL,
      },
    });


    if (response.error) {
      return json({ success: false, message: response.error.message }, { headers });
    }

    return json({ success: true, message: "Please check your email in order to login!" }, { headers });
  }
}

export default function SignIn() {
  const actionResponse = useActionData<ActionResponse>();


  return (
    <LoginUI actionResponse={actionResponse} />

  );

}