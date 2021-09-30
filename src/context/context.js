import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":200,"category":"Extra income","type":"Income","date":"2021-09-30","id":"6d877b46-51aa-4b0c-b738-187e0107ab0d"},{"amount":80,"category":"Deposits","type":"Income","date":"2021-09-30","id":"7ca4773c-72b9-44da-a862-bd1bc873bae3"},{"amount":75,"category":"Food","type":"Expense","date":"2021-09-30","id":"bcbbd8f8-3c89-46b2-a60b-766de8291354"},{"amount":150,"category":"Clothes","type":"Expense","date":"2021-09-30","id":"f77b4a9a-1fbf-4d7a-82cf-d0bcdbfbdaf3"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount);
    }, 0);


    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}