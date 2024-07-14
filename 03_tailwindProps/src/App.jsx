import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let newObj = {
    name: "Anish",
    age: 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind CSS</h1> {/*int tailwind classes are reffered as className */}
      <Card name="Anish" obj = {newObj} btn = "Click Here"/ > {/*these values will be shown in the props. an array or an object cannot be directly created and passed on here, they should be passed in objects */}
      <Card name="Anish Mishra"/> {/*for twoo cards we just need to repeat, but to change the content of element, it is handled by PROPS */}
    
    </>
  )
}

export default App
