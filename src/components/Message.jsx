import React from "react";

const Message = ({ message }) => {
  const date = new Date(message.timestamp);
  const formattedTime = date.toLocaleTimeString();

  return (
    <div
      className={`my-2 ${
        message.sender === "user" ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`inline-block p-3 rounded-lg max-w-xs ${
          message.sender === "user"
            ? "bg-blue-500 text-white"
            : " bg-gray-300 text-black"
        }`}
      >
        {message.text}
        <span className="block text-gray-400 text-sm mt-1">
          {formattedTime}
        </span>
      </div>
    </div>
  );
};

export default Message;
