import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//Initial State
const initialState = {
    transactions:  [
           { id: 1, text: 'Flor', amount: -20 },
           { id: 2, text: 'Salário', amount: 300 },
           { id: 3, text: 'Livro', amount: -10 },
           { id: 4, text: 'Covid-19', amount: 150 }]
}


//Create context

export const GlobalContext = createContext(initialState);





//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
            {children}
    </GlobalContext.Provider>)
    
}