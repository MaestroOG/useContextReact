import React, { useContext } from 'react'
import CountGetter from './CountGetter'
import { UserContext } from '../context/context'

const Button = () => {
    const value = useContext(UserContext)
    return (
        <div>
            <button onClick={() => { value.setCount((count) => count + 1) }}>Button count is <span><CountGetter /></span></button>
        </div>
    )
}

export default Button
