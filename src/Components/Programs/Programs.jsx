import React from 'react'
import './Programs.css'
import program_2 from '../../assets/program_2.jpg'
import program_1 from '../../assets/program_1.jpg'
import program_3 from '../../assets/program_3.jpeg'
import program_4 from '../../assets/program_4.jpeg'
import program1 from '../../assets/program2.png'
import program2 from '../../assets/program1.png'
import program3 from '../../assets/program3.png'
import program4 from '../../assets/program4.png'
import leader from '../../assets/leader.jfif'
import { Link } from 'react-router-dom';
import '../Title/Title.css'
import lap from '../../assets/lap.png'
import packages from '../../assets/packeges.png'
import picon from '../../assets/packagesi.png'



function Programs() {
  return (
    <div>
    <div className="container">
        <div className="title">
            <p>OUR PROGRAMS</p>
            <h2>What we offer</h2>
        </div>
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program2} alt="" />
                <h3> Ministry Acredation Program(MAP)</h3>
                <p>This program will target church leaders and ministers</p>
                <Link to='/ministry' offse= {-260} className='btn'>Learn more</Link>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program1} alt="" />
                <h3>Couples Acredation Program(CAP)</h3>
                <p>This Program will target couples that are preparing for marriage and those that are already married</p>
                <Link to='/Couples' className='btn'>Learn more</Link>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program3} alt="" />
                <h3>First Ladies Acredation Program(FLAP)</h3>
                <p>This Program will target couples to ministers - Bishops, Apostles, Revs, Pastors and Assistant Pastors</p>
                <Link to='/Ladies' className='btn'>Learn more</Link>
                
            </div>
        </div>
        <div className="program">
            <img src={leader} alt="" />
            <div className="caption">
                <img src={lap} alt="" />
                <h3>Leadership Accreditation Program(LAP)</h3>
                <p>This Program Targets EMERGING  Leaders in all sectors of the society - Ministry, Academics, Bussiness, Governance</p>
                <Link to='/lap' className='btn'>Learn more</Link>
            </div>
            
        </div><div className="program">
            <img src={packages} alt="" />
            <div className="caption">
                <img src={picon} alt="" />
                <h3>Computer Package Training</h3>
                <p></p>
                <Link to='/packages' className='btn'>Learn more</Link>
            </div>
            
        </div>
        <div className="program">
            <img src={program_4} alt="" />
            <div className="caption">
                <img src={program4} alt="" />
                <h3>Short Courses</h3>
                <p></p>
                <Link to='/Courses' className='btn'>Learn more</Link>
            </div>
        </div>

        
    </div>
    </div>
    </div>
  )
}

export default Programs
