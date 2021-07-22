import * as React from "react"
import { Link } from "gatsby"

import ClientContactInformation from '../static/ClientContactInformation.pdf'
import ClientInformationForm from '../static/ClientInformationForm.pdf'
import ClientsRightsAndResponsibilities from '../static/ClientRightsAndResponsibilities.pdf'
import HealthInsuranceClaimForm from '../static/HCFA_1500_claim_form.pdf'
import InsuranceCoverageChecklist from '../static/InsuranceInformationChecklist.pdf'
import ClientAgreementAndReleaseForm from '../static/ClientAgreementAndReleaseForm.pdf'
import LiabilityReleaseOutdoorTherapySessions from '../static/liability_release_outdoor_therapy_sessions.pdf'

import Layout from "../components/layout"
import Seo from "../components/seo"

const FeesFormsAndInsurance = () => (
  <Layout>
    <Seo title="Fees, Forms, and Insurance" />

    <h1>Fees, Forms, and Insurance</h1>

<h2>Fees</h2>
<p>Please make payment by check payable to Marianne Rowe, mailed to PO Box 52089, Pacific Grove, CA 93950.</p>
<ul>
  <li>Initial Evaluation (50 minutes): $150</li>
  <li>Individual Session (50 minutes): $150</li>
  <li>Couples or Family Session (50 minutes): $150</li>
  <li>Mindfulness Coaching (50 minutes): $135</li>
  <li>Longer sessions are available at additional charge</li>

</ul>

<h2>Forms</h2>
<p>There are several forms <i>required before your first appointment.</i> Please complete these forms and mail them to Marianne Rowe, PO Box 52089, Pacific Grove, CA 93950. </p>

<p>
  If you will not be using Insurance Coverage/Benefits, please complete and mail the following 3 forms before your first appointment:

  <ul>
    <li>Client Information Form <a href={ClientInformationForm} download>Click to download pdf</a></li>
    <li>Client Contact Information <a href={ClientContactInformation} download>Click to download pdf</a></li>
    <li>Client Rights & Responsibilities <a href={ClientsRightsAndResponsibilities} download>Click to download pdf</a></li>
    <li>Client Agreement & Release Form <a href={ClientAgreementAndReleaseForm} download>Click to download pdf</a></li>
   </ul>
</p>

<p>
  If you will be using Insurance Coverage/Benefits, please complete and mail the following 5 forms and <i><b>a copy of both sides of your insurance card</b></i>, before your first appointment:

  <ul>
    <li>Client Information Form <a href={ClientInformationForm} download>Click to download pdf</a></li>
    <li>Client Contact Information <a href={ClientContactInformation} download>Click to download pdf</a></li>
    <li>Client Rights & Responsibilities <a href={ClientsRightsAndResponsibilities} download>Click to download pdf</a></li>
    <li>Client Agreement & Release Form <a href={ClientAgreementAndReleaseForm} download>Click to download pdf</a></li>
    <li>Health Insurance Claim Form <a href={HealthInsuranceClaimForm} download>Click to download pdf</a></li>
    <li>Insurance Coverage Checklist <a href={InsuranceCoverageChecklist} download>Click to download pdf</a></li>

  </ul>
</p>

<h2>Insurance</h2>
<p>Contract (or "In-Network") Provider benefits are available for: Anthem Blue Cross and Aspire (CHOMP) Health Plan.</p>
<p>Before making your appointment, please contact your insurance company
(using the Customer Service number on your card) to check
the Outpatient Mental Health benefits for your policy.
The Insurance Coverage Checklist (see "Printable Forms")
can be helpful in making sure you are
fully informed about your out-of-pocket expenses.</p>


  </Layout>
)

export default FeesFormsAndInsurance
