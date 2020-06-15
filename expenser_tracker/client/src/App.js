import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance.js';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider }  from './Context/GlobalState';
//import { Transaction } from './Components/Transaction';

import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
