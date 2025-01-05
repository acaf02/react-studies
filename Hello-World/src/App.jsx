import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <h1> Fundamentos React</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <Events/>
        <Challenge />
      </div>
    
  )
}

export default App
