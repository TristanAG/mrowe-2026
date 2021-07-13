import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <>
    <header>

        {/* <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1> */}

    </header>
    <div class="container" id="header-content">
      <span id="name">
        <h3>Marianne B. Rowe, MS</h3>
        <h4>Marriage & Family Therapist</h4>

        <div id="summary">Psychotherapy, Ecotherapy, and Mindfulness Meditation Instruction</div>

      </span>
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
