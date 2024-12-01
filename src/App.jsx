
import { useState, useCallback , useEffect } from 'react'

import './App.css'

function App() {
  const [length,setlength]= useState(5)
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword] = useState('')

  const generatepassword = useCallback(() =>  {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz" ; 
        if(numberAllowed) str += '0123456789';
        if(charAllowed ) str += '!@#$%^&*()_+';
          
        for (let i = 0; i < length ; i++) {
       const char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
       
        }
        setPassword(pass)
      },
[length , numberAllowed , charAllowed])

     useEffect(()=>{
     generatepassword()
     }, [length , numberAllowed , charAllowed])

  return (
    <>
      <div className='main bg-gray-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 flex justify-center flex-col' >
          
          <h2 className='text-white text-center my-3'>Password Generator</h2>
         <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
           <input type="text" placeholder='password'
            value={password}
           className='w-full outline py-1 px-3 flex justify-center' readOnly 
            />
           <button className='text-white bg-blue-600 outline-none px-3 py-1 shrink-0'>
            Copy</button>
            </div>
           <div 
           className='flex text-sm gap-x-2'
           >
           <div className='flex items-center gap-x-1 '>
                <input type="range"
                min={4}
                max={10}
                value={length}
                className=' cursor-pointer'
                onChange={(e)=> setlength(e.target.value)}
                name=""
                id=""
                />
                <label htmlFor="length" >Length: {length}</label>
           </div>
           <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={()=>
              setNumberAllowed((prev)=> !prev )}
              name=""
              id=""
              />
              <label htmlFor="number">Numbers</label>
           </div>
           <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed(prev => !prev)
            }}
              
              name=""
              id=""
              />
              <label htmlFor="charInput">Character</label>
           </div>
           </div>
          
      </div>
    </>
  )
}

export default App
