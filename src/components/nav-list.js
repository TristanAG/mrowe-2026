import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavList = () => (
  <ul>
    <li><a href="http://www.mariannerowe.net/">Home</a></li>
    <li><Link to="/services-and-specialties/">Services and Specialties</Link></li>
    <li><Link to="/about-marianne/">About Marianne</Link></li>
    <li><Link to="/fees-forms-and-insurance/">Fees, Forms, and Insurance</Link></li>
    <li><Link to="/courses-retreats-and-special-events/">Courses, Retreats, and Special Events</Link></li>
    <li><Link to="/questions-for-reflection/">Questions for Reflection</Link></li>
    <li><Link to="/contact/">Contact</Link></li>
    <li><Link to="/faqs/">FAQs</Link></li>
  </ul>
)


export default NavList
