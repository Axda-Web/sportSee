import StyledSideNav from './SideNav.styled'

//Import icons
import FitnessIcon from '../../assets/icon-0.png'
import BikeIcon from '../../assets/icon-1.png'
import SwimmingIcon from '../../assets/icon-2.png'
import YogaIcon from '../../assets/icon-3.png'



/**
 * Display a side navigation menu
 * @returns {JSX.element} - SideNav component
 */
const SideNav = () => {
  return (
    <StyledSideNav className='side-nav'>
      <div className="nav">
        <div className="nav__item">
          <img src={FitnessIcon} alt="fitness icon" />
        </div>
        <div className="nav__item">
          <img src={BikeIcon} alt="bike icon" />
        </div>
        <div className="nav__item">
          <img src={SwimmingIcon} alt="swimming icon" />
        </div>
        <div className="nav__item">
          <img src={YogaIcon} alt="yoga icon" />
        </div>
      </div>
      <div className="copyright">Copyright © SportSee 2020 </div>
    </StyledSideNav>
  )
}

export default SideNav