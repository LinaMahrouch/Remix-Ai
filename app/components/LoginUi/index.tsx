import { Form } from "@remix-run/react";
import { ActionResponse } from "~/utils/types/authTypes";

interface LoginUIProps {
    actionResponse?: ActionResponse;
}

export default function LoginUI({ actionResponse }: LoginUIProps) {
    return (

        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 p-4 md:p-8">

            <h2 className="text-3xl text-white mb-4">Welcome to Remix-Ai</h2>
            {actionResponse?.success ? (
                <h3>{actionResponse.message}</h3>
            ) : (
                <>
                    <Form method="post" className="mb-6 w-full max-w-xs  rounded-lg px-8 pt-6 pb-8">
                        <input type="hidden" name="_intent" value="magic_link" />
                        <div className="mb-4">
                            <input type="email" name="email" placeholder="Enter your email" required
                                className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                        >Sign in with Magic Link</button>
                    </Form>
                    <Form method="post" className="mb-6 w-full max-w-xs  rounded-lg px-8 pt-6 pb-8">
                        <input type="hidden" name="_intent" value="github" />
                        <button type="submit"
                            className="w-full bg-gray-900 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-150 ease-in-out"
                        >Log in with GitHub</button>
                    </Form>
                    {actionResponse && <p className="text-red-500">{actionResponse.message}</p>}
                </>
            )}

        </main>
    )
}