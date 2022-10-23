import PropTypes from 'prop-types'

import StyledMacrosCardContainer from './MacrosCardContainer.styled'
import MacrosCard from '../macrosCard/MacrosCard'




/**
 * Display a list of MacrosCard component
 * @component
 * @param {Object[]} data - User main data
 * @returns {JSX.Element} - MacrosCardContainer component
 */
const MacrosCardContainer = ({data}) => {

  return (
    <StyledMacrosCardContainer className='macros-card-container'>
      { data.map( macro => <MacrosCard key={macro.id} data={macro} />)}
    </StyledMacrosCardContainer>
  )
}

export default MacrosCardContainer

MacrosCardContainer.propTypes = {
    data: PropTypes.array.isRequired
  }