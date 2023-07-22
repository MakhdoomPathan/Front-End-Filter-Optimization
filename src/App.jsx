import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product_display from './Components/Product_display/Product_display';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Product_display/>
    </>
  )
}

export default App
