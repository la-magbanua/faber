import React from 'react'
import styled from 'styled-components'
import Container from './container'
import Button from './button'

const StyledContact = styled.section`
  padding: 5rem 0;
`

const InnerContact = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.offWhite};
  padding: 8rem 5rem;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 769px) {
    max-width: 100%;
    width: 98%;
    padding: 8rem 2rem;
    justify-content: initial;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    flex-direction: column;
    padding: 3rem 0;
    margin: 0;
  }
`

const ContactDetails = styled.div`
  max-width: 500px;
  align-self: flex-start;

  h2 {
    font-size: 2.8rem;
  }

  p {
    font-size: 0.875rem;
    opacity: 87%;
    line-height: ${({ theme }) => theme.lineheights.body};
  }

  @media screen and (max-width: 768px) {
    max-width: 300px;
    width: 100%;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.875rem;
      opacity: 87%;
      line-height: ${({ theme }) => theme.lineheights.body};
    }
  }

  @media screen and (max-width: 420px) {
    width: 80%;
    padding: 0;
    margin: 0 auto;

    h2 {
      font-size: 2.3rem;
    }

    p {
      font-size: 0.875rem;
      opacity: 87%;
      line-height: ${({ theme }) => theme.lineheights.body};
    }
  }
`

const ContactForm = styled.div`
  width: 80%;
  margin-left: 5rem;

  @media screen and (max-width: 769px) {
    width: 40%;
    margin-left: 5rem;
  }

  @media screen and (max-width: 420px) {
    width: 80%;
    margin: 3rem auto;
    padding: 0;
  }
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.offWhite};
    opacity: 87%;
    margin-bottom: 8px;
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    border: 0.5px solid ${({ theme }) => theme.colors.offWhite};
    border-radius: 4px;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.offWhite};

    &::placeholder {
      color: ${({ theme }) => theme.colors.offWhite};
      opacity: 60%;
    }

    &:focus {
      border: 0.5px solid ${({ theme }) => theme.colors.accent};
    }
  }
`

const ContactButton = styled(Button)`
  display: block;
  width: 100%;
`

export default function Contact() {
  return (
    <StyledContact>
      <Container nopadding>
        <InnerContact>
          <ContactDetails>
            <h2>Tell us more about your business needs</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              voluptates sint ab, quis cupiditate recusandae!
            </p>
          </ContactDetails>
          <ContactForm>
            <form>
              <FormField>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="John Doe" />
              </FormField>
              <FormField>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                />
              </FormField>
              <ContactButton>Submit</ContactButton>
            </form>
          </ContactForm>
        </InnerContact>
      </Container>
    </StyledContact>
  )
}
