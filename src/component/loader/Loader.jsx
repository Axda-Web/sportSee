import StyledLoader from './Loader.styled.js'


/**
 * Display a loader
 * @returns {JSX.element} - Loader component
 */
const Loader = () => {
  return (
    <StyledLoader>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoader>
  )
}

export default Loader