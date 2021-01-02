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
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p style={{fontStyle: "italic", color: "#555"}}>{props.data.markdownRemark.frontmatter.subtitle}</p>
            <Link to={props.data.markdownRemark.frontmatter.projectlink} target="_blank"><button className="button-link">Click here to see the project!</button></Link>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} className="project-body"></div>
        </Layout>
    )
}

export default Blog