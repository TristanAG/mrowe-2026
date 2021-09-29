import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="four columns ft" style={{"textAlign":"left"}}>
          Marianne B. Rowe, MS
          <br />
          CA Lic. # MFC 22067<br />
          <a href="tel:8313731017">(831) 373-1017</a>
          <br />

        </div>
        <div className="three columns ft" style={{"textAlign":"left"}}>
          PO Box 52089
          <br />
          Pacific Grove CA 93950
        </div>

        <div className="five columns last">

          Marianne is a Founding Teacher of <br /><a href="http://montereybaymeditation.com" target="_none">Monterey Bay Meditation Studio</a>

        </div>
      </div>
      <div className="row">
        <p className="notice">The information on this website is intended for educational purposes only. It is not a substitute for professional care.</p>
        <p className="notice">Please note: All of Marianne’s therapy and meditation sessions, workshops, retreats, and Forest Bathing experiences are held on Zoom, the telephone, or outdoors. Most outdoor sessions are held in Pacific Grove, CA. Other locations may be available by special arrangement</p>

      </div>
    </div>
  </footer>
)

export default Footer
