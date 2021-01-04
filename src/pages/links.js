import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image";

const LinksPage = () => {
  const data = useStaticQuery(graphql`
      query SFQuery {
          image1: file(relativePath: { eq: "SmallerPromo.png" }) {
              childImageSharp {
                  fluid(maxWidth: 550) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

    return (
        <Layout>
          <h1>Links to stuff.</h1>
          <a href="https://open.spotify.com/artist/4cncWMR1Es6HRLdr2rSW9e" rel="noreferrer" target="_blank" className="link-style">My Band "Slow Fix" On Spotify</a>
          <Link to="https://open.spotify.com/artist/4cncWMR1Es6HRLdr2rSW9e" target="_blank">
            <Img fluid={data.image1.childImageSharp.fluid} className='profile-pic' alt="Slow Fix Promo"/>
          </Link>
        </Layout>
    )
}

export default LinksPage