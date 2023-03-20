import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ( {items} ) =>{    
   if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
   } 
    
    return (
        <ul className="expenses-list">
            {items = items.map(expense => <ExpenseItem key={expense.id} expenseTitle={expense.title}
            expenseAmount={expense.amount} expenseDate={expense.date} />)}
        </ul>
    )

}

export default ExpensesList;