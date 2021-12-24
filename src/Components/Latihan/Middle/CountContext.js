import React, { useContext } from 'react';
import Context from '../../../Context';

export default function CountContext() {
    const MyContext = useContext(Context)
    const { constHandler } = MyContext
    return (
        <div
            style={{
                background: '#FFF',
                height: '100vh'
            }}
        >
            <button onClick={constHandler}>
                Increment
            </button>
        </div>
    )
}