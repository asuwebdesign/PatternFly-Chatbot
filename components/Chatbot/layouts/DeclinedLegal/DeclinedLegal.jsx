// ============================================================================
// Chatbot Layout - Declined Legal
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button, Content, ContentVariants } from '@patternfly/react-core'

// Import Chatbot components
import Header from '@/components/Chatbot/components/Header/Header'
import Main from '@/components/Chatbot/components/Main/Main'
import Footer from '@/components/Chatbot/components/Footer/Footer'
import Illustration from './Illustration'

// Import styles
import './DeclinedLegal.scss'

const DeclinedLegal = ({ config = {} }) => {

  // Configure default values
  const {
    title = 'Acceptance required',
    content = 'No description has been configured.',
    primaryButton = {
      label: 'Review agreements'
    },
    secondaryButton = {
      show: true,
      label: 'Learn more',
      url: 'https://www.redhat.com/'
    },
    tertiaryButton = {
      show: true,
      label: 'Contact customer support',
      url: 'https://www.redhat.com/'
    }
  } = config.declinedLegal || {}

  return (
    <>
      <Header>
        <div className="pf-chatbot__illustration">
          <Illustration />
        </div>
        <Content component={ContentVariants.h1}>{title}</Content>
      </Header>
      <Main>
        <Content component={ContentVariants.p}>{content}</Content>
      </Main>
      <Footer>
        <Button>{primaryButton.label}</Button>
        {secondaryButton.show && <Button variant="tertiary" component="a" href={secondaryButton.url} target="_blank">{secondaryButton.label}</Button>}
        {tertiaryButton.show && <Button variant="tertiary" component="a" href={tertiaryButton.url} target="_blank">{tertiaryButton.label}</Button>}
      </Footer>
    </>
  )
}

export default DeclinedLegal