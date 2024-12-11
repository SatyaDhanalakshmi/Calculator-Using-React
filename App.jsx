import React ,{useState} from 'react';
import Keypad from "./Keypad";
import './App.css'
function App(){
  const[input,setInput]=useState("")
  const handleClick=(value)=>{
    setInput(input + value )

  }
  const calculate=()=>{
      let outputVal=eval(input)
      setInput(outputVal)

  }
  const handleClear=()=>{
     setInput("")
  }
  return(
    <>
    <div className="container">
      <h1>Calculator App Using React</h1>
      <div className="calculator">
        <input type="text" value={input} className="output"/>
       <Keypad  handleClick={handleClick}  handleClear={handleClear} calculate={calculate}></Keypad>
      </div>
    </div> 
    </>
  )
}
export default App;