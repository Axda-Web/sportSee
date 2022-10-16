import React, { useState, useEffect } from 'react'
import StyledDashboard from './Dashboard.styled'

import { useParams, useNavigate } from 'react-router-dom'

import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/mockManager'

import Header from '../header'
import MacrosCardContainer from '../macrosCardContainer'
import Duration from '../duration'
import Activity from '../activity'
import Performance from '../performance'
import Score from '../score'

const Dashboard = () => {

  const [userData, setUserData] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userAverageSessions, setUserAverageSessions] = useState()
  const [userPerformance, setUserPerformance] = useState()

  const { id } = useParams()
  const navigate = useNavigate()

  


  useEffect( () => {

    getUserData(id).then( data => setUserData(data))
    getUserActivity(id).then( data => setUserActivity(data))
    getUserAverageSessions(id).then( data => setUserAverageSessions(data))
    getUserPerformance(id).then( data => setUserPerformance(data))

    

    if((!userData) || (!userActivity) || (!userAverageSessions) || (!userPerformance)){
      // navigate('/Error')
    }

  }, [id])



  return (
    <StyledDashboard className='dashboard'>
        {/* <Header name={userData.userFirstName}/> */}
        <Activity />
        <div className='squares-container'>
          <Duration />
          <Performance />
          <Score />
        </div>
        {/* <MacrosCardContainer data={userData.keyData} /> */}
    </StyledDashboard>
  )
}

export default Dashboard