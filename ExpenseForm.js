import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (vent) => {
        setEnteredTitle(vent.target.value);
    };
    const amountChangeHandler = (vent) => {
        setEnteredAmount(vent.target.value);
    };
    const dateChangeHandler = (vent) => {
        setEnteredDate(vent.target.value);
    };

    const SubmitHandler = (vent) => {
        vent.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit = { SubmitHandler }>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange = { titleChangeHandler }/>
                </div>
                <div className="new-expense_control">
                    <label htmlFor="">Amount</label>
                    <input type="number" value={enteredAmount} onChange = { amountChangeHandler }/>
                </div>
                <div className="new-expense_control">
                    <label htmlFor="">Date</label>
                    <input type="date" value={enteredDate} onChange={ dateChangeHandler } />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;