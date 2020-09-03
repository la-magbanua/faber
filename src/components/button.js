import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 1.1px;

  ${props =>
    props.withIcon &&
    css`
      display: flex;
      align-items: center;

      svg {
        margin-left: 1rem;
        transition: 0.25s all ease;
      }

      &:hover {
        svg {
          transform: translateX(3px);
        }
      }
    `};
`

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}
