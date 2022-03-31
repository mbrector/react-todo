import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Todos from './components/Todos'
import View from './components/View'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/view/:id' element={<View />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App