import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Container from './container'

const StyledHeader = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.offWhite};
  z-index: 9999;
`

const InnerHeader = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled.p`
  a {
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.offWhite};
    font-weight: ${({ theme }) => theme.fontWeights.black};
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.offWhite};
    font-weight: ${({ theme }) => theme.fontWeights.body};
    display: inline-block;
    :not(:last-child) {
      margin-right: 3rem;
    }
  }
`

const Header = () => (
  <StyledHeader>
    <Container>
      <InnerHeader>
        <Brand>
          <Link to="/">F.</Link>
        </Brand>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
        </NavLinks>
      </InnerHeader>
    </Container>
  </StyledHeader>
)

export default Header
