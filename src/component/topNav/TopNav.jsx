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
			<a href="index.html" className="nav__item">Accueil</a>
			<a href="index.html" className="nav__item">Profil</a>
			<a href="index.html" className="nav__item">Réglages</a>
			<a href="index.html" className="nav__item">Communauté</a>
		</nav>
    </StyledTopNav>
  )
}

export default TopNav