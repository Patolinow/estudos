import ExpenseItems from "./ExpenseItems";

const ExpensesList = (props) => {
  const nothingFound = <h2 className="expenses-list__fallback">Found no expenses.</h2>
  const somethingFound = props.filteredInsurances.map((insurance) =>
    <li>
      <ExpenseItems key={insurance.id}
        title={insurance.title}
        amount={insurance.amount}
        date={insurance.date}
        id={insurance.id}
      />
    </li>
  )

  return (
    <ul className="expenses-list">
      {props.filteredInsurances.length === 0 ? nothingFound : somethingFound}
    </ul>
    )
}

export default ExpensesList