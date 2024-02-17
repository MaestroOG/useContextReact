import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/context'

const CountGetter = () => {
    const value = useContext(UserContext)
    return (
        <div>
            {value.count}
        </div>
    )
}

export default CountGetter
