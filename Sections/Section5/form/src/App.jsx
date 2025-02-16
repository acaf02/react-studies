import './App.css'
import Myform from './components/Myform'

function App() {
  return (
    <div>
      <h2>Forms</h2>
      <Myform user={{name: "ana", email:"ana@gmail.com", bio:"sou programadora", role:"editor"}}/>
    </div>
  )
}

export default App
