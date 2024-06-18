import React from 'react'
import directob from "../../assets/directob.png"
import "./Rev.css"

function Rev() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h3 className="section--title">The Director</h3>
          <h2 className="hero--section--title">
            
          </h2>
          <p className="hero--section-description">
            "Rev Eliud Wanene Nguku epitomizes the essence of leadership, mentorship, and inspiration within the gospel, leadership and counseling ministry. His unwavering commitment to nurturing and guiding aspiring ministers has provided a beacon of hope and opportunity for countless individuals seeking to explore their spiritual calling. As a mentor, his wisdom and guidance have illuminated the path for many, instilling in them the values of integrity, compassion, and dedication. Beyond merely imparting knowledge, he has served as a genuine role model, embodying the principles he teaches through his own exemplary life. His humility, authenticity, and unwavering faith serve as a testament to the transformative power of living in alignment with one's beliefs. In a world yearning for guidance and authenticity, he stands as an answer to a generation hungry for spiritual fulfillment. Through his leadership and dedication, he has enabled countless individuals to not only discover their purpose but also to grow and flourish as ministers in their own right. His impact extends far beyond the walls of any church or congregation; it reaches into the hearts and minds of those he has touched, inspiring them to live lives of purpose and service. His legacy as a mentor, role model, and beacon of hope will continue to resonate for generations to come, enriching the world with the transformative power of faith and love. His mantra of Spiritual Servant Leadership based on the lives of Jesus and Apostle Paul is a welcome change from the usual secular leadership principles of authority, privileges and popularity. "
            - Collins Kimotho
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src={directob} alt="Hero Section" />
      </div>
    </section>
  )
}

export default Rev
