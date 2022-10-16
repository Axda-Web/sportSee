import React from 'react'
import StyledMacrosCard from './MacrosCard.styled'

const MacrosCard = ({id, value, title, icon}) => {
  return (
    <StyledMacrosCard>
        <img src={icon} alt="" className='card-image'/>
        <div className='card-text'>
            <h3 className='card-value'>{value}</h3>
            <p className='card-label'>{title}</p>
        </div>
    </StyledMacrosCard>
  )
}

export default MacrosCard
