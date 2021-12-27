import { useContext } from 'react'
import filters from '../../constants/filters'
import { BadgeContext } from '../../pages/ranking'

export const Search = () => {
  const { orderingMode, setOrderingMode, searchText, setSearchText } =
    useContext(BadgeContext)

  const setRarityOrder = () => {
    setOrderingMode(filters.byRarity.code)
  }

  const setDateOrder = () => {
    setOrderingMode(filters.byDate.code)
  }

  return (
    <section className="search w-full text-sm font-medium mb-32">
      <div className="grid grid-cols-6 lg:grid-cols-5 gap-[16px] ">
        <button
          onClick={setRarityOrder}
          className={`py-16 px-16 col-span-3 lg:col-span-1 rounded-md
          ${
            orderingMode === filters.byRarity.code
              ? 'bg-yellow-400 text-yellow-700'
              : 'bg-slate-700 text-base-white'
          }`}
        >
          Mais Raros
        </button>
        <button
          onClick={setDateOrder}
          className={`py-16 px-16 col-span-3 lg:col-span-1 rounded-md bg-yellow-400 hover:opacity-95"
          ${
            orderingMode === filters.byDate.code
              ? 'bg-yellow-400 text-yellow-700'
              : 'bg-slate-700 text-base-white'
          }`}
        >
          Mais Recentes
        </button>

        <input
          className="py-16 px-16 rounded-md col-span-6 lg:col-span-3 w-full h-full bg-slate-700"
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Procurar badges"
        />
      </div>
    </section>
  )
}
