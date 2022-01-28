import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../styles/presentation.module.css"
const Presentation = ({ image }) => {
  console.log(image)
  return (
    <section className={styles.presentation}>
      <GatsbyImage
        image={image.edges[0].node.childImageSharp.gatsbyImageData}
        alt="Illustration of a person."
        placeholder="blurred"
        width={132}
      />
      <div
        className={styles.front_title}
      >
        <h1 data-aos="flip-down"
        data-aos-once="true">Hi, I'm Nestor Nieto</h1>
        <p className="subtitle" data-aos="flip-up" data-aos-once="true" data-aos-delay="1000"> Front End Developer</p>
      </div>
    </section>
  )
}

export default Presentation
