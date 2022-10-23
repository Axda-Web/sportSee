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

  const mockedData = [
              {
                id: 1,
                icon: './assets/calories.png',
                value: '1,930kCal',
                title: 'Calories'
              }, {
                id: 2,
                icon: './assets/protein.png',
                value: '155g',
                title: 'Proteines'
              }, {
                id: 3,
                icon: './assets/carbs.png',
                value: '290g',
                title: 'Glucides'
              }, {
                id: 4,
                icon: './assets/fat.png',
                value: '50g',
                title: 'Lipides'
              }
        ]


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