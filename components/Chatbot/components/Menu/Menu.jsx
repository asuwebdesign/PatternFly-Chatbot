// ============================================================================
// Chatbot Header - Menu
// ============================================================================
import React from 'react'

// Import PatternFly components
import {
  Button,
  Icon,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelDescription,
  Nav,
  NavItem,
  NavGroup,
  Panel,
  PanelMain,
  PanelMainBody,
  PanelHeader,
  Truncate
} from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'

// Import styles
import './Menu.scss'

const Menu = ({ displayMode, isExpanded, setIsExpanded, drawerRef, onExpand }) => {

  const [activeItem, setActiveItem] = React.useState('group-1_item-1')

  const onSelect = (_event, result) => {
    setActiveItem(result.itemId)

    // Hide navigation drawer when chatbot is floating/docked
    if (displayMode !== 'pf-chatbot--fullscreen') {
      setIsExpanded(false)
    }
  }

  const onCloseClick = () => {
    setIsExpanded(false)
  }

  const menuContent = <>
    <Nav onSelect={onSelect} aria-label="Grouped global">
      <NavGroup title="Today">
        <NavItem preventDefault itemId="group-1_item-1" isActive={activeItem === 'group-1_item-1'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Red Hat products and services" />
        </NavItem>
        <NavItem preventDefault itemId="group-1_item-2" isActive={activeItem === 'group-1_item-2'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Enterprise Linux installation and setup" />        
        </NavItem>
        <NavItem preventDefault itemId="group-1_item-3" isActive={activeItem === 'group-1_item-3'}>
          <FontAwesomeIcon icon={faMessage} />
          <Truncate content="Troubleshoot system crash" />        
        </NavItem>
      </NavGroup>
      <NavGroup title="Yesterday">
        <NavItem preventDefault itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 2 Link 1
        </NavItem>
        <NavItem preventDefault itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 2 Link 2
        </NavItem>
        <NavItem preventDefault itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 2 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="June">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 3 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 3 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 3 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="May">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 4 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 4 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 4 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="April">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 5 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 5 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 5 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="March">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 3 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 3 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 3 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="February">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 4 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 4 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 4 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="January">
        <NavItem preventDefault to="#nav-group2-item1" itemId="group-2_item-1" isActive={activeItem === 'group-2_item-1'}>
          Group 5 Link 1
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item2" itemId="group-2_item-2" isActive={activeItem === 'group-2_item-2'}>
          Group 5 Link 2
        </NavItem>
        <NavItem preventDefault to="#nav-group2-item3" itemId="group-2_item-3" isActive={activeItem === 'group-2_item-3'}>
          Group 5 Link 3
        </NavItem>
      </NavGroup>
    </Nav>
  </>

  const panelContent = <>
    <DrawerPanelContent>
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          Header, logo on fullscreen
        </span>
        <DrawerActions>
          <Button>New chat</Button>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      {/* <DrawerPanelDescription>Drawer panel description</DrawerPanelDescription> */}
      <DrawerPanelBody>
        {menuContent}
      </DrawerPanelBody>
    </DrawerPanelContent>
  </>

  return (
    <>
      {displayMode !== 'pf-chatbot--fullscreen' && (
        <Drawer className="pf-chatbot__menu" isExpanded={isExpanded} onExpand={onExpand} position="start">
          <DrawerContent panelContent={panelContent} />
        </Drawer>
      )}
      {displayMode === 'pf-chatbot--fullscreen' && (
        <Panel className="pf-chatbot__menu" isScrollable>
          <PanelHeader>
            <Button isBlock>New chat</Button>
          </PanelHeader>
          <PanelMain>
            <PanelMainBody>
              {menuContent}
            </PanelMainBody>
          </PanelMain>
        </Panel>
      )}
    </>
  )
}

export default Menu