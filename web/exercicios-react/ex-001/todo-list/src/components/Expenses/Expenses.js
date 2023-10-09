import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./ExpensesList.css"

const Expenses = (props) => {
  const insurances = props.insurances
  const [filteredYear, setFilteredYear] = useState("2019")
  const filteredInsurances = insurances.filter((insurance) => insurance.date.getFullYear() == filteredYear)

  const yearChangeHandler = (year) => {
    setFilteredYear(year)
    console.log(filteredYear)
  }


  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter selected={filteredYear} onYearChange={yearChangeHandler} />
      </div>

    <ExpensesChart expenses={filteredInsurances}/>
    <ExpensesList filteredInsurances = {filteredInsurances}/>
    </Card>
  )
}

export default Expenses