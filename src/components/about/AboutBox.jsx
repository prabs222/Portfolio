import React from 'react'

const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
        <div className="about__box">
            <i className='about__icon icon-fire'></i>

            <div>
                <h3 className="about__title">20+</h3>
                <span className="about__subtitles">Project completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className='about__icon icon-cup'></i>

            <div>
                <h3 className="about__title">670</h3>
                <span className="about__subtitles">Cup of coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className='about__icon icon-question'></i>

            <div>
                <h3 className="about__title ">50</h3>
                <span className="about__subtitles">Leetcode questions</span>
            </div>
        </div>

        <div className="about__box">
            <i className='about__icon icon-badge'></i>

            <div>
                <h3 className="about__title">1st</h3>
                <span className="about__subtitles">Project exhibition</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox