import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/presentation.module.css" 
const Presentation = () => {
  return (
    <section className={ styles.presentation }>
      <StaticImage
        src="../images/illustration.png"
        alt="Illustration of a person"
        placeholder="blurred"
        layout="fixed"
      />
      <div>
        <h1>
          Hi, I'm <br /> Nestor Nieto
        </h1>
        <p className="subtitle">Front End Developer</p>
      </div>
    </section>
  )
}

export default Presentation
