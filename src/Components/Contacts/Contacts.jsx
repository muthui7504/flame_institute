import React from 'react'
import './Contacts.css'
import { FaMessage } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import '../Title/Title.css'




const Contacts = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd2eb78a-03a8-4861-a5a1-6780f940b2c2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <div>
  <div className="container">
    <div className="title">
        <p>Contact Us</p>
        <h2>Get in Touch</h2>
    </div>
    <div className='contacts'>
        <div className="contacts-col">
            <h3>Send US a Message <a><FaMessage /></a></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fuga nulla at provident est ea nihil id deserunt qui similique consequatur iste molestias dicta alias? Odio similique modi expedita ut?</p>
            <ul>
                <li><a><IoMailUnread/></a>flameinstituteandtherapy@gmail.com</li>
                <li><a><FaPhoneAlt/></a>07453223399</li>
                <li> <a><FaLocationDot/></a>Green House, Ndagani <br /> Chuka, Kenya</li>
            </ul>
        </div>
        <div className="contacts-col">
          <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input type="text" name='name' placeholder='Enter your Name'
              required />
              <label>Phone Number</label>
              <input type="tel" name='phone' placeholder='Enter your mobile number'
              required />
              <label>Write Your Message here</label>
              <textarea name="message"  rows="6" placeholder='Enter your Message' required ></textarea>
              <button type='submit' className='btn dark-btn'>Submit Now <a><FaArrowRight /></a></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contacts
