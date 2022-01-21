import React from "react"
import * as styles from "../styles/about.module.css"
import { StaticImage } from "gatsby-plugin-image"
import "aos/dist/aos.css"

const About = () => {
  return (
    <section>
      <h2 data-aos="fade-left" data-aos-once="true">About Me</h2>
      <div className={styles.section_container}>
        <div className={styles.section} data-aos="fade-up">
          <StaticImage
            src="../images/diamond.png"
            alt="A diamond"
            placeholder="blurred"
            width={250}
            
          />
          <h3>Passionate</h3>
          <p>I love to learn new things every time, I'm not afraid of building complex apps, constantly challenging myself while enjoying the process.</p>
        </div>

        <div className={styles.section} data-aos="fade-up" data-aos-delay="300">
        <StaticImage
            src="../images/group.png"
            alt="Three people"
            placeholder="blurred"
            width={250}
          />
          <h3>Team Player</h3>
          <p>I'm, almost every time,  the project leader; the person you can ask for the next thing to do or something you don't understand. When I am not, I try to come up with ideas or solutions.</p>
        </div>

        <div className={styles.section} data-aos="fade-up" data-aos-delay="600">
        <StaticImage
            src="../images/coffee.png"
            alt="A coffee cup"
            placeholder="blurred"
            width={250}
            
          />
          <h3>Coffee Lover</h3>
          <p>I love to play Videogames, watch sports, especially soccer, and enjoy the details, I'm always watching or figuring out how things can work as it does.</p>
        </div>
      </div>
    </section>
  )
}

export default About
