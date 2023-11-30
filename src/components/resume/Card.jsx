import React from 'react'

const Card = ({Item}) => {
    
  return (
    <div className='timeline__item'>
        <i className={Item.icon}></i>
        <span className="timeline__date">{Item.year}</span>
        <h3 className="timeline__title">{Item.title}</h3>
        <p className="timeline__text">{Item.desc}</p>
    </div>
  )
}

export default Card