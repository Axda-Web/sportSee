import React, {useState} from 'react'
import StyledMacrosCardContainer from './MacrosCardContainer.styled'

import MacrosCard from '../macrosCard/MacrosCard'

const MacrosCardContainer = ({data}) => {

  const [macros, setMacros] = useState([
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
  ])

  return (
    <StyledMacrosCardContainer className='macros-card-container'>
      { macros.map( macro => <MacrosCard key={macro.id} {...macro} />)}
    </StyledMacrosCardContainer>
  )
}

export default MacrosCardContainer