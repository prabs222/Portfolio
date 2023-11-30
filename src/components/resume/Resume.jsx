import React from 'react'
import Data from './Data'
import Card from './Card'
import './Resume.css'

const Resume = () => {
  
  return (
    <div className='resume container section' id='resume'>
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if(val.category === "education"){
              return <Card key={id} Item={val}/>
            }
            return null
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if(val.category === "experience"){
              return <Card id={index} Item={val}/>
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}

export default Resume