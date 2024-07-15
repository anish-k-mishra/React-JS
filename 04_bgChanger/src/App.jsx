import { useState } from "react"


function App() {
  const [color, setcolor] = useState('beige')

  return (
    <div className="w-full h-screen duration-1000" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-orange-200 px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-blue-900 shadow-2xl" style={{backgroundColor: "Yellow"}} onClick={()=>setcolor("yellow")}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "Green"}} onClick={()=>setcolor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "Red"}} onClick={()=>setcolor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "Blue"}} onClick={()=>setcolor("blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "purple"}} onClick={()=>setcolor("purple")}>Purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "Black"}} onClick={()=>setcolor("black")}>Black</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-2xl" style={{backgroundColor: "White"}} onClick={()=>setcolor("white")}>White</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{backgroundColor: "Grey"}} onClick={()=>setcolor("grey")}>Grey</button>
        </div>
      </div>

    </div>
  )
}

export default App
