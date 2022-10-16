import React from 'react'
import StyledHeader from './Header.styled'

const Header = ({name}) => {

  return (
    <StyledHeader className='header'>
      <h1 className='title'>Bonjour <span className="title__name">{name}</span></h1>
		  <p className='subtitle'>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </StyledHeader>
  )
}

export default Header