import React from 'react'
import styled from 'styled-components'
import Container from './container'

const StyledCompanies = styled.section`
  padding: 5rem 0;
`

const InnerCompanies = styled.div`
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
    }
  }
`

const CompaniesList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 4rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    color: ${({ theme }) => theme.colors.offWhite};
    background: ${({ theme }) => theme.colors.gradient};

    h3 {
      font-size: 1.5rem;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      opacity: 80%;
    }
  }

  @media screen and (max-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 2rem;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`

export default function Companies() {
  return (
    <StyledCompanies>
      <Container>
        <InnerCompanies>
          <h2>You are in good company</h2>
          <CompaniesList>
            <div>
              <h3>Nano Wing</h3>
              <p>San Francisco</p>
            </div>
            <div>
              <h3>Four by Four</h3>
              <p>Lisbon</p>
            </div>
            <div>
              <h3>Schift</h3>
              <p>Berlin</p>
            </div>
            <div>
              <h3>Blue Steel</h3>
              <p>Tokyo</p>
            </div>
          </CompaniesList>
        </InnerCompanies>
      </Container>
    </StyledCompanies>
  )
}
