// import React from 'react'

// export default function Button() {
//     function handle() {
//         alert("hi")
//     }
//     return (
//         <button onClick={handle}>click</button>
//     )
// }

import React from 'react'

export default function Button() {
    
    return (
        <button onClick={()=>{alert("hi")}}>click</button>
    )
}
