import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Container from './container'

const StyledMission = styled.section`
  width: 100%;
  padding: 5rem 0;
`

const InnerMission = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MissionImage = styled.div`
  max-width: 400px;
  flex-grow: 1;
`

const MissionDetails = styled.div`
  margin-left: 8rem;
  max-width: 500px;

  p {
    line-height: ${({ theme }) => theme.lineheights.body};
    color: ${({ theme }) => theme.colors.primary};
    opacity: 87%;
  }
`

const MissionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
`

const Line = styled.span`
  display: block;
  width: 100px;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent};
`

export default function Mission() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mission-building.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledMission>
      <Container>
        <InnerMission>
          <MissionImage>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="mission building"
            />
          </MissionImage>
          <MissionDetails>
            <Line />
            <MissionTitle>Our Mission</MissionTitle>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, quibusdam, obcaecati, similique iste dolore maxime
              excepturi vitae iure veniam repudiandae voluptates maiores velit
              aliquid? Nostrum, pariatur quam! Asperiores consectetur minima est
              error repudiandae facilis animi saepe, aliquid libero. Sunt,
              reprehenderit.
            </p>
          </MissionDetails>
        </InnerMission>
      </Container>
    </StyledMission>
  )
}
