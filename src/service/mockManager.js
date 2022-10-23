import UserData from "../model/userData"
import UserActivity from "../model/userActivity"
import UserAverageSessions from "../model/userAverageSesions"
import UserPerfomance from "../model/userPerformance"


/**
 * Fetch the user data
 * @param {int} id user id
 * @return {object} user data
 */
 const getUserData = async (id) => {
    const res = await fetch(`/dataMocked.json`)
    const json = await res.json()
    const data = json.USER_MAIN_DATA.find( userInfo => userInfo.id === parseInt(id) )
    const formatData = new UserData(data)
    return formatData
}

const getUserActivity = async (id) => {
    const res = await fetch(`/dataMocked.json`)
    const json = await res.json()
    const data = json.USER_ACTIVITY.find( userInfo => userInfo.userId === parseInt(id) )
    const formatData = new UserActivity(data)
    return formatData
}

const getUserAverageSessions = async (id) => {
    const res = await fetch(`/dataMocked.json`)
    const json = await res.json()
    const data = json.USER_AVERAGE_SESSIONS.find( userInfo => userInfo.userId === parseInt(id) )
    const formatData = new UserAverageSessions(data)
    return formatData
}

const getUserPerformance = async (id) => {
    const res = await fetch(`/dataMocked.json`)
    const json = await res.json()
    const data = json.USER_PERFORMANCE.find( userInfo => userInfo.userId === parseInt(id) )
    const formatData = new UserPerfomance(data)
    return formatData
}

export {
    getUserData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance
}