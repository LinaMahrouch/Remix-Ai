import type { MetaFunction } from "@vercel/remix";
import CardDemo from "~/components/Dashboard";



export default function Features() {

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 p-4 md:p-8">
        <CardDemo />
      </main>
    </>
  );
}