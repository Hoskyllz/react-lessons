import React from 'react'
//reponding to user interaction - event listener, event handler
//btn.addEventListener
const User = () => {
  const handleClick = () => {
    console.log("user clicked");
  }
  const handleClick2 = (name) => {
    console.log(name + "Clicked");
  }
  return (
    <div>
      <h1>Responding to user interaction</h1>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={()=>handleClick2("AYO")}>CLICK AGAIN</button>
    </div>
  )
}

export default User