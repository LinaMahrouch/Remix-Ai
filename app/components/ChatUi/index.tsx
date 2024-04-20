import React from 'react';
import { useChat } from 'ai/react';
import { Form } from '@remix-run/react';

function ChatUI() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="w-full max-w-6xl mx-auto rounded-xl shadow-lg text-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center py-6 ">AI Chat Experience</h2>
      <section className="p-6 space-y-4 overflow-auto" style={{ maxHeight: '85vh' }}>
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-lg px-4 py-2 m-2 rounded-lg shadow-md ${m.role === 'user' ? 'bg-zinc-300 text-black' : 'bg-gray-800 text-gray-300'}`}
            >
              <p className="whitespace-pre-wrap break-words">{m.content}</p>
            </div>
          </div>
        ))}
      </section>
      <Form onSubmit={handleSubmit} className="flex w-full p-6 ">
        <input
          type="text"
          className="flex-grow h-12 px-4 mr-4 text-xl bg-white text-black rounded-lg focus:outline-none"
          value={input}
          placeholder="Type your message here..."
          onChange={handleInputChange}
          autoFocus
        />
        <button
          type="submit"
          className="px-6 h-12 bg-white text-black font-bold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Send
        </button>
      </Form>
    </div>
  );
}

export default ChatUI;
