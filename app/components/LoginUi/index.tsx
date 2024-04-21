import { Form } from "@remix-run/react";
import { ActionResponse } from "~/utils/types/authTypes";

interface LoginUIProps {
    actionResponse?: ActionResponse;
  }

export default function LoginUI({ actionResponse }: LoginUIProps) {
    return (

<main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 p-4 md:p-8">

<h2 className="text-white mb-4">Sign In</h2>
      {actionResponse?.success ? (
        <h3>{actionResponse.message}</h3>
      ) : (
        <>
          <Form method="post" className="mb-3">
            <input type="hidden" name="_intent" value="magic_link" />
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign in with Magic Link</button>
          </Form>
          <Form method="post">
            <input type="hidden" name="_intent" value="github" />
            <button type="submit" className="bg-gray-800 text-white p-2 rounded">Log in with GitHub</button>
          </Form>
          {actionResponse && <p className="text-red-500">{actionResponse.message}</p>}
        </>
      )}

</main>
    )
}