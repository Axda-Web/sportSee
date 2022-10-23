/**
 * @class
 * @classdesc User main data formater
 */
export default class UserData {

  /**
   * Assign relevent data to class properties (format if necesary)
   * @param {Object} data - User main data
   */
  constructor(data) {
    this.firstName = data.userInfos.firstName
    this.macrosData = this.formatKeyData(data.keyData)
    this.scoreData = data.todayScore || data.score
    this.score = this.formatScore(this.scoreData)
  }

  /**
   * Format Score component data
   * @param {number} data - User score
   * @returns {Object[]}
   */
  formatScore(data) {
    return [{
              uv: data * 100,
              fill: '#E60000'
            }]
          }

  /**
   * Format MacrosCardContainer data
   * @param {Object} data - User key data
   * @returns {Object[]}
   */
  formatKeyData(data) {
    const macrosData = Object.entries(data).map( ([key, value]) => {
      switch (key) {
        case 'calorieCount':
          return {
            id: 1,
            icon: '/assets/calories.png',
            value: `${(value / 1000).toFixed(3)}kCal`,
            title: 'Calories'
          }

        case 'proteinCount':
          return {
            id: 2,
            icon: '/assets/protein.png',
            value: `${value}g`,
            title: 'Proteines'
          }

        case 'carbohydrateCount':
          return {
            id: 3,
            icon: '/assets/carbs.png',
            value: `${value}g`,
            title: 'Glucides'
          }

        case 'lipidCount':
          return {
            id: 4,
            icon: '/assets/fat.png',
            value: `${value}g`,
            title: 'Lipides'
          }

        default:
          return null
      }
    })

    return macrosData
  }
}