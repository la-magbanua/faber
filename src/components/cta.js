import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Container from './container'
import Button from './button'

const StyledCTA = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.offWhite};

  @media screen and (max-width: 420px) {
    padding: 5rem 0 8rem 0;
  }
`

const InnerCTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 769px) {
    flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`

const CTAImage = styled.div`
  max-width: 450px;
  flex-grow: 1;
  position: relative;

  @media screen and (max-width: 769px) {
    max-width: 600px;
    width: 100%;

    .people-img {
      height: 450px;
    }
  }

  @media screen and (max-width: 420px) {
    width: 100%;

    .people-img {
      width: 100%;
      height: auto;
    }
  }
`

const CTADetails = styled.div`
  max-width: 500px;
  margin-left: 5rem;
  margin-bottom: 5rem;

  h2 {
    font-size: 2.5rem;
  }

  p {
    line-height: ${({ theme }) => theme.lineheights.body};
    opacity: 87%;
    font-size: 0.875rem;
  }

  @media screen and (max-width: 769px) {
    margin: 6rem 0 0 0;
    max-width: 600px;
  }

  @media screen and (max-width: 420px) {
    margin: 3.5rem 0 0 0;
  }
`

const Line = styled.span`
  display: block;
  width: 100px;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent};
`

const CTAButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: -20%;
  padding: 1.5rem 3rem;

  svg {
    margin-left: 3rem;
  }

  @media screen and (max-width: 769px) {
    right: 50%;
    bottom: -30px;
    transform: translateX(50%);
  }

  @media screen and (max-width: 420px) {
    right: 50%;
    bottom: -20px;
    transform: translateX(50%);
  }
`

export default function CTA() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "people.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledCTA>
      <Container>
        <InnerCTA>
          <CTAImage>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="people doing business"
              className="people-img"
            />
            <CTAButton withIcon>
              Contact Us <BsArrowRight size="1.5rem" />
            </CTAButton>
          </CTAImage>
          <CTADetails>
            <Line />
            <h2>Moving forward, together.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              illo nulla, reiciendis minima inventore velit autem atque harum
              incidunt! Adipisci consequuntur qui nesciunt porro error aut
              iusto, necessitatibus nobis, cumque eum earum maiores rerum ipsam
              at molestiae, ut molestias facilis. Libero inventore neque ullam
              dolor sapiente harum distinctio veritatis debitis?
            </p>
          </CTADetails>
        </InnerCTA>
      </Container>
    </StyledCTA>
  )
}
