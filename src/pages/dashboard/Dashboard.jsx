import React, { useState, useEffect } from "react";
import StyledDashboard from "./Dashboard.styled";

//Import the routing utilities
import { useParams, useNavigate } from "react-router-dom";

//Import the API data fetching utilities
// import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/apiManager'

//Import the Mocked data fetching utilities
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../../service/mockManager";

//Import the components
import Header from "../../component/header";
import MacrosCardContainer from "../../component/macrosCardContainer";
import Duration from "../../component/duration";
import Activity from "../../component/activity";
import Performance from "../../component/performance";
import Score from "../../component/score";
import Loader from "../../component/loader";

/**
 * Display the Dashboard page content
 * @returns {JSX.element} - Dashboard component
 */
const Dashboard = () => {
  //States init
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userAverageSessions, setUserAverageSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();

  //Extract the id of the current user in the URL
  const { id } = useParams();

  //Create page navivation hook
  const navigate = useNavigate();

  useEffect(() => {
    //Fetching the data + update the states
    const getData = async () => {
      setUserData(await getUserData(id));
      setUserActivity(await getUserActivity(id));
      setUserAverageSessions(await getUserAverageSessions(id));
      setUserPerformance(await getUserPerformance(id));

      setLoading(false);
    };

    //Navigate to the Error page if problem with the data fetching
    getData().catch((error) => {
      return navigate("/error");
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <StyledDashboard className="main-content">
            <Header data={userData.firstName} />
            <Activity data={userActivity.sessions} />
            <div className="squares-container">
              <Duration data={userAverageSessions.sessions} />
              <Performance data={userPerformance.performance} />
              <Score data={userData.score} />
            </div>
            <MacrosCardContainer data={userData.macrosData} />
          </StyledDashboard>
        </>
      )}
    </>
  );
};

export default Dashboard;
