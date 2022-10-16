import React from 'react'
import StyledSideNav from './SideNav.styled'


const SideNav = () => {
  return (
    <StyledSideNav className='side-nav'>
      <div className="nav">
        <div className="nav__item">
          <img src="./assets/icon-0.png" alt="fitness icon" />
        </div>
        <div className="nav__item">
          <img src="./assets/icon-1.png" alt="bike icon" />
        </div>
        <div className="nav__item">
          <img src="./assets/icon-2.png" alt="swimming icon" />
        </div>
        <div className="nav__item">
          <img src="./assets/icon-3.png" alt="yoga icon" />
        </div>
      </div>
      <div className="copyright">Copyright © SportSee 2020 </div>
    </StyledSideNav>
  )
}

export default SideNav