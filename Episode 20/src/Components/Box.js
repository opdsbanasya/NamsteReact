import React, { useEffect, useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Box = () => {

  const [number, setNumber] = useState(0);
  const [toggleTheme, setToggleTheme] = useState(false)

  // useEffect(()=>{
  //   const p = findNthPrime(number);
  //   console.log(p);
  //   setNthPrime(p);
  // }, [number])

  const prime = useMemo(()=> findNthPrime(number), [number])

  return (
    <div className='w-full h-full px-10'>
        <div className={`w-96 h-96 border border-white rounded-lg px-10 py-5 space-y-5 ${toggleTheme && "bg-purple-700"}`}>
          <input type='number' value={number} className='outline-none border border-white bg-transparent p-2' 
          onChange={(e) => setNumber(e.target.value)}
          />
          <button className={`px-4 py-2  rounded-md ml-4 ${toggleTheme ? "bg-black":"bg-purple-700"}`}
          onClick={()=>setToggleTheme(!toggleTheme)}
          >Toggle</button>
          <p>nth Prime: {prime}</p>
        </div>
    </div>
  )
}

export default Box