// import UserInfo from './../model/userInfo'
/**
 * Fetch the user data
 * @param {int} id user id
 * @return {object} user info
 */
const getUserData = async (id) => {
    const res = await fetch(`http://localhost:3000/user/${id}`)
    const json = await res.json()
    // return new UserInfo(json.data)
    return json
}

const getUserActivity = async (id) => {
    const res = await fetch(`http://localhost:3000/user/${id}/activity`)
    const json = await res.json()
    return json
}

const getUserAverageSessions = async (id) => {
    const res = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    const json = await res.json()
    return json
}



const getUserPerformance = async (id) => {
    const res = await fetch(`http://localhost:3000/user/${id}/performance`)
    const json = await res.json()
    return json
}

export {
    getUserData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance
}