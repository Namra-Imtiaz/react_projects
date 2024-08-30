import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(5)
  // let counter=5;
  function addvalue(){
    if(counter>=20){
      setcounter(20);
    }
    else{
    setcounter(counter+1);
    }
  }
  function removevalue(){
    if(counter<=0){
      setcounter(0);
    }
    else{
      setcounter(counter-1);
    }
  }
  
  return (
   <>
   <h1>Counter {counter}</h1>
   <h2>counter : {counter}</h2>
   <button onClick={addvalue}>increase</button>
   <button onClick={removevalue}>decrease</button>
   </>
  )
}

export default App
