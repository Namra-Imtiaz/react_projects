import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:'sam',
    age:13
  }
  let newarr=[1,2,3];

  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black p-4 mb-4'>tailwind test</h1>
      <Card username='john' btn='click me' />
      <Card username='sara' btn='visit me'/>
    </>
  )
}

export default App
