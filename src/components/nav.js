import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import NavList from "./nav-list"

const Nav = () => (
  <>
    <aside>
      <div id="nav-unfixed">
        <NavList />
      </div>

      <div id="nav-fixed">
        <NavList />
      </div>
    </aside>

    <div id="nav-mobile">
      <center>
        <div id="menu-button">
          <hr />
          <span id="menu-button-button">MENU</span>
          <div id="mobile-menu">
            <NavList />
          </div>
          <hr />
        </div>
      </center>
    </div>
  </>
)


export default Nav
