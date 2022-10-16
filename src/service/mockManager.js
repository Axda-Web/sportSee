import UserData from "../model/userData"


/**
 * Fetch the user data
 * @param {int} id user id
 * @return {object} user info
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
    return data
}

const getUserAverageSessions = async (id) => {
    const res = await fetch(`/dataMocked.json`)
    const json = await res.json()
    const data = json.USER_AVERAGE_SESSIONS.find( userInfo => userInfo.userId === parseInt(id) )
    return data
}

const getUserPerformance = async (id) => {
    const res = await fetch(`/dataMocked.json`)
    const json = await res.json()
    const data = json.USER_PERFORMANCE.find( userInfo => userInfo.userId === parseInt(id) )
    return data
}

export {
    getUserData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance
}