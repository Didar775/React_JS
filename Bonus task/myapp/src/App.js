
import React, { useState, useEffect } from 'react';
import './App.css';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';


import { fetchChats, fetchMessages } from './services/api';

const App = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchChats()
      .then((data) => setChats(data))
      .catch((error) => console.error('Error fetching chats:', error));
  }, []);

  useEffect(() => {
    if (selectedChat) {
      fetchMessages(selectedChat)
        .then((data) => setMessages(data))
        .catch((error) => console.error('Error fetching messages:', error));
    }
  }, [selectedChat]);

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
  };

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1, 
      userId: selectedChat,
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div className="messenger-container">
      <ChatList chats={chats} selectedChat={selectedChat} onChatClick={handleChatClick} />
      {selectedChat && (
        <ChatWindow
          chatName={chats.find((chat) => chat.id === selectedChat).name}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
};

export default App;
