import React, { useState } from 'react';


import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const [newTitle, setNewTitle] = useState("")

    const clickHandler = () => {
        setTitle(newTitle);
    }

    const changeHandler = (vent) => {
        setNewTitle(vent.target.value);
    }
    
    return(
        <div className='expense-item'>
            
            <ExpenseDate date = {props.date} />
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item_price'>${props.amount}</div>
            </div>
            {/* <input type="text" value={ newTitle } onChange={ changeHandler }/>
            <button onClick={clickHandler}>change title</button> */}
        </div>
    );
}

export default ExpenseItem;