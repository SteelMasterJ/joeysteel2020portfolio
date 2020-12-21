import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image";

const About = () => {
    const data = useStaticQuery(graphql`
        query PhotoQuery {
            image1: file(relativePath: { eq: "profilepic550-550.png" }) {
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
            <Img fluid={data.image1.childImageSharp.fluid} className='profile-pic'/>
            <h1>Joseph Walker Steel IV</h1>
            <p>Change is constant, especially now, and the world needs people capable and willing to embrace this dynamic.</p>
            <p>My name is Joey, and I'm proud to say I'm a lifelong learner. Some like to call this a 'growth mindset', but I like to say its more of an outlook on life that embraces the fragility of every moment, and cherishes the endless chase toward self-betterment. I've spent most of my career building business management and 'soft skills', and in the last year I've taken on my next challenge, web development. Please feel free to reach out if you would like to talk about how my unique skill set can help you.</p>
        </Layout>
    )
}

export default About