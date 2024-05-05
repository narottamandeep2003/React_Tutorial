import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counter';

function App() {
  let val = useSelector((state) => { return state.counter.value })
  const dispatch = useDispatch()
  return (
    <div className="App">

      <h1>{val}</h1>
      <button onClick={() => {
        dispatch(increment())
      }}>+</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>-</button>
      <button onClick={() => {
        dispatch(incrementByAmount(3))
      }}>+3</button>
    </div>
  );
}

export default App;
