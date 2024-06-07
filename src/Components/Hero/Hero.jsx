import React, { useEffect, useRef } from 'react';
import './Hero.css';
import landscape from '../../assets/landscape.jpg';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


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
      <div className="carousel" ref={carouselRef}>
        {/*-- list item --*/}
        <div className="list">
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="topic">ABOUT</div>
              <div className="des">
                {/*-- lorem 50 --*/}
                Flame Institute and Therapy is a Multifaceted agency offering tailored mentorship,counseling,leadership, training & spiritual services
              </div>
              
            </div>
          </div>
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="topic">VISION</div>
              <div className="des">
                A Global-standard, Generational-relevant, Community centered Training and Therapy Institute.
              </div>``
              
            </div>
          </div>
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="topic">MISSION</div>
              <div className="des">
                To Impact Society through Counselling, Training, Mentorship, Consultancy and Reserch
              </div>
              
            </div>
          </div>
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="topic">CORE VALUES</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              
            </div>
          </div>
        </div>
        {/* -- list thumbnail -- */}
        <div className="thumbnail" ref={thumbnailBorderRef}>
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="title">VISSION</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="title">MISSION</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="title">CORE VALUES</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src={landscape} alt="landscape" />
            <div className="content">
              <div className="title">ABOUT</div>
              <div className="description">Description</div>
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
