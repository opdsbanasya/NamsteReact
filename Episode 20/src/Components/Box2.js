import React, { useRef, useState } from 'react'

const Box2 = () => {
    let x = 0;
    const [y, setY] = useState(0);
    let z = useRef(0);
  return (
    <div className='w-96 h-96 border border-white rounded-lg px-10 py-5 space-y-5 mx-10'>
        <div className='flex items-center justify-center gap-10'>
            <p className='w-16'>let x: {x}</p>
            <button className='px-4 py-2  rounded-md ml-4 bg-purple-700'
                onClick={()=>{
                    x = x + 1;
                    console.log(x);
                }}
            >x++</button>
        </div>
        <div className='flex items-center justify-center gap-10'>
            <p className='w-16'>state y: {y}</p>
            <button className='px-4 py-2  rounded-md ml-4 bg-purple-700'
                onClick={()=> setY(y+1)}
            >y++</button>
        </div>
        <div className='flex items-center justify-center gap-10'>
            <p className='w-16'>ref z: {z.current}</p>
            <button className='px-4 py-2  rounded-md ml-4 bg-purple-700'
                onClick={()=> {
                    z.current = z.current + 1;
                }}
            >z++</button>
        </div>
    </div>
  )
}

export default Box2