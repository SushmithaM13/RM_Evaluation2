
import './App.css'
import Home from './pages/home'
import {Routes,Route} from "react-router-dom"

console.log("app");

function App() {

  return (
    <>
      <h1>hello</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
