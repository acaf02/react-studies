import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from "./assets/city.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from "./components/ShowUserName"
import CardDetails from "./components/CardDetails"

function App() {
  const name= "nina"
  const [userName] = useState("liege")

  return (
   <div className='App'>
    <h1>Avançando em React</h1>
    {/*imagem em public */}
    <div>
      <img src='/img1.jpg' alt="Paisagem" />
    </div>
    {/*imagens em assets */}
    <img src={City} alt="cidade"/>

    <ManageData />
    <ListRender />
    <ConditionalRender />
    {/* props */}
    <ShowUserName name={userName} />
    {/* destructuring */}
    <CardDetails brand="bmw"  km={1000} color="Purple" newCar={true}/>
   {/*reaproveitamento*/}
   <CardDetails brand="ford" km={2000} color="blue" newCar={false} />
   
   </div>

   
  )
}

export default App
