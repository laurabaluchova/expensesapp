import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ expenseAmount, expenseDate, expenseTitle }) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate expenseDate={expenseDate} />
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
            </Card>
        </li>)
}

export default ExpenseItem;;