import React, { useEffect, useRef } from 'react';
import './Hero.css';
import landscape from '../../assets/landscape.png';
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import therapy from '../../assets/therapy.png'
import therapy1 from '../../assets/therapy3.png'
import therapy2 from '../../assets/therapy2.png'



function Hero() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const carouselDom = carouselRef.current;
    const thumbnailBorderDom = thumbnailBorderRef.current;
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    const SliderDom = carouselDom.querySelector('.list');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll('.item');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => showSlider('next');
    prevDom.onclick = () => showSlider('prev');

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div>
      <div className=" hero carousel" ref={carouselRef}>
        {/*-- list item --*/}
        <div className="list">
          <div className="item">
            <img src={landscape} alt="landscape" className='image'/>
            <div className="content">
              <div className="topic">ABOUT</div>
              <div className="des">
                {/*-- lorem 50 --*/}
                Flame Institute and Therapy is a Multifaceted agency offering tailored mentorship,counseling,leadership, training & spiritual services
              </div>
              
            </div>
          </div>
          <div className="item">
            <img src={therapy1} alt="landscape" className='image' />
            <div className="content">
              <div className="topic">VISION</div>
              <div className="des">
                A Global-standard, Generational-relevant, Community centered Training and Therapy Institute.
              </div>``
              
            </div>
          </div>
          <div className="item">
            <img src={therapy2} alt="landscape" className='image'/>
            <div className="content">
              <div className="topic">MISSION</div>
              <div className="des">
                To Impact Society through Counselling, Training, Mentorship, Consultancy and Reserch
              </div>
              
            </div>
          </div>
          <div className="item">
            <img src={therapy} alt="landscape" className='image'/>
            <div className="content">
              <div className="topic">CORE VALUES</div>
              <div className="des">
                <b>Family </b>- a belief that the Family is the cornerstone of any society and has to be taken care of to have any progress and stability. <br />

                <b> Leadership</b> - society falls and rises with leadership, thus stressing on strategic, servant, and spiritual leadership. <br />

                <b>Academics </b>  - education is the pedestal on which greatness is attained and should be a route towards other attainments in the economy including entrepreneurship, innovation, sports and health. <br />

                <b>Ministry </b>  - church and the subsequent service attached to it are key balancing and stabilizing factors of any society, without which morals and ethics find no place of exercise. <br />

                <b>Empowerment </b>  - it's by creating conducive conditions that humanity is given capacity to progress and prosper. 

              </div>
              
            </div>
          </div>
        </div>
        {/* -- list thumbnail -- */}
        <div className="thumbnail" ref={thumbnailBorderRef}>
          <div className="item">
            <img src={about1} alt="landscape" />
            <div className="content">
              <div className="title"></div>
              <div className="description">VISSION</div>
            </div>
          </div>
          <div className="item">
            <img src={about2} alt="landscape" />
            <div className="content">
              <div className="title"></div>
              <div className="description">MISSION</div>
            </div>
          </div>
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="title"></div>
              <div className="description">CORE VALUES</div>
            </div>
          </div>
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="title"></div>
              <div className="description">ABOUT</div>
            </div>
          </div>
        </div>
        {/* -- next prev -- */}
        <div className="arrows">
          <button id="prev" ref={prevRef}><FaArrowCircleLeft /></button>
          <button id="next" ref={nextRef}><FaArrowCircleRight /></button>
        </div>
        {/* -- time running -- */}
        <div className="time" ref={timeRef}></div>
      </div>
    </div>
  );
}

export default Hero;
