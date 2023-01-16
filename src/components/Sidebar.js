import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
// import { Link as LinkR } from 'react-router-dom'
// import { Link as LinkS } from 'react-scroll'

const Container = styled.aside`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: var(--sidebar-bg);
  color: var(--sidebar-content);
  display: grid;
  align-items: center;
  top: ${({ showSidebar }) => (showSidebar ? '0' : '-100%')};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ showSidebar }) => (showSidebar ? '100%' : '0')};
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: var(--sidebar-content);

  @media screen and (hover: hover) {
    &:hover {
      color: var(--sidebar-accent);
    }
  }
`

const Wrapper = styled.div`
  color: black;
`

const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`

const SidebarLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  padding-inline: 1rem;
  cursor: pointer;

  @media screen and (hover: hover) {
    &:hover {
      color: var(--sidebar-accent);
    }
  }
`

const SideBtn = styled.div`
  display: flex;
  justify-content: center;
`

const SidebarRoute = styled.div`
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 64px;
  border: 2px solid black;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;

  @media screen and (hover: hover) {
    &:hover {
      background-color: var(--sidebar-accent);
      border: 2px solid var(--sidebar-accent);
      color: var(--sidebar-bg);
    }
  }
`

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <Container showSidebar={showSidebar} onClick={toggleSidebar}>
      <Icon onClick={toggleSidebar}>
        <CloseIcon onClick={toggleSidebar} />
      </Icon>
      <Wrapper>
        <Menu>
          <SidebarLink onClick={toggleSidebar}>Home</SidebarLink>
          <SidebarLink onClick={toggleSidebar}>About</SidebarLink>
          <SidebarLink onClick={toggleSidebar}>Projects</SidebarLink>
          <SidebarLink onClick={toggleSidebar}>Contact</SidebarLink>
        </Menu>
        <SideBtn>
          <SidebarRoute to='/signin'>Download CV</SidebarRoute>
        </SideBtn>
      </Wrapper>
    </Container>
  )
}

export default Sidebar
