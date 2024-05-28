import React from 'react'
import '../Pages.css'
import Navbar from '../Navbar'
import Footer from '../../Components/Footer/Footer'


const Couples = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="elements">
        <h2>Couple Accredation Program</h2>
        <h4>This program targets couples that are preparing for Marriage and those who are already married. The following areas will be handled extensively in a period of 6 months. </h4>
        <div className="list">
          <div className="list-items1">
            <li>Month 1: Personality, Identity and Character </li>
            <li>Month 2: Background, Culture and Faith </li>
            <li>Month 3: Communication and Relating </li>
            <li>Month 4: Finances, Resources and Investemnts </li>
            <li>Month 5: Family and Social Relationships </li>
            <li>Month 6: Geneder, Sexuality, and Intimacy </li>
          </div>
          <div className="list-item2">
            <h3>Investment:</h3>
            <h4>Registration Sh. 500.00</h4>
            <h4>Fees Sh. each partner 1000/ Month</h4>
            <h4>Certificate Sh. 500.00</h4>
            <h4>Total Sh. 7000.00</h4>

          </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Couples
