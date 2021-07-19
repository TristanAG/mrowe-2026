import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
  <Seo title="Contact" />

  <h1>Location and Contact</h1>

<h2>Phone</h2>
<p>
Please call to make an Appointment:
<br />
<a href="tel:8313731017">(831) 373-1017</a>
<br />
Your call will be returned as soon as possible (usually within 24 hours).<br/>
Please contact Marianne by telephone/voicemail only. In service of confidentiality and reliability, she chooses not to use email or text for communication with clients.
</p>

<h2>Sessions</h2>
<p>
Tuesday - Thursday: 10:00 a.m. - 6:00 p.m.


</p>
<p>
All sessions are held on Zoom videoconference, by telephone,
or at a designated outdoor location.

</p>

  </Layout>
)

export default Contact
