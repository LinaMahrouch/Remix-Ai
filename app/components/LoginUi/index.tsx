import { Form } from "@remix-run/react";
import { ActionResponse } from "~/utils/types/authTypes";
import { Label } from "../ui/Forms/label";
import { Input } from "../ui/Forms/input"
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { cn } from "~/utils/lib/utils";
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
                        {/* <div className="mb-4">
                            <input type="email" name="email" placeholder="Enter your email" required
                                className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                            />
                        </div> */}
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" name="email" placeholder="Enter your email" required />
                        </LabelInputContainer>



                        <button
                            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Sign up &rarr;
                            <BottomGradient />
                        </button>
                        <div className="bg-gradient-to-r from-transparent  via-neutral-700 to-transparent mt-8 h-[1px] w-full" />

                    </Form>
                    <Form method="post" className="mb-6 w-full max-w-xs  rounded-lg px-8 pt-6 pb-8">
                        <input type="hidden" name="_intent" value="github" />
                        {/* <button type="submit"
                            className="w-full bg-gray-900 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-150 ease-in-out"
                        >Log in with GitHub</button> */}
                        <div className="flex flex-col space-y-4">
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                                <span className="text-neutral-300 text-sm">
                                    Sign In With GitHub
                                </span>
                                <BottomGradient />
                            </button>
                        </div>
                    </Form>

                    {actionResponse && <p className="text-red-500">{actionResponse.message}</p>}
                </>
            )}

        </main>
    )
}


const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};


