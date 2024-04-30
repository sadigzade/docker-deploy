import {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";

import About from "./pages/About";
import Welcome from "./pages/Welcome";

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)

  return (
    <div>
      <h1>value = {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <div style={{ display: "flex", gap: 15 }}>
        <Link to='about'>About</Link>
        <Link to='welcome'>Welcome</Link>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App
