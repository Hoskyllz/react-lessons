import React from 'react'
import { useState } from 'react'


const Usestatebasics = () => {
    const [name, setName] = useState("User")
    const [num, setNum] = useState(0)

    const handleClick = () => {
        setName("John")
    }
  
    const increase = () => {
        setNum(num + 1)
    }
        const decrease = () => {
            setNum(num - 1)
    } 
    const reset = () => {
        setNum(0)
        setName("user")
    }
    return (
        <div>
            <h1>Use state Basics</h1>
            <h2>Welcome  {name} </h2>
            <h1> {num} </h1>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={handleClick}>change name</button>
        </div>
    )
}

export default Usestatebasics