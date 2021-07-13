/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./normalize.css"
import "./skeleton.css"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main>
        <div class="container">
          <div class="row">
            <div class="three columns">
              <aside>
                <div id="nav-unfixed">
                  <ul>
                    <li><a href="http://www.mariannerowe.net/">Home</a></li>
                    <li><a href="services-and-specialties">Services and Specialties</a></li>
                    <li><a href="about-marianne">About Marianne</a></li>
                    <li><a href="fees-forms-and-insurance">Fees, Forms, and Insurance</a></li>
                    <li><a href="courses-retreats-and-special-events">Courses, Retreats, and Special Events</a></li>
                    <li><a href="questions-for-reflection">Questions for Reflection</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="faqs">FAQs</a></li>
                  </ul>
                </div>

                <div id="nav-fixed">
                  <ul>
                    <li><a href="http://www.mariannerowe.net/">Home</a></li>
                    <li><a href="services-and-specialties">Services and Specialties</a></li>
                    <li><a href="about-marianne">About Marianne</a></li>
                    <li><a href="fees-forms-and-insurance">Fees, Forms, and Insurance</a></li>
                    <li><a href="courses-retreats-and-special-events">Courses, Retreats, and Special Events</a></li>
                    <li><a href="questions-for-reflection">Questions for Reflection</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="faqs">FAQs</a></li>

                  </ul>
                </div>
              </aside>


            </div>
            <div class="nine columns">
              <article>
                {children}
              </article>
            </div>
          </div>




        </div>

        <hr />
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
