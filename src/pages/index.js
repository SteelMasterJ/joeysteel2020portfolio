import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image";
import Head from '../components/head'

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
        <Head title="Home" />

          <div className="grid-container" style={{paddingTop: '5rem'}}>
            <div className="flex-grid-item">
              <Link to='/projects' style={{textDecoration: "none"}}>
                <Img fluid={data.image1.childImageSharp.fluid} className="grid-items icon-img" />
                <h2 className="grid-items" style={{color: "black"}}>Web Developer</h2>
              </Link>
            </div>
            <div className="flex-grid-item">
              <Link to='/about' style={{textDecoration: "none"}}>
                <Img fluid={data.image2.childImageSharp.fluid} className="icon-img grid-items" />
                <h2 className="grid-items" style={{color: "black"}}>Artist</h2>
              </Link>
            </div>
            <div className="flex-grid-item">
              <Link to='/about' style={{textDecoration: "none"}}>
                <Img fluid={data.image3.childImageSharp.fluid} className="icon-img grid-items" />
                <h2 className="grid-items" style={{color: "black"}}>Business Associate</h2>
              </Link>
            </div>
          </div>
      </Layout>
    )
}

export default IndexPage
