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
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'
import UserDetails from './components/userDetails'

function App() {
  //const name= "nina"
  const [userName] = useState("liege")

  const cars = [
    { id: 1, brand: "ferrari", color: "amarela", newCar: true, km: 0 },
    { id: 2, brand: "kia", color: "branco", newCar: false, km: 10 },
    { id: 3, brand: "ferrari", color: "vermelho", newCar: false, km: 20 }
  ]

  const pessoas = [{
    nome: "ana",
    idade:17,
    profissao: "dev"
  },
  {
    nome: "ana helena",
    idade: 57,
    profissao: "professora"
  },
  {
    nome: "liege",
    idade: 29,
    profissao: "bibliotecaria"
  }]

  function showMessage() {
    console.log("evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/*imagem em public */}
      <div>
        <img src='/img1.jpg' alt="Paisagem" />
      </div>
      {/*imagens em assets */}
      <img src={City} alt="cidade" />

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CardDetails brand="bmw" km={1000} color="Purple" newCar={true} />
      {/*reaproveitamento*/}
      <CardDetails brand="ford" km={2000} color="blue" newCar={false} />
      {/*loop em araay de objetos*/}
      {cars.map((car) => (
        <CardDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      {/* fragments */}
      <Fragments propFragment="test" />
      {/* children */}
      <Container>
        <p>
          e este é o conteudo
        </p>
      </Container>

      {/*eexecutar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />

      {/**desafio */}
      {pessoas.map((pessoa) => (
        <div key={pessoa.nome}>
          <UserDetails nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
          {pessoa.idade >= 18 ? (
            <p>Pode tirar a carteira</p>
          ) : (
            <p>Não pode tirar a carteira</p>
          )}
        </div>
      ))}

    </div>


  )
}

export default App
