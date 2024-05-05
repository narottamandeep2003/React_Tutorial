import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products/1').then((res) => { return res.json() }).then((val) => { setData(val) })
  }, [])
  return (
    <div className="App">
      {(data) ? (
        <><p>{data.id}</p><p>{data.title}</p><p>{data.description}</p>
        <img src={data.thumbnail} width={500} height={500}></img></>
      ) : ""}
    </div>
  );
}

export default App;
