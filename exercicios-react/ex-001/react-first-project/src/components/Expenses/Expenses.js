import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const insurances = props.insurances
  const [filteredYear, setFilteredYear] = useState("2019")

  const yearChangeHandler = (year) => {
    setFilteredYear(year)
    console.log(filteredYear)
  }


  return (<Card className = "expenses">
    <div>
      <ExpensesFilter selected={filteredYear} onYearChange={yearChangeHandler}/>
    </div>
  {insurances.map((insurance) => 
    <ExpenseItems key={insurance.id}
      title={insurance.title}
      amount={insurance.amount}
      date={insurance.date}
      id={insurance.id}
    />
  )}
</Card>)
}

export default Expenses