import PropTypes from 'prop-types'
import StyledMacrosCard from './MacrosCard.styled'


/**
 * Display a macro card
 * @component
 * @param {Object} data - User main data
 * @returns {JSX.Element} - MacrosCard component
 */
const MacrosCard = ({ data }) => {

  return (
    <StyledMacrosCard>
        <img src={data.icon} alt="" className='card-image'/>
        <div className='card-text'>
            <h3 className='card-value'>{data.value}</h3>
            <p className='card-label'>{data.title}</p>
        </div>
    </StyledMacrosCard>
  )
}

export default MacrosCard

MacrosCard.propTypes = {
    data: PropTypes.object.isRequired
  }
