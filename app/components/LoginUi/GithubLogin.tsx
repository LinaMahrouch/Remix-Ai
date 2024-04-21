import { Form } from "@remix-run/react";
export default function GithubLogin() {
    return (

<main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 p-4 md:p-8">

<Form method="POST" className="text-white">
  <input type="text" name="_intent" value="github" hidden readOnly />
  <button type="submit">Log in with Github</button>
</Form>
</main>
    )
}