/**
 * @class
 * @classdesc User activity formater
 */
 export default class UserActivity {
    /**
   * Assign relevent data to class properties (format if necesary)
   * @param {Object} data - User activity data
   */
    constructor(data) {
      this.sessions = data.sessions.map((session, index) => ({
        ...session,
        day: (index + 1).toString(),
      }))
    }
  }