import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query IconQuery {
    image1: file(relativePath: { eq: "coffeeicon.png" }) {
      childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
      }
    },
    image2: file(relativePath: { eq: "uxuiicon.png" }) {
      childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    image3: file(relativePath: { eq: "lighticon.png" }) {
      childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`)

    return (
        
      <Layout>
        <div className="grid-container">
          <Img fluid={data.image1.childImageSharp.fluid} className="icon-img grid-items" />
          <h2 className="grid-items">Web Developer</h2>
          <Img fluid={data.image2.childImageSharp.fluid} className="icon-img grid-items" />
          <h2 className="grid-items">Artist</h2>
          <Img fluid={data.image3.childImageSharp.fluid} className="icon-img grid-items" />
          <h2 className="grid-items">Business Associate</h2>
        </div>
        <p>Thanks for visiting my portfolio website. This site is a great starting point to showcase what web development skills (and a few life skills) I can bring to the table. Take a look around and please reach out to me directly if you would like to learn more!</p>
      </Layout>
    )
}

export default IndexPage
