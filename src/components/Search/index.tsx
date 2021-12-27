import { useState } from 'react'
import { BadgeData } from '../../types'

export const Search = setFilterFunction => {
  const [orderingMode, setOrderingMode] = useState('rarity')

  const filters = {
    byRarity: {
      code: 'rarity',
      filterFunction: (a: BadgeData, b: BadgeData) => {
        return a.count - b.count
      }
    },
    byDate: {
      code: 'date',
      filterFunction: (a: BadgeData, b: BadgeData) => {
        return a.count - b.count
      }
    }
  }

  return (
    <section className="search w-full text-sm font-medium mb-32">
      <div className="grid grid-cols-6 lg:grid-cols-5 gap-[16px] ">
        <button
          onClick={() => setOrderingMode(filters.byDate.code)}
          className={`py-16 px-16 col-span-3 lg:col-span-1 rounded-md bg-yellow-400 hover:opacity-95"
          ${
            orderingMode === filters.byDate.code
              ? 'bg-yellow-400 text-yellow-700'
              : 'bg-slate-700 text-base-white'
          }`}
        >
          Mais Recentes
        </button>
        <button
          onClick={() => setOrderingMode(filters.byRarity.code)}
          className={`py-16 px-16 col-span-3 lg:col-span-1 rounded-md
          ${
            orderingMode === filters.byRarity.code
              ? 'bg-yellow-400 text-yellow-700'
              : 'bg-slate-700 text-base-white'
          }`}
        >
          Mais Raros
        </button>
        <input
          className="py-16 px-16 rounded-md col-span-6 lg:col-span-3 w-full h-full bg-slate-700"
          type="text"
          placeholder="Procurar badges"
        />
      </div>
    </section>
  )
}
