import React from 'react'
import { useState } from 'react'
const App = () => {
  const[count,setCount]=useState(0)
  return (
    <div className='min-h-screen min-w-screen bg-amber-100'>
      <div className='flex flex-col justify-center items-center h-screen '>
        <h1 className='text-4xl bg-amber-400 py-2 px-2 rounded-2xl'>COUNTER</h1>
        <h2 className='my-6 text-6xl font-bold'>{count}</h2>
        <div>
        <button className='font-semibold text-4xl bg-amber-800 text-white w-20 h-20 rounded-full m-4 mt-10'onClick={()=>setCount(count+1)}>+</button>
        <button className='font-semibold text-4xl bg-amber-800 text-white w-20 h-20 rounded-full m-4 mt-10'onClick={()=>setCount(0)}>0</button>
        <button className='font-semibold text-4xl bg-amber-800 text-white w-20 h-20 rounded-full m-4 mt-10'onClick={()=>setCount(count-1)}>-</button>
        </div>
      </div>
    </div>
  )
}

export default App