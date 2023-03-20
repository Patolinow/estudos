import React from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
  const expenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData, id: Math.random().toString()
    }

    console.log(expenseData)

    props.onAddExpense(expenseData)
  }

  return (<div className="new-expense">
    <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
  </div>
  )
}

export default NewExpense