import React from 'react'
import { graphql, Link } from 'gatsby'


import Layout from '../components/layout'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                subtitle
                projectlink
                technologies
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <div className="about-items">
                <div style={{marginRight: "4rem"}}>
                    <h1 style={{color: "black"}}>{props.data.markdownRemark.frontmatter.title}</h1>
                    <p style={{fontStyle: "italic", color: "#555"}}>{props.data.markdownRemark.frontmatter.subtitle}</p>
                </div>
                <div className="project-tech">
                    <h3 style={{marginBottom: ".75rem", color: "black"}}>Technologies</h3>
                    <ul>
                        {props.data.markdownRemark.frontmatter.technologies.map((tech) => {
                            return (
                                    <li className="skills-li" style={{marginBottom: ".2rem"}}>{tech}</li>             
                            )
                        })}
                    </ul>
                    <Link to={props.data.markdownRemark.frontmatter.projectlink} target="_blank"><button className="button-link">Click here to see it!</button></Link>
                </div>
            </div>
            
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} className="project-body"></div>
        </Layout>
    )
}

export default Blog