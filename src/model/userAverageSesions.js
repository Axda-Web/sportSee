/**
 * @class
 * @classdesc User average session formater
 */
 export default class UserAverageSessions {
    /**
   * Assign relevent data to class properties (format if necesary)
   * @param {Object} data - User average session data
   */
    constructor(data) {
      this.sessions = data.sessions.map( session => {

            let formatDay = ''

            switch (session.day) {
                case 1:
                    formatDay = 'L'
                    break
                case 2:
                case 3:
                    formatDay = 'M'
                    break
                case 4:
                    formatDay = 'J'
                    break
                case 5: 
                    formatDay = 'V'
                    break
                case 6:
                    formatDay = 'S'
                    break
                case 7:
                    formatDay = 'D'
                    break
                default:
                    formatDay = session.day
            }

            return {
                ...session,
                day: formatDay
            }
        })
    }
 }