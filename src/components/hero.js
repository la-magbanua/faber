import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'
import Container from './container'
import Button from './button'
import BigBox from '../../static/images/big-box.png'
import MiniBox from '../../static/images/mini-box.png'

const StyledHero = styled.section`
  width: 100%;
  padding: 1rem 0 5rem 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.offWhite};
`

const InnerHero = styled.div`
  display: flex;
  align-items: center;
`

const HeroDetails = styled.div`
  max-width: 700px;
  margin-right: 5rem;

  h1 {
    margin: 0;
    font-size: 3.5rem;
    line-height: ${({ theme }) => theme.lineheights.heading};
  }

  p {
    line-height: ${({ theme }) => theme.lineheights.body};
    margin-bottom: 3.5rem;
  }
`

const HeroImageContainer = styled.div`
  max-width: 400px;
  margin: 0;
  flex-grow: 1;
  position: relative;
  background: coral;
  z-index: 9;

  .mini-box {
    position: absolute;
    top: -10px;
    left: -10px;
    display: block;
    z-index: -1;
  }

  .big-box {
    position: absolute;
    bottom: -20px;
    right: -20px;
    display: block;
    z-index: -1;
  }
`

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "hero-building.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledHero>
      <Container>
        <InnerHero>
          <HeroDetails>
            <h1>Trusted investment vehicle for your company.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              rerum, illo iste praesentium facilis ipsa quas accusantium
              consequuntur unde tempore!
            </p>
            <Button withIcon>
              Learn More <BsArrowRight size="1.2rem" />
            </Button>
          </HeroDetails>
          <HeroImageContainer>
            <img src={MiniBox} alt="blue mini box" className="mini-box" />
            <Img
              fluid={data.heroImg.childImageSharp.fluid}
              alt="blue building"
            />
            <img src={BigBox} alt="blue big box" className="big-box" />
          </HeroImageContainer>
        </InnerHero>
      </Container>
    </StyledHero>
  )
}
