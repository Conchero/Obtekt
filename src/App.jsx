import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebcamCapture from './WebcamComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <WebcamCapture />
    </>
  )
}

export default App
