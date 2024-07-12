// ============================================================================
// Chatbot Main - Message - Content - Text
// ============================================================================

import React from 'react'

// Import styles
import './TextMessage.scss'
import { Text, TextVariants } from '@patternfly/react-core'

const TextMessage = ({ text }) => {
  return (
    <div className="pf-chatbot__message-text">
      <Text component={TextVariants.p}>{text}</Text>
    </div>
  )
}

export default TextMessage