import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image";
import Head from '../components/head'

const LinksPage = () => {
  const data = useStaticQuery(graphql`
      query SFQuery {
          image1: file(relativePath: { eq: "SmallerPromo.png" }) {
              childImageSharp {
                  fluid(maxWidth: 550) {
                      ...GatsbyImageSharpFluid
                  }
              }
          },
          image2: file(relativePath: { eq: "cv.png" }) {
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
            <Head title="Links" />
            <h1>Links to stuff.</h1>
            <h4>My Resume</h4>
            <Link to="https://drive.google.com/file/d/1zMw1cJu4z47vOK-JiAYSbt_Pm7L-EHKT/view?usp=sharing" target="_blank">
                <Img fluid={data.image2.childImageSharp.fluid} className='profile-pic' alt="CV" style={{border: "none"}}/>
            </Link>
            <h4>My Band "Slow Fix" On Spotify</h4>
            <Link to="https://open.spotify.com/artist/4cncWMR1Es6HRLdr2rSW9e" target="_blank">
                <Img fluid={data.image1.childImageSharp.fluid} className='profile-pic' alt="Slow Fix Promo"/>
            </Link>
        </Layout>
    )
}

export default LinksPage