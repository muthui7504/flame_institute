import React from 'react'
import Navbar from '../Navbar'
import '../Pages.css'
import Footer from '../../Components/Footer/Footer'
import { IoMdDownload } from "react-icons/io";


const  Ministry = () => {
  return (
    <div>
       <div>
      <div>
      <Navbar></Navbar>
      <div className="elements">
        <h2>Ministry Accredation Program(MAP)</h2>
        <h4>This program targets church leaders and ministers. It will be a 12 month program with the following units: 
</h4>
        <div className="list">
        <div className="list-items1">
          <li>Month 1 - Introduction to Ministry </li>
          <li>Month 2 - The Personal Calling </li>
          <li>Month 3 - Vision Casting   </li>
          <li>Month 4 - Growth Dynamics  </li>
          <li>Month 5 - Maintaining Unity </li>
          <li>Month 6 - Ministers and Leaders  </li>
          <li>Month 7 - The Pastoral Ministry</li>
          <li>Month 8 - Departments and Programs</li>
          <li>Month 9 - Organizational Capacity </li>
          <li>Month 10 - Financial Stewardship </li>
          <li>Month 11 - Resources and Projects </li>
          <li>Month 12 - Church Planting  </li>
        </div>
       
        <div className="list-item2">
            <h3>Investment:</h3>
            <h4>Registration Sh. 200.00</h4>
            <h4>Fees Sh. 500/month </h4>
            <h4>Certificate Sh. 800.00</h4>
            <h4>Total Sh. 7000.00</h4>
            <a href="https://www.dropbox.com/scl/fi/e6dl8q4hsuocev9do3h1t/map-flier.pdf?rlkey=xczquxvcx8v2hbst1kkfppi48&st=u5mj9j04&dl=1" className='btn'>Download PDF document<IoMdDownload /></a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </div>
    </div>
  )
}

export default Ministry
