import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/footer.module.css"

const Footer = () => {
  const iconSize = 72;

  return (
    <footer className={styles.footer}>
      <a href="mailto:nnieto.dev@gmail.com" target="_blank" rel="noreferrer">
        <StaticImage
          alt="Mail Icon"
          src="../images/email.png"
          placeholder="blurred"
          width={iconSize}
          title="Mail: nnieto.dev@gmail.com"
        />
      </a>

      <Link to="https://github.com/NNieto25" target="_blank" rel="noreferrer">
        <StaticImage
          alt="GitHub icon"
          src="../images/GitHub.png"
          placeholder="blurred"
          width={iconSize}
          title="GitHub Profile"
        />
      </Link>

      <Link to="https://github.com/NNieto25" target="_blank" rel="noreferrer">
        <StaticImage
          alt="LinkedIn icon"
          src="../images/linkedin.png"
          placeholder="blurred"
          width={iconSize}
          title="LinkedIn Profile"
        />
      </Link>

      <Link to="https://nnieto.dev/Resume.pdf" target="_blank" rel="noreferrer">
        <StaticImage
          alt="Resume icon"
          src="../images/cv.png"
          placeholder="blurred"
          width={iconSize}
          title="Resume"
        />
      </Link>
    </footer>
  )
}

export default Footer
