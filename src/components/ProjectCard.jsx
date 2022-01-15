import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/project-card.module.css"

const ProjectCard = ({project}) => {
    const onClickHandler = (url) => {
        window.open(url, "_blank");
    } 


    return (
        <div className={styles.container}>
            <GatsbyImage
                    image={getImage(project.photo)}
                    alt="logo"
                    placeholder="blurred"
                    width={132}
                />
            <p className={styles.title}>{project.name}</p>
            <div className={styles.label_container}>
                {project.technologies.map(tech => (<span className={styles.label} key={tech}>{tech}</span>))}  
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.button_container}>
                <button className={styles.button} onClick={() => onClickHandler(project.live)}>Live demo</button>
                <button className={styles.button} onClick={() => onClickHandler(project.repo)}>Repository</button>
            </div>
        </div>
    )
};

export default ProjectCard;