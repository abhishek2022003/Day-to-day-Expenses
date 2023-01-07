import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import ExpenseItem from "./components/ExpenseItem";

import Expenses from "./components/Expenses";

let Dummy_Expense = [
  {
    id: 'e1',
    title: 'school-fee',
    amount: 300,
    date: new Date(2022, 24, 12)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 330,
    date: new Date(2022, 20, 12)
  },
  {
    id: 'e3',
    title: 'Hostel-fee',
    amount: 3000,
    date: new Date(2022, 28, 12)
  },
  {
    id: 'e4',
    title: 'mess-fee',
    amount: 2000,
    date: new Date(2022, 14, 12)
  }
];

const App = () => {

    const [expenses, setExpenses] = useState(Dummy_Expense);

    const addExpenseHandler = (expense) => {
      const updatedExpense = [expense, ...expenses];
      setExpenses(updatedExpense);
    }

    return(
      <div>
        <NewExpense onAddExpense = { addExpenseHandler }/>
        <Expenses item = {expenses}/>
      </div>
    );
}

export default App;
