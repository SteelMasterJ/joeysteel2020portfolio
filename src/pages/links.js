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
            
            <Link to="https://docs.google.com/document/d/1MXtAspclKKkcOSu9L5TZgQZmOr-Ep_IAriPMn7QSSpc/edit?usp=sharing" target="_blank" className="link-style">
                <h4 style={{marginBottom: ".4rem"}}>My Resume</h4>
                <Img fluid={data.image2.childImageSharp.fluid} className='profile-pic' alt="CV" style={{border: "none", marginLeft: "-1.4rem"}}/>
            </Link>
            
            <Link to="https://open.spotify.com/artist/4cncWMR1Es6HRLdr2rSW9e" target="_blank" className="link-style">
                <h4 style={{marginBottom: ".4rem"}}>My Band "Slow Fix" On Spotify</h4>
                <Img fluid={data.image1.childImageSharp.fluid} className='profile-pic' alt="Slow Fix Promo"/>
            </Link>
        </Layout>
    )
}

export default LinksPage