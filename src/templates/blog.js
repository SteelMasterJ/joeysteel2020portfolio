import React from 'react'
import { graphql } from 'gatsby'


import Layout from '../components/layout'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                subtitle
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
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} className="project-body"></div>
        </Layout>
    )
}

export default Blog