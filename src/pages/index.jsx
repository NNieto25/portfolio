import React from "react"
import "../styles/global.css"
import Presentation from "../components/Presentation"
import About from "../components/About"
import Skills from "../components/Skills"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

export default function Home({data}) {
  console.log(data);
  return (
    <>
    <title>NNieto Portfolio</title>
    <meta name="description" content="Website of Nestor Nieto, Front End Developer."/>
    <Presentation image = {data.illustrations}/>
    <Projects images={data.project}/>
    <Skills data = {data.skills} />
    <About/>
    <Footer/>
    </>
  )
}

export const pageQuery = graphql`
query skills {
  skills: allFile(filter: {sourceInstanceName: {eq: "skills"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(width: 132)
        }
        name
      }
    }
  }

  project: allFile(filter: {sourceInstanceName: {eq: "projects"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
        name
      }
    }
  }

  illustrations: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
        name
      }
    }
  }
}
`
