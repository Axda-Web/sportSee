/**
 * @class
 * @classdesc User performance formater
 */
 export default class UserPerfomance {
    /**
   * Assign relevent data to class properties (format if necesary)
   * @param {Object} data - User performance data
   */
    constructor(data) {
      this.kindArr = Object.values(data.kind)
      this.performance = this.formatData(data.data)
    }

    /**
   * Format Performance component data
   * @param {array} param 
   * @returns {Object[]}
   */
    formatData(param) {
        const formatData = param.map( (item, index) => {
            const kind = this.kindArr[index]
            let translateKind = ''

            switch (kind) {
                case 'cardio':
                    translateKind = 'Cardio'
                    break
                case 'energy':
                    translateKind = 'Energie'
                    break
                case 'endurance':
                    translateKind = 'Endurance'
                    break
                case 'strength':
                    translateKind = 'Force'
                    break
                case 'speed':
                    translateKind = 'Vitesse'
                    break
                case 'intensity':
                    translateKind = 'Intensité'
                    break
                default:
                    translateKind = kind
            }
            
            return {
                ...item,
                kind: translateKind
            }
        }).reverse()

        return formatData
    }
 }