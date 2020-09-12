import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Container from './container'

const StyledFooter = styled.footer`
  padding-top: 5rem;
  background: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 420px) {
    padding-top: 2rem;
  }
`

const InnerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 3rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: initial;
  }
`

const FooterCopy = styled.div`
  p {
    font-size: 14px;
    opacity: 60%;
  }
`

const FooterBrand = styled.p`
  align-self: flex-start;

  a {
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.black};
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 3rem;
  }
`

const FooterLink = styled.div`
  ul {
    list-style-type: none;
    padding-inline-start: 0;
    li {
      a {
        display: block;
        color: ${({ theme }) => theme.colors.primary};
        opacity: 87%;
        margin-bottom: 12px;
      }
    }
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <InnerFooter>
          <FooterLinks>
            <FooterBrand>
              <Link to="/">F.</Link>
            </FooterBrand>
            <FooterLink>
              <h4>About</h4>
              <ul>
                <li>
                  <Link to="/">Mission</Link>
                  <Link to="/">History</Link>
                </li>
              </ul>
            </FooterLink>
            <FooterLink>
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/">Careers</Link>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </FooterLink>
            <FooterLink>
              <h4>Support</h4>
              <ul>
                <li>
                  <Link to="/">Terms and Conditions</Link>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </FooterLink>
          </FooterLinks>
          <FooterCopy>
            <p>Copyright © Faber {new Date().getFullYear()}</p>
          </FooterCopy>
        </InnerFooter>
      </Container>
    </StyledFooter>
  )
}
