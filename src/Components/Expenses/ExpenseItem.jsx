import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ expenseAmount, expenseDate, expenseTitle }) => {
    const [title, setTitle] = useState(expenseTitle);
    const clickHandler = () => {
        setTitle("Updated!")
    }

    return (
        <Card className="expense-item">
            <ExpenseDate expenseDate={expenseDate} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>)
}

export default ExpenseItem;;