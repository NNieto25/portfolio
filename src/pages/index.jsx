import React from "react"
import "../styles/global.css"
import Presentation from "../components/Presentation"
import About from "../components/About"
import Skills from "../components/Skills"
import { graphql } from "gatsby"

export default function Home({data}) {
  return (
    <>
    <Presentation/>
    <About/>
    <Skills data = {data} />
    </>
  )
}

export const pageQuery = graphql`
query skills {
  allFile(filter: {sourceInstanceName: {eq: "skills"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(width: 132)
        }
        name
      }
    }
  }
}

`
