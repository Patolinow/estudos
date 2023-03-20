import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense';

function App() {
  const insurances = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ]

  const addExpenseHandler = (expenseData) => {
    insurances.push(expenseData)
    console.log(insurances)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses insurances={insurances} />
      </header>
    </div>
  );
}

export default App;
