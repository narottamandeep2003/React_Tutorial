import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[confirm,setConfirm]=useState('');
  function handleSubmit(){
    if(name==="" || email==="" || password==="" || confirm===""){
      alert('all fields are mandatory');
      return;
    }
    if(password===confirm){
      console.log(name,email,password,confirm);
      alert("form submitted");
    }
    else{
      alert('password and confirm password should be same');
    }
  }
  return (
    <div className="App">
      <label>name:</label>
      <input type='text' onChange={(e)=>{setName(e.target.value)}} ></input><br/>
      <label>email:</label>
      <input type='text' onChange={(e)=>{setEmail(e.target.value)}}></input><br/>
      <label>password:</label>
      <input type='text' onChange={(e)=>{setPassword(e.target.value)}}></input><br/>
      <label>confirm password</label>
      <input type='text' onChange={(e)=>{setConfirm(e.target.value)}}></input><br/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
