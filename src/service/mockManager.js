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
        const res = await fetch(`/dataMocked.json`)

        if (res.ok) {
            const json = await res.json()
            const data = json.USER_MAIN_DATA.find( userInfo => userInfo.id === parseInt(id) )
            const formatData = new UserData(data)
            return formatData
        } else {
            throw new Error('Cannot fetch user data')
        }
    } catch(error) {
        throw error
    }
}

const getUserActivity = async (id) => {
    try {
        const res = await fetch(`/dataMocked.json`)
        console.log(res);
        
        if (res.ok) {
            const json = await res.json()
            const data = json.USER_ACTIVITY.find( userInfo => userInfo.id === parseInt(id) )
            const formatData = new UserActivity(data)
            return formatData
        } else {
            throw new Error('Cannot fetch user data')
        }
    } catch(error) {
        throw error
    }
}

const getUserAverageSessions = async (id) => {
    try {
        const res = await fetch(`/dataMocked.json`)
        
        if (res.ok) {
            const json = await res.json()
            const data = json.USER_AVERAGE_SESSIONS.find( userInfo => userInfo.id === parseInt(id) )
            const formatData = new UserAverageSessions(data)
            return formatData
        } else {
            throw new Error('Cannot fetch user data')
        }
    } catch(error) {
        throw error
    }
}

const getUserPerformance = async (id) => {
    try {
        const res = await fetch(`/dataMocked.json`)
        
        if (res.ok) {
            const json = await res.json()
            const data = json.USER_PERFORMANCE.find( userInfo => userInfo.id === parseInt(id) )
            const formatData = new UserPerfomance(data)
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