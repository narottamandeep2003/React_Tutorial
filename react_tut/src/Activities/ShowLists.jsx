import React, { useState } from 'react'
//to-do list
export default function ShowLists() {
  // let names=["abc","pqr","xyz"]
  const [val,setVal]=useState("")
  const [names,setNames]=useState([])

  return (
    <div>
      <input type='text' onChange={(e)=>{setVal(e.target.value)}}></input>
      <span>{val}</span>
      <button onClick={()=>{
        setNames([...names,val])
      }}>click</button>
      <br/>
      {names.map((name)=>{return <><h1>{name}</h1></>})}

    </div>
  )
}
