import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwdGen = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //data from which password will be generated
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "~!@#$%^&*/?+-+";

    //generating password based on the length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword] )/*Dependenciez are passed in an array in the useCallback hook */
  //useCallback is a React Hook that lets you cache a function definition between re-renders.

  const copyPassToClip = useCallback(()=>{
    passwordRef.current?.select() //if current state of passwordRef is not null then select it
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password) //to copy the password on clipboard

  }, [password])


  useEffect(() =>{
    passwdGen();
  }, [length, numAllowed, charAllowed, passwdGen])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center m-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password' readOnly ref={passwordRef}
          />
          <button className='outline-none bg-cyan-400 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'
            onClick={copyPassToClip}
          >Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label > Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked = {numAllowed}
              id='numInput'
              onChange={()=>{setNumAllowed((prev) => !prev)}}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked = {charAllowed}
              id='numInput'
              onChange={()=>{setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
