import { Form } from "@remix-run/react";
export default function Login() {
    return (

<main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 p-4 md:p-8">

<Form method="POST">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Sign up</button>
      </Form>
</main>
    )
}