import React from 'react';
import Navbar from '../Navbar';
import '../Pages.css';
import Footer from '../../Components/Footer/Footer';
import { IoMdDownload } from 'react-icons/io';

const Packages = () => {
  return (
    <div>
      <Navbar />
      <div className="elements">
        <h2>Computer Training Programs</h2>
        <h4>Flame Institute offers the following computer training programs:</h4>
        <div className="list">
          <div className="list-items1">
            <li>MS PowerPoint</li>
            <li>MS Publisher</li>
            <li>MS Access</li>
            <li>Internet and Email</li>
            <li>MS Excel</li>
            <li>MS Word</li>
            <li>Introduction to Computers</li>
            <li>Packages training</li>
          </div>
          <div className="list-item2">
            <h3>Fees:</h3>
            <h4>Ksh 500 per package</h4>
            <h4>Ksh 3000 for the full package</h4>
            <a href="https://www.flameinstitute.com/computer-training" className='btn'>Learn More</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Packages;
