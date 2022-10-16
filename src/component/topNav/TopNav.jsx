import React from 'react'
import StyledTopNav from './TopNav.styled'

const TopNav = () => {
  return (
    <StyledTopNav className='top-nav'>
      	<img	className="logo"
				src="./assets/logo.png"
				alt="SportSee logo"
			/>
		<nav className='nav'>
			<span className="nav__item">Accueil</span>
			<span className="nav__item">Profil</span>
			<span className="nav__item">Réglages</span>
			<span className="nav__item">Communauté</span>
		</nav>
    </StyledTopNav>
  )
}

export default TopNav