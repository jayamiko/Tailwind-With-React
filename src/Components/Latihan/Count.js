import React, { useState } from 'react';
import Context from '../../Context';
import CountContext from './Middle/CountContext';

export default function CountApp() {
    const [count, setCount] = useState(0);

    const constHandler = () => {
        setCount(count + 1);
    }

    console.log(count);

    return (
        <Context.Provider value={{ count, constHandler }}>
            <CountContext />
            <h2 style={{
                color: '#000',
            }}>{count}</h2>
        </Context.Provider>
    )
}