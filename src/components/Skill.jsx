import { GatsbyImage} from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/skill.module.css"

const Skill = ({data}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.circle}>
                <GatsbyImage
                    image={data.childImageSharp.gatsbyImageData}
                    alt="logo"
                    placeholder="blurred"
                    width={132}
                />
            </div>
            <p>{data.name}</p>
        </div>
    )
}

export default Skill;