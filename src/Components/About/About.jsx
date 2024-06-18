import React, { useState } from 'react';
import './About.css';
import Navbar from '../../Pages/Navbar';


const About = () => {
  const [cards] = useState([
    {
      title: 'Family',
      text: `This faculty will desire to reach the family to empower it for stability. The following services will be offered:`,
      list: [
        'Parenting Talks',
        'Couples Therapy',
        'Premarital Counselling',
        'Media Talks',
        'Family Literature',
        'Family Conflict Resolution'
      ]
    },
    {
      title: 'Leadership',
      text: `The target groups will be secular and spiritual leaders in all institutions and organizations. The services will include:`,
      list: [
        'Institutional Leaders Training',
        'Organizational Leaders Training',
        'Governance Leaders Training',
        'Leadership Literature',
        'Media Programs',
        'Strategic Mentorship'
      ]
    },
    {
      title: 'Academics',
      text: `This will be the educational wing of the institute. The following are the projected services as God provides an opportunity:`,
      list: [
        'Academic Counselling',
        'Academic Talks',
        'Computer Training',
        'Social Work',
        'Community Development',
        'Human Resource',
        'Linkages with other Institutions'
      ]
    },
    {
      title: 'Ministry',
      text: `This is the church ministry faculty meant to empower churches and church ministers for service. The following services will be offered:`,
      list: [
        'Ministerial Training at Church and Para-church level',
        'Pastoral Counseling',
        'Mental Health Training',
        'Diploma of Leadership and Theology',
        'Church Growth Literature',
        'Church Registrations',
        'Media Programs'
      ]
    },
    {
      title: 'Empowerment',
      text: `The following services will be offered in this faculty:`,
      list: [
        'Economic Empowerment',
        'Exchange Program',
        'WoMentor Africa Foundation',
        'Scholarships and Bursaries'
      ]
    },
    {
      title: 'Future Programs',
      text: ``,
      list: [
        'Church Registrations',
        'Diploma of Leadership and Theology',
        'WoMentor Africa Foundation',
        'Scholarships and Bursaries'
        
      ]
    }
  ]);

  return (
    <div>
          <section>
        <div className="container">
          <h1>FACULTIES</h1>
          <div className="about cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3 className='h3'>{card.title}</h3>
                <p className='p'>{card.text}</p>
                {card.list && (
                  <ol className="ordered-list">
                    {card.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
