import React from 'react'
import Navbar from '../Navbar'
import '../Pages.css'

const Courses = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="elements">
        <h2>Short Courses</h2>
        <div className="list">
          <div className="list-items1">
            <li>High school holiday mentorship with Tailored Curriculum </li>
            <li>PreUniversity Orientation Programs for Career Choice and University Life </li>
            <li>Couples Seminars with Topical and Emerging Issues handled </li>
            <li>Parenting Short Courses targeting Specific Areas of Inteerest eg Children and Technology. </li>
            <li>Leaders Training from Corporate, Academic and Ministry Space </li>
            <li>Gender Specific Course eg Masulinity/Fatherhood and Femininity/ Motherhood</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
