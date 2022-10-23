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
    try {
        const res = await fetch(`http://localhost:3000/user/${id}`)

        if (res.ok) {
            const json = await res.json()
            const formatData = new UserData(json.data)
            return formatData
        } else {
            throw new Error('Cannot fetch user data')
        }
    } catch(error) {
        throw error
    }
}


/**
 * Fetch the user activity data
 * @param {int} id user id
 * @return {object} user info
 */
const getUserActivity = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/user/${id}/activity`)

        if (res.ok) {
            const json = await res.json()
            const formatData = new UserActivity(json.data)
            return formatData
        } else {
            throw new Error('Cannot fetch user data')
        }
    } catch(error) {
        throw error
    }
}


/**
 * Fetch the user sessions data
 * @param {int} id user id
 * @return {object} user info
 */
const getUserAverageSessions = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/user/${id}/average-sessions`)

        if (res.ok) {
            const json = await res.json()
            const formatData = new UserAverageSessions(json.data)
            return formatData
        } else {
            throw new Error('Cannot fetch user data')
        }
    } catch(error) {
        throw error
    }
}


/**
 * Fetch the user performance data
 * @param {int} id user id
 * @return {object} user info
 */
const getUserPerformance = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/user/${id}/performance`)

        if (res.ok) {
            const json = await res.json()
            const formatData = new UserPerfomance(json.data)
            return formatData
        } else {
            throw new Error('Cannot fetch user data')
        }
    } catch(error) {
        throw error
    }
}

export {
    getUserData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance
}