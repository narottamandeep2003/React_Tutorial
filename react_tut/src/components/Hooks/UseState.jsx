import React, { useState } from 'react'



// * page will not rerender when the val variable change 
// export default function UseState() {
//   let val = 0
//   function handle() {
//     val+=1;
//     console.log(val)
//   }
//   return (
//     <div>
//       count : {val}
//       <br />
//       <button onClick={handle}>click</button>
//     </div>
//   )
// }


// * if you are using useState instead of simple variable page will rerender when the val change
export default function UseState() {

  const [val,setVal]=useState(0);
  function handle() {

    // *this is not allowed
    // val+=1;

    setVal(val+1)

    //* state will update 
    // setVal((preval)=>preval+1)
    // setVal((preval)=>preval+1)
    // setVal((preval)=>preval+1)

    console.log(val)
  }
  return (
    <div>
      count : {val}
      <br />
      <button onClick={handle}>click</button>
    </div>
  )
}