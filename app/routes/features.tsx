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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 p-4 md:p-8">
  <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg">
    <h2 className="text-xl md:text-3xl font-semibold text-center py-4 border-b border-gray-200">AI Chat Experience</h2>
    <section className="p-4 space-y-4 overflow-auto" style={{ maxHeight: '60vh' }}>
      {messages.map((m) => (
        <div
          key={m.id}
          className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs px-6 py-3 m-2 rounded-2xl shadow ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            <p className="whitespace-pre-wrap">{m.content}</p>
          </div>
        </div>
      ))}
    </section>
    <form onSubmit={handleSubmit} className="flex w-full border-t border-gray-300">
      <input
        type="text"
        className="flex-grow p-4 text-lg rounded-l-xl focus:ring-zinc-300 focus:border-zinc-300"
        value={input}
        placeholder="Type your message here..."
        onChange={handleInputChange}
        autoFocus
      />
      <button
        type="submit"
        className="px-4 py-3 text-base md:text-lg font-bold text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
      >
        Send
      </button>
    </form>
  </div>
</main>
    </>
  );
}
