import React from 'react'
import './footer.module.scss'
import footerStyles from './footer.module.scss'
import {Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image";

const Footer = () => {
    const data = useStaticQuery(graphql`
    query SMQuery {
        image1: file(relativePath: { eq: "linkedin.png" }) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        },
        image2: file(relativePath: { eq: "github.png" }) {
          childImageSharp {
              fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                    }
                }
            },
        image3: file(relativePath: { eq: "email.png" }) {
          childImageSharp {
              fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                    }
                }
            }
                
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <small className={footerStyles.small}>
                <a href="mailto:joseph.steel.iv@gmail.com">
                    <Img fluid={data.image3.childImageSharp.fluid} alt="Email" className="social-icon" style={{ height: 30, width: 30}} />
                </a>
                <Link to="https://github.com/SteelMasterJ" target="_blank" >
                    <Img fluid={data.image2.childImageSharp.fluid} alt="Gihub" className="social-icon" style={{ height: 30, width: 30, marginRight: ".6rem"}}/>
                </Link>
                <Link to="https://www.linkedin.com/in/joseph-steel-6271a955/" target="_blank" >
                    <Img fluid={data.image1.childImageSharp.fluid} alt="LinkedIn" className="social-icon" style={{ height: 30, width: 30,  marginRight: ".6rem", marginLeft: ".6rem"}} />
                </Link>
                joeysteel.com ©2021
            </small>
        </footer>
    )
}

export default Footer