import React from "react";
import Skill from "../components/Skill"
import * as styles from "../styles/skills.module.css"
const Skills = ({data}) => {
    return (
        <section>
            <h2 data-aos="fade-right" data-aos-once="true"> Technical Skills</h2>
            <div className={styles.skills_container}>
            {data.edges.map((edge) => (
                <Skill data = {edge.node} key={edge.node.name}/>
            ))}
            </div>
        </section>
    )
}

export default Skills;