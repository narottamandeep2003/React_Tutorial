import logo from './logo.svg';
import './App.css';
import {useReducer} from 'react'
function App() {
  const state1=3
  function reducer(state,action){
    if(action.type==="increment"){
      return state+1
    }
    else if(action.type==="decrement"){
      return state-1
    }
    else{
      return state
    }
  }
  const [state,dispatch]=useReducer(reducer,state1)
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    </div>
  );
}

export default App;
