import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const Projects = () => {
  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                subtitle
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    return (
        <Layout>
          <Head title="Projects" />
          <h1>Projects</h1>
          <p>Thanks for visiting my portfolio website. This site is a great starting point to showcase what web development skills (and a few life skills) I can bring to the table. Take a look around and please reach out to me directly if you would like to learn more!</p>
          <ol className={blogStyles.posts}>
            {
              data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <li className={blogStyles.post}>
                    <Link to={`/projects/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.subtitle}</p>
                    </Link>
                  </li>
                )
              })
            }
          </ol>
        </Layout>
    )
}

export default Projects