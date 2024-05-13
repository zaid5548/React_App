import React from 'react'

function Buttons({btnClass,btnText}) {
  return (
        <button className={btnClass}>{btnText}</button>
  )
}

export default Buttons