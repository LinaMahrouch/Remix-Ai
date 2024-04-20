import { ActionFunctionArgs, redirect } from "@vercel/remix";
import { Form } from "@remix-run/react";
import { createClient } from "../utils/supabase.server";
import Login from "~/components/Login";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("_intent") as "github";

  const { supabase, headers } = createClient(request);
  const { data } = await supabase.auth.signInWithOAuth({
    provider: intent,
    options: {
      redirectTo: process.env.REDIRECT_URL,
    },
  });

  return redirect(data.url as string, { headers });
}

export default function SignIn() {
  return (
<Login/>

  );
}