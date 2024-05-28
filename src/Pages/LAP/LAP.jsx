import React from 'react'
  import Navbar from '../Navbar'
import '../Pages.css'
import Footer from '../../Components/Footer/Footer'
import { IoMdDownload } from "react-icons/io";


function LAP() {
  return (
    <div>
    <Navbar></Navbar>
    <div className="elements">
      <h2>Leadership Accreditation Program (LAP)</h2>
      <h4>This Program Targets EMERGING  Leaders in all sectors of the society - Ministry, Academics, Bussiness, Governance </h4>
      <div className="list">
        <div className="list-items1">
          <li>Month 1 - Redefined Leadership</li>
          <li>Month 2 - Leadership Mindset</li>
          <li>Month 4 - Leadership Function  </li>
          <li>Month 5 - Leadership Styles </li>
          <li>Month 5 - Personal Development </li>
          <li>month 6 - Spiritual Leadership </li>
          <li>Month 7 - Strategic Leadership</li>
          <li>Month 8 - Leadership Network </li>
          <li>Month 9 - Decision Making </li>
          <li>Month 10 - Resource Stewardship   </li>
          <li>Month 11 - Failures in Leadersip </li>
          <li>Month 12 -  Leadership Legacy </li>

        </div>
        <div className="list-item2">
          <h3>Investment:</h3>
          <h4>Registration Sh. 100.00</h4>
          <h4>Fees Sh. 200/month </h4>
          <h4>Certificate Sh. 500.00</h4>
          <h4>Total Sh. 3000.00</h4>
          <a href="https://dropbox.com/scl/fi/xb13e0qas848arrxjctai/lap.pdf?rlkey=jmgrfhihdkjlo8bwoiu1ums5u&st=nxjxgwq8&dl=1" className='btn'>Download PDF document<IoMdDownload /></a>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  
  )
}

export default LAP
