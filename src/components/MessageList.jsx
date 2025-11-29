import React from "react";

const MessageList = () => {
  const messages = [];

  return (
    <div>
      {messages.length === 0 ? (
        <p>No new messages</p>
      ) : (
        <ul>
          {messages.map((msg, index) => <li key={index}>{msg}</li>)}
        </ul>
      )}
    </div>
  );
};

export default MessageList;
