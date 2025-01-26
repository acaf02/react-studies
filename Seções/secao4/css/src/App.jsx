import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 9;
  const [name] = useState("nina")
  const redTitle = false
  return (
    <div>
      {/* css global */}
      <h1> React com CSS</h1>
      {/* css de componente */}
      <MyComponent />
      <p>esse paragarfo é do app.js</p>
      {/*inline css */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>foi estilizado de forma inline</p>

      {/* css inline dinamico */}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>Css dinamico</h2>
      <h2 style={name === "nina" ? ({ color: "purple", background: "pink" }) : null}>teste nome</h2>

      {/* classe dinamica */}
      <h1 className={redTitle ? "red-title" : "title"}>Classe dinamica</h1>
      {/* css modules */}
      <Title />
    </div>
  )
}

export default App
