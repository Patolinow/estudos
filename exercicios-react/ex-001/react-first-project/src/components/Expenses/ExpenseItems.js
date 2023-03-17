import './ExpenseItems.css'
import Date from './Date'
import Card from '../UI/Card'

function ExpenseItems(props) {
  const expenseDate = props.date
  const expenseTitle = props.title
  const expenseValue = props.amount

  return (<Card className="expense-item">

      <Date expenseDate = {expenseDate}/>
      <div className="expense-item__descripition">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseValue}</div>
      </div>
    </Card>
  )
}

export default ExpenseItems