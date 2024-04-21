import { type ActionFunctionArgs, redirect } from "@vercel/remix";
import { createClient } from "../utils/supabase.server";

export async function action({ request }: ActionFunctionArgs) {
  const { supabase, headers } = createClient(request);

  await supabase.auth.signOut();
  return redirect("/login", { headers });
}

export function loader() {
  return redirect("/");
}