import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { numberWithCommas } from '../utils/format'


export const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transactions => transactions.amount);
    const total   = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h4>Sua Balança</h4>
            <h1>R${numberWithCommas(total)}</h1>
        </>
    )
}
