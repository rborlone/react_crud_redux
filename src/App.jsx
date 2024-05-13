import { useState } from 'react'
import { BrowserRouter,  Routes, Route} from 'react-router-dom'
import { Agregar } from './components/Agregar'
import { Home } from './components/Home'
import { Actualizar } from './components/Actualizar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/agregar" element={<Agregar />}></Route>
        <Route path="/actualizar/:id" element={<Actualizar />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
