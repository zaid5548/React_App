import React from 'react'

function Buttons({btnclassName,btnText}) {
  return (
        <button className={btnclassName}>{btnText}</button>
  )
}

export default Buttons