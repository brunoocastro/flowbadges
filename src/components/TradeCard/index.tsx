interface TradeCardProps {
  title: string
  prices: number[]
}

export const TradeCard = (props: TradeCardProps) => {
  const { prices, title } = props

  return (
    <div className="h-48 min-w-32 bg-base-black rounded-xl m-2">
      <div
        className="header h-[20%] w-full flex items-center justify-center bg-flow-primary rounded-t-xl
      font-sans font-bold text-base-white text-base"
      >
        <h1 className="h-fit text-lg">
          {title.toUpperCase()} ({prices.length})
        </h1>
      </div>
      <div className="flex flex-col justify-around my-3">
        {prices.length ? (
          <div className="body grid grid-cols-2 text-base-white text-base ">
            <div className="asc flex flex-col mx-auto w-2/4">
              <h1 className="mb-2">+ Baratas</h1>
              {prices
                .sort((a, b) => a - b)
                .map(
                  (item, index) =>
                    index < 3 && (
                      <span key={index} className="text-sm my-1">
                        {item} Sparks
                      </span>
                    )
                )}
            </div>
            <div className="desc flex flex-col mx-auto w-2/4">
              <h1 className="mb-2">+ Caras</h1>
              {prices
                .sort((a, b) => b - a)
                .map(
                  (item, index) =>
                    index < 3 && (
                      <span key={index} className="text-sm my-1">
                        {item} Sparks
                      </span>
                    )
                )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center text-base-white m-3">
            <h1>Não existem {title.toLowerCase()}!</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default TradeCard
