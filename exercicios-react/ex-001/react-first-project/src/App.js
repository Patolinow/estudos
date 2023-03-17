import './App.css';
import Card from './components/UI/Card';
import ExpenseItems from './components/Expenses/ExpenseItems';

function App() {
  const insurances = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's get started!</h1>

        <Card className = "expenses">
          {insurances.map((insurance) => 
            <ExpenseItems
              title={insurance.title}
              amount={insurance.amount}
              date={insurance.date}
            />
          )}
        </Card>
      </header>
    </div>
  );
}

export default App;
