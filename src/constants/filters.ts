import { BadgeData } from '../types'

const filters = {
  byRarity: {
    code: 'rarity',
    filterFunction: function (a: BadgeData, b: BadgeData) {
      return a.count - b.count
    }
  },
  byDate: {
    code: 'date',
    filterFunction: function (a: BadgeData, b: BadgeData) {
      const aStarts = new Date(a.starts_on)
      const bStarts = new Date(b.starts_on)

      return bStarts.getTime() - aStarts.getTime()
    }
  }
}

export default filters
