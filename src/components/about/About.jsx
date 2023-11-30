import React from 'react'
import Image from '../../assets/avatar-2.svg'
import './About.css'
import AboutBox from './AboutBox'


const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className='about__img'/>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Experienced web developer specializing in backend engineering with a strong focus on Django and django-rest-framework. I am focusing on Open Source opportunities. My expertise lies in Python, and I bring robust skills in Java and C programming to the table. Dedicated to delivering top-notch, scalable solutions for web applications.</p>
            <button  className='btn'>Download CV</button>
          </div>


          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back End Development</h3>
                <span className="skills__number ">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Acting</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Management</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage sketch"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About