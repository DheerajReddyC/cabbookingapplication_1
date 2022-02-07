import React from 'react'
import { useSelector } from 'react-redux'


function Counter() {

    const counter = useSelector(state => state.counter);
    return (
        <div>
            <h1>value is {counter}</h1>
        </div>
    )
}

export default Counter
