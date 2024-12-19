export const saveChatHistory = (messages) => {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
};

export const loadChatHistory = () => {
      const history = localStorage.getItem('chatHistory');
      return history ? JSON.parse(history) : [];
};