import React from "react"
import * as styles from "../styles/about.module.css"
import { StaticImage } from "gatsby-plugin-image"
import "aos/dist/aos.css"

const About = () => {
  return (
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F8FAFB"
          fill-opacity="1"
          d="M0,128L60,112C120,96,240,64,360,64C480,64,600,96,720,117.3C840,139,960,149,1080,144C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <h2 data-aos="fade-left" data-aos-once="true">
        About Me
      </h2>
      <div className={styles.section_container}>
        <div className={styles.section} data-aos="fade-up">
          <StaticImage
            src="../images/diamond.png"
            alt="A diamond"
            placeholder="blurred"
            width={250}
          />
          <h3>Passionate</h3>
          <p>
            I love to learn new things every time, I'm not afraid of building
            complex apps, constantly challenging myself while enjoying the
            process.
          </p>
        </div>

        <div className={styles.section} data-aos="fade-up" data-aos-delay="300">
          <StaticImage
            src="../images/group.png"
            alt="Three people"
            placeholder="blurred"
            width={250}
          />
          <h3>Team Player</h3>
          <p>
            I'm, almost every time, the project leader; the person you can ask
            for the next thing to do or something you don't understand. When I
            am not, I try to come up with ideas or solutions.
          </p>
        </div>

        <div className={styles.section} data-aos="fade-up" data-aos-delay="600">
          <StaticImage
            src="../images/coffee.png"
            alt="A coffee cup"
            placeholder="blurred"
            width={250}
          />
          <h3>Coffee Lover</h3>
          <p>
            I love to play Videogames, watch sports, especially soccer, and
            enjoy the details, I'm always watching or figuring out how things
            can work as it does.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
