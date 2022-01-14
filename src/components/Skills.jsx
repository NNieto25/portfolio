import React from "react";
import Skill from "../components/Skill"
import { graphql } from "gatsby";
import * as styles from "../styles/skills.module.css"
const Skills = ({data}) => {
    console.log(data);
    return (
        <section>
            <h2>Technical Skills</h2>
            <div className={styles.skills_container}>
            {data.allFile.edges.map((edge) => (
                <Skill data = {edge.node}/>
            ))}
            </div>
        </section>
    )
}

export default Skills;