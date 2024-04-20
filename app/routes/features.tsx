import type { MetaFunction } from "@vercel/remix";

import { useChat } from "ai/react";
import React from "react";
import ChatUI from "../components/ChatUi";


export const meta: MetaFunction = () => {
  return [
    { title: "Your Remix AI APP" },
    //{ name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Features() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 p-4 md:p-8">

        <ChatUI />
      </main>
    </>
  );
}
