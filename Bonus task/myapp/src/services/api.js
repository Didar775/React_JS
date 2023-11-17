
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; 
export const fetchChats = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chats:', error);
    throw error;
  }
};

export const fetchMessages = async (chatId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts?userId=${chatId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};


export const sendMessage = async (chatId, text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chats/${chatId}/messages`, { text });
    return response.data;  
  } catch (error) {
    throw error;
  }
};
