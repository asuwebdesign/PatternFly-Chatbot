"use client"

import React, { useState } from 'react'
import Chatbot from '@/components/chatbot'

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

      <div className="pf-chatbot">
        <div className="pf-chatbot__header">Header</div>
        <div className="pf-chatbot__main">Main</div>
        <div className="pf-chatbot__footer">Footer</div>
      </div>

      <button className="pf-chatbot-toggle">Button</button>

    </div>
  )
}

export default App