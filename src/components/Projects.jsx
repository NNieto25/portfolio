import React from "react"
import ProjectCard from "./ProjectCard";
import * as styles from "../styles/projects.module.css"
const Projects = ({images}) => {
    const projects = [
        {
            name: "Password Generator",
            technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "TypeScript"],
            description: "Web App for creating random and strong password. I’ve used it for renew all my accounts passwords. ",
            live: "https://nnieto25.github.io/Password-Generator/", 
            repo: "https://github.com/NNieto25/Password-Generator",
            photo: images.edges[2].node.childImageSharp
        },
        {
            name: "Social Network",
            technologies: ["HTML", "CSS", "JavaScript", "ReactJS"],
            description: "Web app of a social network where you can manage a CRUD for your own user post, you can give a like, comment, and save a post of anybody.",
            live: "https://nestornieto.github.io/pw/", 
            repo: "https://github.com/NestorNieto/pw",
            photo: images.edges[0].node.childImageSharp
        },
        {
            name: "Star Wars Manager",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "This project is a Star Wars manager where you can see a wide variety of starships and select the people to be aboard.",
            live: "https://nnieto25.github.io/StarWarsManager/", 
            repo: "https://github.com/NNieto25/StarWarsManager",
            photo: images.edges[1].node.childImageSharp
        },
        {
            name: "Portfolio",
            technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Gatsby"],
            description: "My own web page, just where you are 😳.",
            live: "http://localhost:8000/", 
            repo: "https://github.com/NNieto25/portfolio",
            photo: images.edges[3].node.childImageSharp
        }
    ]

    return (
        <section>
            <h2>Projects</h2>
            <div className={styles.projects_container}>
                {projects.map(project => <ProjectCard project={project} key={project.name} />)}
            </div>
        </section>
    )
}

export default Projects;