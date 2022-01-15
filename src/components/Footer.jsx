import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/footer.module.css"

const Footer = () => {
  const iconSize = 72
  const onClickHandler = url => {
    window.open(url, "_blank")
  }

  const mailMessage = () => {
    window.open("mailto:nnieto.dev@gmail.com")
  }

  return (
    <footer className={styles.footer}>
      <Link to="mailto:nnieto.dev@gmail.com" target="_blank">
        <StaticImage
          alt="Mail Icon"
          src="../images/email.png"
          placeholder="blurred"
          width={iconSize}
          title="Mail: nnieto.dev@gmail.com"
        />
      </Link>

      <Link to="https://github.com/NNieto25" target="_blank">
        <StaticImage
          alt="GitHub icon"
          src="../images/GitHub.png"
          placeholder="blurred"
          width={iconSize}
          title="GitHub Profile"
        />
      </Link>

      <Link to="https://github.com/NNieto25" target="_blank">
        <StaticImage
          alt="LinkedIn icon"
          src="../images/linkedin.png"
          placeholder="blurred"
          width={iconSize}
          title="LinkedIn Profile"
        />
      </Link>

      <Link to="/resume.pdf" target="_blank">
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
