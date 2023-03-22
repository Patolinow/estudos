import './Date.css'

function Date(props) {
  const month = props.expenseDate.toLocaleString('en-US',{month: 'long'})
  const day = props.expenseDate.getDate()
  const year = props.expenseDate.getFullYear()

  return (
    <div className = "expense-date">
        <div className = "expense-date__month">{month}</div>
        <div className = "expense-date__year">{year}</div>
        <div className = "expense-date__day">{day}</div>
      </div>
  )
}

export default Date