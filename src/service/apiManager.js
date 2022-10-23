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
    const res = await fetch(`http://localhost:3000/user/${id}`)
    const json = await res.json()
    const formatData = new UserData(json.data)
    return formatData
}


/**
 * Fetch the user activity data
 * @param {int} id user id
 * @return {object} user info
 */
const getUserActivity = async (id) => {
    const res = await fetch(`http://localhost:3000/user/${id}/activity`)
    const json = await res.json()
    const formatData = new UserActivity(json.data)
    return formatData
}


/**
 * Fetch the user sessions data
 * @param {int} id user id
 * @return {object} user info
 */
const getUserAverageSessions = async (id) => {
    const res = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    const json = await res.json()
    const formatData = new UserAverageSessions(json.data)
    return formatData
}


/**
 * Fetch the user performance data
 * @param {int} id user id
 * @return {object} user info
 */
const getUserPerformance = async (id) => {
    const res = await fetch(`http://localhost:3000/user/${id}/performance`)
    const json = await res.json()
    const formatData = new UserPerfomance(json.data)
    return formatData
}

export {
    getUserData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance
}