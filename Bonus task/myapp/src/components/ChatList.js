
import React from 'react';

const ChatList = ({ chats, selectedChat, onChatClick }) => {
  return (
    <div className="chats-list">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`chat ${selectedChat === chat.id ? 'selected' : ''}`}
          onClick={() => onChatClick(chat.id)}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
