import React from 'react'

const Button = ({children}) => {
  const handleClick=()=>{
    alert("Hello From " + children);
  }
  
    return (
    <>
      <button onClick={handleClick}>
    {children}
      </button>
    </>
  )
}

export default Button
