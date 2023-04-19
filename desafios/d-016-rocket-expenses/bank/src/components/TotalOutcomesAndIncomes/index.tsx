import { Card } from "../Card"

export const TotalOutcomesAndIncomes = () => {
  return (
    <div className="flex justify-center -mt-16">
        <div className="grid grid-cols-3 gap-8 max-w-5xl w-full">
          <Card type="income" value={0} />
          <Card type="outcome" value={0} />
          <Card type="total" value={0} />
        </div>
      </div>
  )
}