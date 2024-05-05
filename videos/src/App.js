import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';
function App() {
 const first = useRef()
  return (
    <div className="App">
      <video src='/abc.mp4' width={500} height={300} ref={first}></video>
      <button onClick={()=>{
        first.current.play()
      }}>play</button>
      <button onClick={()=>{
        first.current.pause()

      }}>pause</button>
    </div>
  );
}

export default App;
