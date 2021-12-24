export const Search = () => {
  return (
    <section className="search w-full text-sm font-medium mb-16">
      <div className="grid grid-cols-5 gap-[16px] ">
        <button className="py-16 px-16 rounded-md text-yellow-700 bg-yellow-400 hover:opacity-95">
          Mais Recentes
        </button>
        <button className="py-16 px-16 rounded-md bg-slate-700">
          Mais resgatados
        </button>
        <input
          className="py-16 px-16 rounded-md col-span-3 w-full h-full bg-slate-700"
          type="text"
          placeholder="Procurar badges"
        />
      </div>
    </section>
  )
}
