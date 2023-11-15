// components/chat.js
import React, { useState } from 'react';
import styles from '../styles/chat.module.css'; // Make sure the path to your CSS module is correct

const Chat = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage({ sender: 'Steve', text: newMessage });
      setNewMessage('');
    }
  };

  return (
    <aside className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        Chat with PathFinder
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.sender === 'PathFinder'
                ? styles.pathfinderMessage
                : styles.userMessage
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.inputArea}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" className={styles.sendButton}>Send</button>
      </form>
    </aside>

    
  );
};

export default Chat;
