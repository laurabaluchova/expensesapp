import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData }) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [formOpened, setFormOpened] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        setFormOpened(false);
    }

    const openFormHandler = () => {
        setFormOpened(true);
    };

    const closeFormHandler = () => {
        setFormOpened(false);
    };

    if (!formOpened) {        
        return (
        <div className="new-expense__closed">
            <h1>Expenses Handler</h1>     
            <button onClick={openFormHandler}>Add New Expense</button>
        </div>);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input value={enteredDate} onChange={dateChangeHandler} type="date" min="2023-01-01" max="2026-12-31" />
                    </div>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={closeFormHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;