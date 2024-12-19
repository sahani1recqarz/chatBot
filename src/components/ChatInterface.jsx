import React, { useState, useRef, useEffect } from 'react';
import { IoMdSend } from 'react-icons/io';
import { FaTimesCircle, FaTrash, FaEdit, FaUser, FaRobot, FaSun, FaMoon } from 'react-icons/fa';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import useChat from '../hooks/useChat';

const ChatInterface = () => {
      const [input, setInput] = useState('');
      const [editIndex, setEditIndex] = useState(null);
      const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode state
      const chatRef = useRef(null);
      const messageEndRef = useRef(null); // Reference for the last message
      const { messages, isTyping, sendMessage, setMessages, editMessage } = useChat();

      // Toggle dark mode
      const toggleDarkMode = () => {
            setIsDarkMode(!isDarkMode);
            if (!isDarkMode) {
                  document.documentElement.classList.add('dark'); // Apply dark mode class
            } else {
                  document.documentElement.classList.remove('dark'); // Remove dark mode class
            }
      };

      const handleSend = () => {
            if (input.trim()) {
                  if (editIndex !== null) {
                        // Editing an existing message
                        editMessage(editIndex, input);
                        setEditIndex(null); // Reset edit mode
                  } else {
                        // Sending a new message
                        sendMessage(input);
                  }
                  setInput(''); // Clear input field
            }
      };

      const handleClearInput = () => {
            setInput('');
      };

      const handleClearChat = () => {
            setMessages([]);
      };

      const handleEdit = (index) => {
            setEditIndex(index);
            setInput(messages[index].text);
      };

      const handleKeyDown = (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault(); // Prevent form submission or newline
                  handleSend();
            }
      };

      // Auto-scroll to the bottom when a new message is added
      useEffect(() => {
            if (messageEndRef.current) {
                  messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
            }
      }, [messages]); // Trigger this effect whenever the messages array changes

      return (
            <div
                  className={`flex flex-col w-full h-screen ${isDarkMode ? 'bg-bg-dark text-text-dark' : 'bg-bg-light text-text-light'}`}
            >
                  <header className="w-full p-4 uppercase text-center text-xl font-semibold">
                        <strong>Chat</strong> <em className='font-bold'>Interface</em>
                  </header>

                  {/* Dark Mode Toggle Button */}
                  <div className="absolute top-4 right-4">
                        <button
                              onClick={toggleDarkMode}
                              className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600"
                        >
                              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>
                  </div>

                  <div
                        ref={chatRef}
                        className={`flex-1 overflow-y-auto p-4 rounded-t-lg space-y-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                  >
                        {messages.map((msg, index) => (
                              <div
                                    key={index}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-center space-x-2`}
                              >
                                    {msg.sender !== 'user' && (
                                          <div className="bg-gray-800 p-2 rounded-lg max-w-xs">
                                                <div className="flex items-center space-x-2">
                                                      <FaRobot size={20} className="text-green-500" />
                                                      <Message message={msg} />
                                                </div>
                                          </div>
                                    )}
                                    {msg.sender === 'user' && (
                                          <>
                                                <div className="flex items-center space-x-2">
                                                      <FaUser size={20} className="text-blue-500" />
                                                      <Message message={msg} />
                                                </div>
                                                <div className="flex space-x-2">
                                                      <button
                                                            onClick={() => handleEdit(index)}
                                                            className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
                                                      >
                                                            <FaEdit size={18} />
                                                      </button>
                                                </div>
                                          </>
                                    )}
                              </div>
                        ))}
                        {isTyping && <TypingIndicator />}
                        <div ref={messageEndRef} /> {/* Empty div to mark the end of the chat */}
                  </div>

                  <div
                        className={`p-4 border-t border-gray-600 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-400'}`}
                  >
                        <div className="flex flex-wrap items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
                              <textarea
                                    className={`w-full sm:w-4/5 border p-3 rounded-lg resize-none focus:outline-none focus:ring-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown} // Ensure this is correctly attached
                                    rows={3}
                                    placeholder={editIndex !== null ? 'Edit your message...' : 'Type a message...'}
                              />
                              <div className="flex md:flex-row space-x-12 md:space-x-3 md:justify-end">
                                    <button
                                          onClick={handleSend}
                                          className={`${isDarkMode ? 'bg-primary-dark' : 'bg-primary-light'} text-white p-4 rounded-lg hover:bg-blue-600 focus:outline-none`}
                                    >
                                          <IoMdSend size={24} />
                                    </button>
                                    <button
                                          onClick={handleClearInput}
                                          className={`${isDarkMode ? 'bg-gray-500' : 'bg-gray-300'} text-white p-4 rounded-lg hover:bg-gray-600 focus:outline-none`}
                                    >
                                          <FaTimesCircle size={24} />
                                    </button>
                                    <button
                                          onClick={handleClearChat}
                                          className={` flex md:text-sm font-bold uppercase justify-center items-center gap-x-2 ${isDarkMode ? 'bg-red-500' : 'bg-red-400'} text-white p-4 rounded-lg hover:bg-red-600 focus:outline-none`}
                                    >
                                          clear chat <span><FaTrash size={14} /></span>
                                          
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ChatInterface;
