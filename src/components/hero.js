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

  @media screen and (max-width: 420px) {
    padding: 2.5rem 0 5rem 0;
  }
`

const InnerHero = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 420px) {
    padding: 0 1rem;
    flex-direction: column;
  }
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

  @media screen and (max-width: 769px) {
    max-width: 500px;
    margin-right: 2rem;

    h1 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 420px) {
    max-width: 100%;
    width: 100%;
    margin: 0;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.8;
    }
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

  @media screen and (max-width: 769px) {
    max-width: 250px;
    width: 100%;

    .big-box {
      width: 90px;
      height: 90px;
      bottom: -15px;
      right: -15px;
    }

    .hero-img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 420px) {
    margin-top: 3.5rem;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .big-box {
      width: 80px;
      height: 80px;
    }

    .hero-img {
      width: 100%;
      height: auto;
    }
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
              className="hero-img"
            />
            <img src={BigBox} alt="blue big box" className="big-box" />
          </HeroImageContainer>
        </InnerHero>
      </Container>
    </StyledHero>
  )
}
