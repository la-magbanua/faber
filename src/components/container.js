import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 769px) {
    padding: 0 1.2rem;
  }

  @media screen and (max-width: 420px) {
    padding: 0 1.2rem;
  }
`

export default function Container({ children, ...props }) {
  return <StyledContainer {...props}>{children}</StyledContainer>
}
