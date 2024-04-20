import { redirect, type LoaderFunctionArgs } from "@vercel/remix";
import { createClient } from "../utils/supabase.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") || "/";
  const { supabase, headers } = createClient(request);

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return redirect(next, { headers });
    }
  }

  return redirect("/auth/auth-error-page", { headers });
}