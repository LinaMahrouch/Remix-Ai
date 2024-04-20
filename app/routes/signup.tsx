import { ActionFunctionArgs, json } from "@remix-run/node";
import { Form } from "@remix-run/react";
import Login from "~/components/Login";
import { createClient } from "~/utils/supabase.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const { supabase } = createClient(request);

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return json({ message: error.message }, { status: 400 });
  }
  return null;
}

export default function Component() {
  return (
    <div>
      <h1>Sign up</h1>
     <Login/>
    </div>
  );
}