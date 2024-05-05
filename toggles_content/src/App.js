import { useState } from "react"
import './App.css';

function App() {
  const [toggle, setToggle] = useState(1)
  let arr = [
    {
      id: 1,
      title: "hello world",
      desc: " hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus laboriosam repellat sapiente inventore corporis voluptate labore, molestias qui atque possimus in nobis aliquid ut recusandae explicabo. Aut, sunt ipsa."
    }
    , {
      id: 2,
      title: "world",
      desc: " hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus laboriosam repellat sapiente inventore corporis voluptate labore, molestias qui atque possimus in nobis aliquid ut recusandae explicabo. Aut, sunt ipsa."
    }
    , {
      id: 3,
      title: "hello",
      desc: " hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus laboriosam repellat sapiente inventore corporis voluptate labore, molestias qui atque possimus in nobis aliquid ut recusandae explicabo. Aut, sunt ipsa."
    }
  ]
  return (
    <div className="App">
      {
        arr.map((val) => {
          return (
            <div key={val.id}>
              <h1 onClick={() => {
                setToggle(val.id)
              }}>
                {val.title}
              </h1>
             
              {val.id === toggle ? (<p> <img src="/S.png" width={400} height={200} alt="..." /> {val.desc}</p>) : ""}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
