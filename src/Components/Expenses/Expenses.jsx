import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const ExpenseList = ({ expenses }) => {

    const [pickedYear, setPickedYear] = useState("2023");
    const yearPickedHandler = (year) => {
        setPickedYear(year);
        console.log(expenses)
    };

    const filteredExpenses = expenses.filter(expense => {
        return (expense.date.getFullYear()).toString() === pickedYear;
    });

   
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onYearPicked={yearPickedHandler} pickedYear={pickedYear} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
};

export default ExpenseList;