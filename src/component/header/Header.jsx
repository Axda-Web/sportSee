import PropTypes from 'prop-types'
import StyledHeader from './Header.styled'



/**
 * Display the dasboard header
 * @component
 * @param {String} data - User name
 * @returns {JSX.Element} - Header component
 */
const Header = ({data}) => {

  return (
    <StyledHeader className='header'>
      <h1 className='title'>Bonjour <span className="title__name">{data}</span></h1>
		  <p className='subtitle'>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
    data: PropTypes.string.isRequired
  }