import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/footer.module.css"

const Footer = () => {
  const iconSize = 72;
  const onClickHandler = (url) => {
    window.open(url, "_blank");
  }
  
  const mailMessage = () => {
    window.open("mailto:nnieto.dev@gmail.com")
  }

  return (
    <footer className={styles.footer}>
      <StaticImage
        alt="Mail Icon"
        src="../images/email.png"
        placeholder="blurred"
        width={iconSize}
        onClick={mailMessage}
        title="Mail: nnieto.dev@gmail.com"
      />

      <StaticImage
        alt="GitHub icon"
        src="../images/GitHub.png"
        placeholder="blurred"
        width={iconSize}
        onClick={() => onClickHandler("https://github.com/NNieto25")}
        title="GitHub Profile"
      />

      <StaticImage
        alt="LinkedIn icon"
        src="../images/linkedin.png"
        placeholder="blurred"
        width={iconSize}
        onClick={() => onClickHandler("https://github.com/NNieto25")}
        title="LinkedIn Profile"
      />

      <StaticImage
        alt="Resume icon"
        src="../images/cv.png"
        placeholder="blurred"
        width={iconSize}
        onClick={() => onClickHandler("/resume.pdf")}
        title="Resume"
      />
    </footer>
  )
}

export default Footer
