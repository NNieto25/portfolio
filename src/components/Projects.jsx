import React from "react"
import ProjectCard from "./ProjectCard"
import * as styles from "../styles/projects.module.css"

const Projects = ({ images }) => {
    console.log(images);
  const projects = [
    {
      name: "Password Generator",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "TypeScript"],
      description:
        "Web App for creating random and strong passwords. I've used it for renewing all my accounts' passwords.",
      live: "https://nnieto25.github.io/Password-Generator/",
      repo: "https://github.com/NNieto25/Password-Generator",
      photo: images.edges[2].node.childImageSharp,
    },
    {
      name: "Social Network",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS"],
      description:
        "Web app of a social network where you can manage a CRUD for your user post, you can give a like, comment, and save a post of anybody.",
      live: "https://nestornieto.github.io/pw/",
      repo: "https://github.com/NestorNieto/pw",
      photo: images.edges[0].node.childImageSharp,
    },
    {
      name: "Star Wars Manager",
      technologies: ["HTML", "CSS", "JavaScript"],
      description:
        "This project is a Star Wars manager where you can see a wide variety of starships and select the people to be aboard.",
      live: "https://nnieto25.github.io/StarWarsManager/",
      repo: "https://github.com/NNieto25/StarWarsManager",
      photo: images.edges[1].node.childImageSharp,
    },
    {
      name: "Portfolio",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Gatsby"],
      description: "My own website, right where you are 😳.",
      live: "https://nnieto.dev/",
      repo: "https://github.com/NNieto25/portfolio",
      photo: images.edges[3].node.childImageSharp,
    },
  ]

  return (
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#F8FAFB" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,138.7C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>

      <h2 data-aos="fade-left" data-aos-once="true">
        Projects
      </h2>
      <div className={styles.projects_container}>
        {projects.map(project => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  )
}

export default Projects
