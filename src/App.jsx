import { useState } from "react"

export default function App() {
  const [color, setColor] = useState("Olive");
  return (
    <div className="w-full h-screen duration-300" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center px-3 py-2 rounded-xl mx-7 my-2 bg-slate-50 ">
          <button className="text-white bg-red-700 hover:bg-red-600 mx-2 w-20 h-10 rounded-2xl transition-colors" onClick={() => setColor("red")}>Red</button>
          <button className="text-white bg-green-700 hover:bg-green-600 mx-2 w-20 h-10 rounded-2xl transition-colors" onClick={() => setColor("green")}>Green</button>
          <button className="text-white bg-purple-700 hover:bg-purple-600 mx-2 w-20 h-10 rounded-2xl transition-colors " onClick={() => setColor("purple")}>Purple</button>
          <button className="text-white bg-orange-700 hover:bg-orange-600 mx-2 w-20 h-10 rounded-2xl transition-colors" onClick={() => setColor("orange")}>Orange</button>
          <button className="text-white bg-blue-700 hover:bg-blue-600 mx-2 w-20 h-10 rounded-2xl transition-colors" onClick={() => setColor("blue")}> blue</button>
        </div>
      </div>
    </div>
  )
}