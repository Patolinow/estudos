import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
  const expenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData, id: Math.random().toString()
    }

    props.onAddExpense(expenseData)
  }


  return (<div className="new-expense">
    <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
  </div>
  )
}

export default NewExpense