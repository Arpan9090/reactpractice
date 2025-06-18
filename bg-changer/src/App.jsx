import { useState } from 'react'


function App() {
  const [color, setColor] = useState("gray")

  return (
    <div
    style={{backgroundColor: color, width:"100vw", height:"100vh"}}
    >
      <div
      className='fixed flex flex-wrap bottom-10 inset-x-0 justify-center'
      >
        <div className='flex flex-wrap px-3 py-2 bg-white rounded-3xl gap-3'>
          <button
          onClick={() => setColor("red")}
          style={{backgroundColor:"red"}}
          className='px-4 py-1 text-white outline-none'>Red</button>
          <button
          onClick={() => setColor("green")}
          style={{backgroundColor:"green"}}
          className='px-4 py-1 text-white outline-none'>Green</button>
          <button
          onClick={() => setColor("blue")}
          style={{backgroundColor:"blue"}}
          className='px-4 py-1 text-white outline-none'>blue</button>
          <button
          onClick={() => setColor("yellow")}
          style={{backgroundColor:"yellow"}}
          className='px-4 py-1 text-white outline-none'>yellow</button>
          <button
          onClick={() => setColor("brown")}
          style={{backgroundColor:"brown"}}
          className='px-4 py-1 text-white outline-none'>brown</button>
          <button
          onClick={() => setColor("lavender")}
          style={{backgroundColor:"lavender"}}
          className='px-4 py-1 text-white outline-none'>lavender</button>
          <button
          onClick={() => setColor("crimson")}
          style={{backgroundColor:"crimson"}}
          className='px-4 py-1 text-white outline-none'>crimson</button>
          <button
          onClick={() => setColor("purple")}
          style={{backgroundColor:"purple"}}
          className='px-4 py-1 text-white outline-none'>purple</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
