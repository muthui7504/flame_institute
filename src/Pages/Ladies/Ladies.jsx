import React from 'react';
import Navbar from '../Navbar';
import '../Pages.css';
import Footer from '../../Components/Footer/Footer';
import { IoMdDownload } from 'react-icons/io';

const Ladies = () => {
  return (
    <div>
      <Navbar />
      <div className="elements">
        <h2>First Ladies Acredation Program(FLAP)</h2>
        <h4>This program will target spouses to Ministers - Bishops, Apostles, Revs, Pastors and Assistant Pastors. It will be a 6 month class program on the Major Issues that Pastoral Spouses have to deal with in their day to day ministry.</h4>
        <div className="list">
          <div className="list-items1">
            <li>Month 1 - Personal Calling</li>
            <li>Month 2 - Ministry Roles / Duties</li>
            <li>Month 3 - Boundaries / Standards</li>
            <li>Month 4 - Self Care/ Grooming</li>
            <li>Month 5 - Personal Development</li>
            <li>Month 6 - Life Balance</li>
            <li>Month 7 - Finances / Investments</li>
            <li>Month 8 - Entrepreneurship</li>
            <li>Month 9 - Ministerial Relationships</li>
            <li>Month 10 - Women Ministry</li>
            <li>Month 11 - Children & Youth ministry</li>
            <li>Month 12 - Introduction to Counselling</li>
          </div>
          <div className="list-item2">
            <h3>Investment:</h3>
            <h4>Registration Sh. 200.00</h4>
            <h4>Fees Sh. 500/month</h4>
            <h4>Certificate Sh. 800.00</h4>
            <h4>Total Sh. 7000.00</h4>
            <a href="https://www.dropbox.com/scl/fi/t0ukcixq45nn5ljgavm0m/flap.pdf?rlkey=4mx54y838chx8eq3e640spyh6&st=4py4j9hc&dl=1" className='btn'>Download PDF document<IoMdDownload /></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ladies;
