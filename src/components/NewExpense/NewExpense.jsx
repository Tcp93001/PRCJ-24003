import Card from '../UI/Card'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
  const saveExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
      date: new Date(expense.date)
    }

    onAddExpense(newExpense)
  }

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} />
    </Card>
  )
}

export default NewExpense;