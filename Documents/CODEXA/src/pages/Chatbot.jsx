import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! Ask me anything about DBT.", sender: "bot" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;

    const userMessage = { text: input, sender: "user" };

    let botReply = "Please visit your bank for DBT activation.";

    if (input.toLowerCase().includes("aadhaar")) {
      botReply = "Aadhaar linking alone is not enough. NPCI DBT seeding is also required.";
    }

    if (input.toLowerCase().includes("scholarship")) {
      botReply = "Check if your account is DBT-enabled to receive scholarships.";
    }

    setMessages([
      ...messages,
      userMessage,
      { text: botReply, sender: "bot" },
    ]);

    setInput("");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-brand-blue mb-6">
        AI Saathi Chat
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-brand-orange text-white ml-auto"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            className="flex-1 border rounded-xl p-3"
          />

          <button
            onClick={handleSend}
            className="bg-brand-blue text-white px-6 rounded-xl"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}