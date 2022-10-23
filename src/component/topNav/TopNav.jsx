import StyledTopNav from './TopNav.styled'
import Logo from '../../assets/logo.png'

/**
 * Display a top navigation menu
 * @returns {JSX.element} - TopNav component
 */
const TopNav = () => {
  return (
    <StyledTopNav className='top-nav'>
      	<img	className="logo"
				src={Logo}
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