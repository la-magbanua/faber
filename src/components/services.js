import React from 'react'
import styled from 'styled-components'
import { FiArrowRightCircle } from 'react-icons/fi'
import Container from './container'

const StyledServices = styled.section`
  padding: 5rem 0;
  margin-bottom: 5rem;
`

const InnerServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 420px) {
    h2 {
      text-align: center;
      margin-bottom: 3rem;
    }
  }
`

const ServicesList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 3rem;

  div {
    position: relative;
    display: flex;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 5px 20px rgba(33, 43, 97, 0.15);
    margin: 0 0.5rem;
    cursor: pointer;

    h3 {
      font-size: 2rem;
      background-color: ${({ theme }) => theme.colors.secondary};
      background-image: ${({ theme }) => theme.colors.gradient};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      margin-bottom: 1rem;
    }

    p {
      text-align: center;
      padding: 0 1rem;
      opacity: 87%;
      font-size: 0.875rem;
      line-height: ${({ theme }) => theme.lineheights.body};
    }

    span {
      position: absolute;
      display: block;
      bottom: 10px;
      right: 20px;
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media screen and (max-width: 769px) {
    grid-gap: 1rem;

    div {
      p {
        font-size: 13px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    div {
      height: 250px;

      h3 {
        margin-top: 0;
      }
    }
  }
`

export default function Services() {
  return (
    <StyledServices>
      <Container>
        <InnerServices>
          <h2>All the support that you need</h2>
          <ServicesList>
            <div>
              <h3>Investment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                illum voluptatibus?
              </p>
              <span>
                <FiArrowRightCircle size="1.5rem" />
              </span>
            </div>
            <div>
              <h3>Loan</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                illum voluptatibus?
              </p>
              <span>
                <FiArrowRightCircle size="1.5rem" />
              </span>
            </div>
            <div>
              <h3>Gains</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                illum voluptatibus?
              </p>
              <span>
                <FiArrowRightCircle size="1.5rem" />
              </span>
            </div>
          </ServicesList>
        </InnerServices>
      </Container>
    </StyledServices>
  )
}
