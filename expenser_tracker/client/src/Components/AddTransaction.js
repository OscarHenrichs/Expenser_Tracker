import React, {useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
    const [text  , setText]     = useState('');
    const [Amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +Amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Adicionar nova transação</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Texto</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Quantidade <br />
                    (despesa - negativa, despesa - positiva)</label
                >
                <input type="number"  value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Adicionar transação</button>
            </form>
        </div>
    )
}
