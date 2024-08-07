"use client"

import React, { useState } from 'react'
import Chatbot from '@/components/Chatbot'

const App = () => {
  const [messages, setMessages] = useState([])
  const [chatbotVisible, setChatbotVisible] = useState(false)

  const handleMessageSubmit = (message) => {
    setMessages([...messages, message])
  }

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible)
  }

  return (
    <div className="app">

      {/* Main chatbot component */}
      <Chatbot messages={messages} onMessageSubmit={handleMessageSubmit} chatbotVisible={chatbotVisible} />
      
      {/* Chatbot launch action */}
      <button onClick={toggleChatbot} className="chatbot__toggle">
        {chatbotVisible ? 'Hide Chatbot' : 'Show Chatbot'}
      </button>

    </div>
  )
}

export default App