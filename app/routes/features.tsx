import type { MetaFunction } from "@vercel/remix";

import { useChat } from "ai/react";


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
      
      <main className="flex flex-col items-center justify-center w-full h-screen rounded-lg bg-black p-4">
      <div className="w-full max-w-md bg-white  rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-center p-4 border-b border-gray-200">AI Chat Experience</h2>
        <section className="flex flex-col p-4 space-y-4 overflow-auto" style={{ maxHeight: '50vh' }}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 m-2 rounded-lg shadow-md ${m.role === 'user' ? 'bg-blue-600' : 'bg-gray-400'}`}
              >
                <p className="whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}
        </section>
        <form onSubmit={handleSubmit} className="flex w-full border-t focus:ring-gray-500 border-gray-300">
          <input
            type="text"
            className="flex-grow p-3 text-lg rounded-lg  focus:ring-zinc-300  "
            value={input}
            placeholder="Type your message here..."
            onChange={handleInputChange}
            autoFocus
          />
          <button
            type="submit"
            className="px-6 py-3 text-lg font-bold text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 focus:outline-none focus:ring- focus:ring-gray-500 focus:ring-offset-2 "
          >
            Send
          </button>
        </form>
      </div>
    </main>
    </>
  );
}
