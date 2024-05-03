import React, { useState } from 'react'

export default function Inputbox() {
  const [text, setText] = useState("")
  function change(e) {
    setText(e.target.value)
  }
  return (
    <div>
      <input type="text" value={text} onChange={change}/> <br />
      <span>{text}</span>
    </div>
  )
}
