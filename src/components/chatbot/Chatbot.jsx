import React, { useState } from "react";
import "./chatbot.css";

const AutomaticChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      // Add user message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);

      // Process user input
      processUserInput(input);

      // Clear input field
      setInput("");
    }
  };

  const processUserInput = (input) => {
    // Define predefined responses for specific messages
    const predefinedResponses = {
      hi: "Hello! How can I assist you?",
      "We offer beginner, intermediate, and advanced courses.":
        "Great! What course would you like to learn?",
      "how are you": "I'm just a robot, but thank you for asking!",
      bye: "Goodbye! Have a great day!",
      // Add more predefined responses as needed
    };

    // Check if the user input matches any predefined message
    const response =
      predefinedResponses[input.toLowerCase()] ||
      "I'm sorry, I didn't understand that.";

    // Add bot response to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: response, sender: "bot" },
    ]);
  };

  return (
    <div className="automatic-chatbot">
      <div className="chatbot-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-icon">
        <div className="chatbot-face">
          <div className="chatbot-eyes">
            <div className="chatbot-eye"></div>
            <div className="chatbot-eye"></div>
          </div>
          <div className="chatbot-mouth"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AutomaticChatbot;
