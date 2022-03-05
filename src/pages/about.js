import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Head from '../components/head'

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
            <Head title="About" />
            <div className="about-items">
                <div style={{marginRight: "4rem"}}>
                    <h1>Joseph Walker Steel IV</h1>
                    <Img fluid={data.image1.childImageSharp.fluid} className='profile-pic'/>
                    <p style={{color: "#555"}}>Change is constant, especially now, and the world needs people capable and willing to embrace this dynamic.</p>
                    <p style={{color: "#555"}}>My name is Joey, and I'm proud to say I'm a lifelong learner. Some like to call this a 'growth mindset', but I like to say its more of an outlook on life that embraces the endless chase towards betterment. I've spent the early part of my career building my business skills, and in the last two years I've taken on my next challenge, web development. Please feel free to reach out if you would like to talk about how my unique skill set can help you.</p>
                </div>
                <div>
                    <h3 style={{marginBottom: ".2rem"}}>Skills & Tools</h3>
                    <Fade right cascade>
                        <ul>
                            <li className="skills-li">JavaScript</li>
                            <li className="skills-li">CSS</li>
                            <li className="skills-li">HTML</li>
                            <li className="skills-li">TypeScript</li>
                            <li className="skills-li">Vue.js</li>
                            <li className="skills-li">React</li>
                            <li className="skills-li">Node.js</li>
                            <li className="skills-li">Git</li>
                            <li className="skills-li">Next.js</li>
                            <li className="skills-li">Gatsby</li>
                            <li className="skills-li">Bootstrap</li>
                            <li className="skills-li">APIs/GraphQL</li>
                            <li className="skills-li">Adobe CC</li>
                            <li className="skills-li">jQuery</li>
                            <li className="skills-li">Drums</li>
                            <li className="skills-li">Backpacking</li>
                            <li className="skills-li">Guitar</li>
                        </ul>
                    </Fade>
                    
                    
                    <h3>Contact</h3>
                    <Slide right>
                        <p style={{color: "#555"}}>joseph.steel.iv@gmail.com</p>
                    </Slide>
                    
                </div>
            </div>
        </Layout>
    )
}

export default About