
import React from 'react';
import MessageInput from './MessageInput';


const ChatWindow = ({ chatName, messages, onSendMessage }) => {
  return (
    <div className="chat-window">
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <div className="message-input-container">
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
