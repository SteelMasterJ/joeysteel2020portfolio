import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './header.module.scss'
import headerStyles from './header.module.scss'
import Img from "gatsby-image";


const Header = () => {
    const data = useStaticQuery(graphql`
        query LogoQuery {
            image1: file(relativePath: { eq: "sitelogo.png" }) {
            childImageSharp {
                fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
                }
            }
            },
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <div>
                <h1 className={headerStyles.title}>
                    <Link to='/' className={headerStyles.title}>
                        {data.site.siteMetadata.title}
                    </Link>
                </h1>
            </div>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/links">Links</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header