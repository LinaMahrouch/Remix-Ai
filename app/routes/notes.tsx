import { LoaderFunctionArgs } from "@vercel/remix";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { createClient } from "../utils/supabase.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabase } = createClient(request);
  const { data: todos } = await supabase.from("todos").select("*");
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { todos, user: session?.user };
}

export default function Notes() {
  const { todos, user } = useLoaderData<typeof loader>();
  return (
    <>
      <Link to="/login">Log in</Link>
      {/* <p>
        {user
          ? `Currently logged in as ${user?.identities[0]?.identity_data?.name}`
          : "Not logged in"}
      </p> */}
      <ul>{todos?.map((todo) => <li key={todo.id}>{todo.name}</li>)}</ul>
      {user ? (
        <Form method="POST" action="/logout">
          <button type="submit">Log out</button>
        </Form>
      ) : null}
    </>
  );
}