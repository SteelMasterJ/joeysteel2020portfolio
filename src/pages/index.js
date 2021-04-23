import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {

    return (
        
      <Layout>
        <Head title="Home" />

          <div className="grid-container" style={{paddingTop: '5rem'}}>
            <div className="flex-grid-item">
              <Link to='/projects' style={{textDecoration: "none"}}>
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.8333 41.5833H69.6667V32.8333H63.8333V41.5833Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90ZM23 27H69.6667C72.9042 27 75.5 29.5958 75.5 32.8333V41.5833C75.5 44.7917 72.9042 47.4167 69.6667 47.4167H63.8333V56.1667C63.8333 62.6125 58.6125 67.8333 52.1667 67.8333H34.6667C28.2208 67.8333 23 62.6125 23 56.1667V27Z" fill="black"/>
                </svg>
                <h2 className="grid-items" style={{color: "black"}}>Web Developer</h2>
              </Link>
            </div>
            <div className="flex-grid-item">
              <Link to='/about' style={{textDecoration: "none"}}>
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45C0 20.1472 20.1472 0 45 0C69.8528 0 90 20.1472 90 45ZM68.6779 49.465H71.3479V40.93H68.6779V49.465ZM70.0129 39.745C70.8979 39.745 71.4979 39.205 71.4979 38.365C71.4979 37.54 70.8979 37 70.0129 37C69.1129 37 68.5279 37.54 68.5279 38.365C68.5279 39.205 69.1129 39.745 70.0129 39.745ZM18.67 49.675C19.825 49.675 20.62 49.135 21.325 48.295H21.385L21.58 49.465H23.755V40.93H21.085V46.525C20.635 47.155 20.26 47.395 19.66 47.395C18.985 47.395 18.67 47.05 18.67 45.88V40.93H16V46.21C16 48.34 16.795 49.675 18.67 49.675ZM25.0645 49.465H27.8395L28.4244 48.115C28.6345 47.62 28.8445 47.125 29.0544 46.66H29.1295C29.3995 47.125 29.6545 47.635 29.9094 48.115L30.6895 49.465H33.5544L30.9445 45.325L33.4045 40.93H30.6445L30.1194 42.235C30.0414 42.4496 29.9577 42.6643 29.8745 42.8777C29.8262 43.0016 29.7781 43.125 29.7313 43.2477C29.7071 43.3113 29.6833 43.3746 29.66 43.4377L29.6295 43.5211C29.6072 43.5826 29.5854 43.6439 29.5645 43.705H29.4894C29.2495 43.225 29.0095 42.73 28.7844 42.235L28.0795 40.93H25.2145L27.6744 45.025L25.0645 49.465ZM64.0984 48.295C63.3934 49.135 62.5984 49.675 61.4434 49.675C59.5684 49.675 58.7734 48.34 58.7734 46.21V40.93H61.4434V45.88C61.4434 47.05 61.7584 47.395 62.4334 47.395C63.0334 47.395 63.4084 47.155 63.8585 46.525V40.93H66.5284V49.465H64.3535L64.1584 48.295H64.0984ZM47 67V22H43V67H47Z" fill="black"/>
                </svg>
                <h2 className="grid-items" style={{color: "black"}}>Artist</h2>
              </Link>
            </div>
            <div className="flex-grid-item">
              <Link to='/about' style={{textDecoration: "none"}}>
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90ZM36.8125 59.125L28.1875 50.5V36.125H62.6875V50.5L54.0625 59.125V73.5H36.8125V59.125ZM48.3125 16H42.5625V24.625H48.3125V16ZM25.0537 23.1012L21 27.155L27.095 33.25L31.1488 29.1963L25.0537 23.1012ZM65.7925 23.1012L59.6975 29.1963L63.78 33.25L69.8463 27.155L65.7925 23.1012Z" fill="black"/>
                </svg>
                <h2 className="grid-items" style={{color: "black"}}>Business Associate</h2>
              </Link>
            </div>
          </div>
      </Layout>
    )
}

export default IndexPage
