import React from "react"
import Skill from "../components/Skill"
import * as styles from "../styles/skills.module.css"
const Skills = ({ data }) => {
  return (
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#293135"
          fill-opacity="1"
          d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,133.3C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <h2 data-aos="fade-right" data-aos-once="true" className={styles.title}>
        Technical Skills
      </h2>
      <div className={styles.skills_container}>
        {data.edges.map(edge => (
          <Skill data={edge.node} key={edge.node.name} />
        ))}
      </div>
    </section>
  )
}

export default Skills
